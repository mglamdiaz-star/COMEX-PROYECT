import { Service } from '../types';

const API_BASE_URL = process.env.NODE_ENV === 'production' 
  ? '' // En producción, usa el mismo dominio
  : 'http://localhost:5000';

// Servicios
export const getServices = async (category?: string): Promise<Service[]> => {
  try {
    const url = category ? `${API_BASE_URL}/api/services?category=${category}` : `${API_BASE_URL}/api/services`;
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error fetching services');
    return response.json();
  } catch (error) {
    console.error('Error fetching services:', error);
    return [];
  }
};

export const getService = async (id: string): Promise<Service> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/services/${id}`);
    if (!response.ok) throw new Error('Error fetching service');
    return response.json();
  } catch (error) {
    console.error('Error fetching service:', error);
    throw error;
  }
};

export const createService = async (formData: FormData): Promise<Service> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/services`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) throw new Error('Error creating service');
    return response.json();
  } catch (error) {
    console.error('Error creating service:', error);
    throw error;
  }
};

export const updateService = async (id: string, formData: FormData): Promise<Service> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/services/${id}`, {
      method: 'PUT',
      body: formData,
    });
    
    if (!response.ok) throw new Error('Error updating service');
    return response.json();
  } catch (error) {
    console.error('Error updating service:', error);
    throw error;
  }
};

export const deleteService = async (id: string): Promise<void> => {
  await fetch(`${API_BASE_URL}/api/services/${id}`, {
    method: 'DELETE',
  });
};

// Contactos
export const submitContact = async (formData: {
  name: string;
  email: string;
  phone: string;
  company?: string;
  service?: string;
  message: string;
}) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (!response.ok) throw new Error('Error submitting contact');
    return response.json();
  } catch (error) {
    console.error('Error submitting contact:', error);
    throw error;
  }
};
