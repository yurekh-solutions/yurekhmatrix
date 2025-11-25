// API Integration Service for yurekhmatrix
// Connects to backendmatrix for real dynamic data

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export interface ApiProduct {
  _id: string;
  name: string;
  category: string;
  description: string;
  price?: {
    amount?: number;
    currency?: string;
    unit?: string;
  };
  stock?: {
    available?: boolean;
    quantity?: number;
    minimumOrder?: number;
  };
  image?: string;
  features?: string[];
  applications?: string[];
  specifications?: any;
  status: string;
  createdAt?: string;
  supplierId?: string;
  supplierName?: string;
}

export interface ApiCategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
}

// Fetch all products from backend
export const fetchProducts = async (): Promise<ApiProduct[]> => {
  try {
    console.log('🚀 Fetching products from:', `${API_BASE_URL}/products`);
    const response = await fetch(`${API_BASE_URL}/products`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Products fetched:', data);
    
    // Return products array, handle different response formats
    return data.data || data.products || data || [];
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    return [];
  }
};

// Fetch product by ID
export const fetchProductById = async (id: string): Promise<ApiProduct | null> => {
  try {
    console.log('🚀 Fetching product:', id);
    const response = await fetch(`${API_BASE_URL}/products/${id}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch product: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Product fetched:', data);
    
    return data.data || data.product || data || null;
  } catch (error) {
    console.error('❌ Error fetching product:', error);
    return null;
  }
};

// Fetch products by category
export const fetchProductsByCategory = async (category: string): Promise<ApiProduct[]> => {
  try {
    console.log('🚀 Fetching products by category:', category);
    const response = await fetch(`${API_BASE_URL}/products?category=${category}`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Products fetched:', data);
    
    return data.data || data.products || data || [];
  } catch (error) {
    console.error('❌ Error fetching products:', error);
    return [];
  }
};

// Fetch all categories
export const fetchCategories = async (): Promise<ApiCategory[]> => {
  try {
    console.log('🚀 Fetching categories');
    const response = await fetch(`${API_BASE_URL}/category`);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch categories: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Categories fetched:', data);
    
    return data.data || data.categories || data || [];
  } catch (error) {
    console.error('❌ Error fetching categories:', error);
    return [];
  }
};

// Search products
export const searchProducts = async (query: string): Promise<ApiProduct[]> => {
  try {
    console.log('🚀 Searching products:', query);
    const response = await fetch(`${API_BASE_URL}/products?search=${encodeURIComponent(query)}`);
    
    if (!response.ok) {
      throw new Error(`Failed to search products: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Search results:', data);
    
    return data.data || data.products || data || [];
  } catch (error) {
    console.error('❌ Error searching products:', error);
    return [];
  }
};

// Submit RFQ (Request for Quote)
export const submitRFQ = async (rfqData: any): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🚀 Submitting RFQ:', rfqData);
    const response = await fetch(`${API_BASE_URL}/rfq/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(rfqData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to submit RFQ: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ RFQ submitted:', data);
    
    return {
      success: data.success || true,
      message: data.message || 'RFQ submitted successfully',
    };
  } catch (error) {
    console.error('❌ Error submitting RFQ:', error);
    return {
      success: false,
      message: 'Failed to submit RFQ. Please try again.',
    };
  }
};

// Submit product inquiry
export const submitProductInquiry = async (inquiryData: any): Promise<{ success: boolean; message: string }> => {
  try {
    console.log('🚀 Submitting inquiry:', inquiryData);
    const response = await fetch(`${API_BASE_URL}/products/inquiry`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inquiryData),
    });
    
    if (!response.ok) {
      throw new Error(`Failed to submit inquiry: ${response.status}`);
    }
    
    const data = await response.json();
    console.log('✅ Inquiry submitted:', data);
    
    return {
      success: data.success || true,
      message: data.message || 'Inquiry submitted successfully',
    };
  } catch (error) {
    console.error('❌ Error submitting inquiry:', error);
    return {
      success: false,
      message: 'Failed to submit inquiry. Please try again.',
    };
  }
};

// Get featured products
export const fetchFeaturedProducts = async (): Promise<ApiProduct[]> => {
  try {
    console.log('🚀 Fetching featured products');
    const response = await fetch(`${API_BASE_URL}/products?featured=true&limit=7`);
    
    if (!response.ok) {
      // Fallback: fetch regular products and limit to 7
      return (await fetchProducts()).slice(0, 7);
    }
    
    const data = await response.json();
    console.log('✅ Featured products fetched:', data);
    
    return (data.data || data.products || data || []).slice(0, 7);
  } catch (error) {
    console.error('❌ Error fetching featured products:', error);
    return [];
  }
};
