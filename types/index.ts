export interface Service {
  _id: string;
  title: string;
  description: string;
  category: 'asesoria_estrategica' | 'gestion_operativa' | 'control_optimizacion';
  price: number;
  image: string;
  featured: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
  status: 'pending' | 'contacted' | 'closed';
  createdAt: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  service?: string;
}
