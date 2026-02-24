import axios from 'axios';
import { Service, Contact, ContactForm } from '../types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Servicios
export const getServices = async (category?: string, featured?: boolean): Promise<Service[]> => {
  const params = new URLSearchParams();
  if (category) params.append('category', category);
  if (featured) params.append('featured', 'true');
  
  const response = await api.get(`/services?${params}`);
  return response.data;
};

export const getService = async (id: string): Promise<Service> => {
  const response = await api.get(`/services/${id}`);
  return response.data;
};

export const createService = async (formData: FormData): Promise<Service> => {
  const response = await api.post('/services', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const updateService = async (id: string, formData: FormData): Promise<Service> => {
  const response = await api.put(`/services/${id}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

export const deleteService = async (id: string): Promise<void> => {
  await api.delete(`/services/${id}`);
};

// Contactos
export const getContacts = async (status?: string): Promise<Contact[]> => {
  const params = new URLSearchParams();
  if (status) params.append('status', status);
  
  const response = await api.get(`/contact?${params}`);
  return response.data;
};

export const createContact = async (contact: ContactForm): Promise<Contact> => {
  const response = await api.post('/contact', contact);
  return response.data;
};

export const updateContact = async (id: string, contact: Partial<Contact>): Promise<Contact> => {
  const response = await api.put(`/contact/${id}`, contact);
  return response.data;
};

export const deleteContact = async (id: string): Promise<void> => {
  await api.delete(`/contact/${id}`);
};
