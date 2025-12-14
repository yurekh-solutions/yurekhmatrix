// API Integration Service for yurekhmatrix
// Connects to backendmatrix for RFQ submissions

/**
 * Get the appropriate API URL based on the current environment
 * - Localhost: Uses http://localhost:5000/api
 * - Vercel Production: Uses https://backendmatrix.onrender.com/api
 * - Fallback: Uses VITE_API_URL or defaults to localhost
 */
const getApiUrl = (): string => {
  if (typeof window === 'undefined') {
    // Server-side rendering fallback
    return import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
  }

  const hostname = window.location.hostname;
  console.log('🌐 Current hostname:', hostname);

  // Development: localhost
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    console.log('💻 Development mode: Using localhost backend');
    return 'http://localhost:5000/api';
  }

  // Production: Vercel deployments
  if (hostname.includes('vercel.app') || hostname === 'ritzyard.com' || hostname === 'www.ritzyard.com') {
    console.log('✅ Production mode: Using Render backend');
    return 'https://backendmatrix.onrender.com/api';
  }

  // Fallback to environment variable
  if (import.meta.env.VITE_API_URL) {
    console.log('⚙️ Using VITE_API_URL:', import.meta.env.VITE_API_URL);
    return import.meta.env.VITE_API_URL;
  }

  // Last resort: localhost
  console.log('⚠️ Defaulting to localhost backend');
  return 'http://localhost:5000/api';
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
export const submitRFQ = async (rfqData: RFQSubmission): Promise<{ success: boolean; message: string }> => {
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
