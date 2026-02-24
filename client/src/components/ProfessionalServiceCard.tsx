import React from 'react';
import { Service } from '../types';

interface ProfessionalServiceCardProps {
  service: Service;
}

const ProfessionalServiceCard: React.FC<ProfessionalServiceCardProps> = ({ service }) => {
  const getCategoryIcon = (category: string) => {
    const icons = {
      asesoria_estrategica: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      gestion_operativa: (
        <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      control_optimizacion: (
        <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    };
    return icons[category as keyof typeof icons] || icons.asesoria_estrategica;
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      asesoria_estrategica: 'bg-blue-50 border-blue-200',
      gestion_operativa: 'bg-green-50 border-green-200',
      control_optimizacion: 'bg-purple-50 border-purple-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-50 border-gray-200';
  };

  const getCategoryTitle = (category: string) => {
    const titles = {
      asesoria_estrategica: '1️⃣ ASESORÍA ESTRATÉGICA',
      gestion_operativa: '2️⃣ GESTIÓN OPERATIVA',
      control_optimizacion: '3️⃣ CONTROL Y OPTIMIZACIÓN',
    };
    return titles[category as keyof typeof titles] || 'SERVICIO';
  };

  return (
    <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 ${getCategoryColor(service.category)}`}>
      {/* Header */}
      <div className={`p-6 ${getCategoryColor(service.category)}`}>
        <div className="flex items-center space-x-3">
          {getCategoryIcon(service.category)}
          <div>
            <h3 className="text-lg font-bold text-gray-800">{getCategoryTitle(service.category)}</h3>
            <p className="text-sm text-gray-600">Servicio profesional</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h4 className="text-xl font-semibold mb-3 text-gray-800">{service.title}</h4>
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
        
        {service.featured && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118-1.118l-2.888-3.976a1 1 0 00-1.118-.363l-4.674 1.518a1 1 0 01-1.81-.588L6.892 5.849a1 1 0 00-.69-.95H1.427c-.969 0-1.371 1.24-.588 1.81l3.976 2.888a1 1 0 01.363 1.118l-1.518 4.674z" />
              </svg>
              <span className="text-yellow-800 font-medium">Servicio destacado</span>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between">
          <span className="text-lg font-medium text-gray-500">
            Contactar para asesoría
          </span>
          <button className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Solicitar información
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalServiceCard;
