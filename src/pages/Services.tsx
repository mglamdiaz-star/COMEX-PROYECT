import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfessionalServiceCard from '../components/ProfessionalServiceCard';
import { Service } from '../types';
import { getServices } from '../services/api';

const Services: React.FC = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [filteredServices, setFilteredServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const categories = [
    { value: '', label: 'Todos los Servicios' },
    { value: 'asesoria_estrategica', label: 'Asesoría Estratégica' },
    { value: 'gestion_operativa', label: 'Gestión Operativa' },
    { value: 'control_optimizacion', label: 'Control y Optimización' },
  ];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const servicesData = await getServices();
        setServices(servicesData);
        setFilteredServices(servicesData);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      setFilteredServices(services.filter(service => service.category === selectedCategory));
    } else {
      setFilteredServices(services);
    }
  }, [selectedCategory, services]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">🌍 Servicios Profesionales</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Asesoría y Ejecución en Comercio Internacional. Servicio integral de asesoría estratégica, 
              gestión operativa y optimización, asegurando control técnico, eficiencia logística y reducción de riesgos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Category Filter */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setSelectedCategory(category.value)}
                  className={`px-6 py-2 rounded-full font-medium transition-colors ${
                    selectedCategory === category.value
                      ? 'bg-primary-600 text-white'
                      : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          {loading ? (
            <div className="text-center py-12">
              <div className="text-xl">Cargando servicios...</div>
            </div>
          ) : filteredServices.length > 0 ? (
            <div className="space-y-12">
              {filteredServices.map((service) => (
                <ProfessionalServiceCard key={service._id} service={service} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-xl text-gray-600">
                No se encontraron servicios en esta categoría.
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
