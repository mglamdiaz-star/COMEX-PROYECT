import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProfessionalServiceCard from '../components/ProfessionalServiceCard';
import { Service } from '../types';

const mockServices: Service[] = [
  {
    _id: '1',
    title: 'Carga Aérea Internacional',
    description: 'Transporte rápido y seguro para mercancías urgentes con cobertura mundial. Coordinación completa con aerolíneas y gestión de documentación aérea.',
    category: 'gestion_operativa' as const,
    price: 0,
    image: 'air',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '2',
    title: 'Carga Marítima',
    description: 'Soluciones económicas para grandes volúmenes con contenedores completos (FCL) y consolidados (LCL). Rutas globales optimizadas.',
    category: 'gestion_operativa' as const,
    price: 0,
    image: 'sea',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '3',
    title: 'Aduanas y Documentación',
    description: 'Gestión completa de trámites aduaneros, clasificación arancelaria y documentación internacional. Expertos en regulaciones globales.',
    category: 'asesoria_estrategica' as const,
    price: 0,
    image: 'customs',
    featured: true,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '4',
    title: 'Seguro de Carga',
    description: 'Pólizas de seguro completas para mercancías en tránsito internacional. Cobertura contra pérdida, daño y robo.',
    category: 'asesoria_estrategica' as const,
    price: 0,
    image: 'insurance',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '5',
    title: 'Almacenamiento y Distribución',
    description: 'Servicios de almacenamiento estratégico y distribución final. Gestión de inventario y logística de última milla.',
    category: 'control_optimizacion' as const,
    price: 0,
    image: 'warehouse',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    _id: '6',
    title: 'Consultoría Logística',
    description: 'Análisis y optimización de cadenas de suministro. Reducción de costos y mejora de eficiencia en procesos logísticos.',
    category: 'control_optimizacion' as const,
    price: 0,
    image: 'consulting',
    featured: false,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

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
    // Simular carga y usar datos mock
    setTimeout(() => {
      setServices(mockServices);
      setFilteredServices(mockServices);
      setLoading(false);
    }, 1000);
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
