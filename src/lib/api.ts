// API Integration Service for yurekhmatrix
// Connects to backendmatrix for RFQ submissions

const NEW_BACKEND = 'https://backendmatrix-cox3.onrender.com/api';

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

// Submit RFQ (Request for Quote)
export const submitRFQ = async (rfqData: RFQSubmission): Promise<{ success: boolean; message: string; rfqNumber?: string }> => {
  try {
    console.log('🚀 Submitting RFQ to:', `${API_BASE_URL}/rfqs`);
    console.log('📦 RFQ Data:', rfqData);

    const response = await fetch(`${API_BASE_URL}/rfqs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rfqData),
      mode: 'cors',
      credentials: 'omit',
    });

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
    console.error('❌ Error submitting RFQ:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'Failed to submit RFQ. Please try again.',
    };
  }
};

// Export API URL for other modules
export { getApiUrl, API_BASE_URL };
