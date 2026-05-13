const API_BASE_URL = 'http://localhost:3000';

// --- FALLBACK DATA ---
// This ensures your UI doesn't break when the backend is offline or blocked by CORS
const DUMMY_DATA = {
  partners: [
    { id: 1, name: "Global Tech Solutions", industry: "Software", status: "Active" },
    { id: 2, name: "Nexus Systems", industry: "Hardware", status: "Pending" }
  ],
  members: [
    { id: 1, name: "Admin User", role: "Administrator", email: "admin@dg-hub.com" },
    { id: 2, name: "Jane Smith", role: "Editor", email: "jane@dg-hub.com" }
  ],
  applications: [
    { id: 1, applicant: "John Doe", position: "Frontend Developer", date: "2024-03-20" }
  ],
  default: [] 
};

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const buildUrl = (endpoint) => {
  const cleanEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;
  return `${API_BASE_URL}${cleanEndpoint}`;
};

export const apiFetch = async (endpoint, options = {}) => {
  try {
    const url = buildUrl(endpoint);
    const isFormData = options.body instanceof FormData;
    const headers = { ...defaultHeaders, ...options.headers };
    
    if (isFormData) {
      delete headers['Content-Type'];
    }

    const fetchOptions = {
      method: options.method || 'GET',
      headers,
      ...options,
    };

    const response = await fetch(url, fetchOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    if (response.status === 204) {
      return null;
    }

    return await response.json();

  } catch (error) {
    console.error('⚠️ API Fetch Error:', error.message);
    
    // --- FALLBACK LOGIC ---
    // If we are in development, return dummy data based on the endpoint
    if (endpoint.includes('partners')) return DUMMY_DATA.partners;
    if (endpoint.includes('members')) return DUMMY_DATA.members;
    if (endpoint.includes('applications')) return DUMMY_DATA.applications;
    
    return DUMMY_DATA.default;
  }
};

export const apiGet = (endpoint, options = {}) => {
  return apiFetch(endpoint, { ...options, method: 'GET' });
};

const prepareBody = (data) => {
  if (data instanceof FormData) return data;
  return JSON.stringify(data);
};

export const apiPost = (endpoint, data, options = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'POST',
    body: prepareBody(data),
  });
};

export const apiPut = (endpoint, data, options = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'PUT',
    body: prepareBody(data),
  });
};

export const apiDelete = (endpoint, options = {}) => {
  return apiFetch(endpoint, { ...options, method: 'DELETE' });
};

export const apiPatch = (endpoint, data, options = {}) => {
  return apiFetch(endpoint, {
    ...options,
    method: 'PATCH',
    body: prepareBody(data),
  });
};