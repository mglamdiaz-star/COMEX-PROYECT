import React from 'react';
import { Service } from '../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const getCategoryColor = (category: string) => {
    const colors = {
      asesoria_estrategica: 'bg-blue-100 text-blue-800',
      gestion_operativa: 'bg-green-100 text-green-800',
      control_optimizacion: 'bg-purple-100 text-purple-800',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      {service.image && (
        <img 
          src={`http://localhost:5000${service.image}`} 
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(service.category)}`}>
            {service.category === 'asesoria_estrategica' ? 'Asesoría Estratégica' : 
             service.category === 'gestion_operativa' ? 'Gestión Operativa' :
             service.category === 'control_optimizacion' ? 'Control y Optimización' :
             'Servicio'}
          </span>
          {service.featured && (
            <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
              Destacado
            </span>
          )}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{service.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-500">
            Contactar para cotización
          </span>
          <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
