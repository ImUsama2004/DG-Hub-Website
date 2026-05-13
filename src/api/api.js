const API_BASE_URL = 'http://localhost:3000';

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

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('API Fetch Error:', error);
    throw error;
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