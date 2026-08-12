// API Integration Service for yurekhmatrix
// Connects to backendmatrix for RFQ submissions

const NEW_BACKEND = 'https://backendmatrix-9q18.onrender.com/api';

/**
 * Get the appropriate API URL based on the current environment
 */
const getApiUrl = (): string => {
  // Always prefer the env var if set
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  if (typeof window !== 'undefined') {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
      return 'http://localhost:5000/api';
    }
  }

  // Production fallback
  return NEW_BACKEND;
};

const API_BASE_URL = getApiUrl();

// Wake up the Render free tier server (it sleeps after 15 min of inactivity)
const wakeUpServer = async (): Promise<boolean> => {
  try {
    console.log('⏳ Waking up server...');
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 60000);
    await fetch(`${API_BASE_URL}/health`, {
      method: 'GET',
      signal: controller.signal,
    });
    clearTimeout(timeout);
    console.log('✅ Server is awake');
    return true;
  } catch {
    console.log('⚠️ Wake-up ping failed, server may still be booting...');
    return false;
  }
};

export interface RFQSubmission {
  customerName: string;
  company: string;
  location: string;
  email: string;
  phone: string;
  items: Array<{
    productId: string;
    productName: string;
    category: string;
    brand: string;
    grade: string;
    quantity: number;
  }>;
  totalItems: number;
}

// Internal fetch with abort timeout
const fetchWithTimeout = async (url: string, options: RequestInit, timeoutMs: number): Promise<Response> => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timeout);
    return response;
  } catch (err) {
    clearTimeout(timeout);
    throw err;
  }
};

// Submit RFQ (Request for Quote) with wake-up + retry for Render free tier
export const submitRFQ = async (rfqData: RFQSubmission): Promise<{ success: boolean; message: string; rfqNumber?: string }> => {
  const url = `${API_BASE_URL}/rfqs`;
  const body = JSON.stringify(rfqData);
  const headers = { 'Content-Type': 'application/json' };

  console.log('🚀 Submitting RFQ to:', url);
  console.log('📦 RFQ Data:', rfqData);

  // Step 1: Wake up the server (Render free tier sleeps after 15 min)
  await wakeUpServer();

  // Step 2: Attempt submission with retry
  const maxAttempts = 2;
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      console.log(`📡 Attempt ${attempt}/${maxAttempts}...`);
      // 90 second timeout — Render cold start can take 30-60s
      const response = await fetchWithTimeout(url, {
        method: 'POST',
        headers,
        body,
        mode: 'cors',
        credentials: 'omit',
      }, 90000);

      const data = await response.json();

      if (!response.ok) {
        console.error('❌ Backend error:', data);
        throw new Error(data.message || `Failed to submit RFQ: ${response.status}`);
      }

      console.log('✅ RFQ submitted successfully:', data);
      return {
        success: data.success || true,
        message: data.message || 'RFQ submitted successfully. Admin will contact you soon.',
        rfqNumber: data.rfqNumber || undefined,
      };
    } catch (error) {
      const isLastAttempt = attempt === maxAttempts;
      const msg = error instanceof Error ? error.message : 'Unknown error';
      console.error(`❌ Attempt ${attempt} failed:`, msg);

      if (isLastAttempt) {
        console.error('❌ All attempts exhausted. Backend may still be waking up.');
        return {
          success: false,
          message: 'Backend is waking up — please wait 30 seconds and try again. Your WhatsApp message will still be sent.',
        };
      }

      // Wait 5 seconds before retry (give server more time to boot)
      console.log('⏳ Waiting 5s before retry...');
      await new Promise(resolve => setTimeout(resolve, 5000));
    }
  }

  return { success: false, message: 'Unexpected error.' };
};

// Export API URL for other modules
export { getApiUrl, API_BASE_URL };
