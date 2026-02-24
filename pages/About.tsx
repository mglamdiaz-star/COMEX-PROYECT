import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
            <p className="text-xl">
              Expertos en carga internacional con experiencia comprobada en proyectos especiales
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-center">Nuestra Historia</h2>
              
              <p className="text-gray-600 mb-6">
                COMEX nació con la visión de facilitar el comercio internacional para empresas de todos los tamaños. 
                Fundada por un equipo de expertos en logística y aduanas, nuestra compañía se ha especializado en 
                el manejo de carga internacional con proyectos complejos.
              </p>

              <p className="text-gray-600 mb-6">
                Uno de nuestros hitos más importantes fue el movimiento exitoso de equipos de rally 
                desde República Checa, demostrando nuestra capacidad para manejar carga especializada y 
                proyectos logísticos complejos a nivel internacional.
              </p>

              <p className="text-gray-600 mb-6">
                A lo largo de estos años, hemos ayudado a más de 500 empresas a expandir sus operaciones a nivel mundial, 
                superando desafíos regulatorios y optimizando sus cadenas de suministro con proveedores 
                de transporte certificados y con trayectoria comprobada.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-center mt-12">Nuestra Misión</h2>
              
              <p className="text-gray-600 mb-6">
                Facilitar el crecimiento de las empresas en el mercado global mediante soluciones integrales de 
                carga internacional, ofreciendo cotización y propuesta personalizada con proveedores certificados 
                worldwide y experiencia en proyectos especiales.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-center mt-12">Nuestra Visión</h2>
              
              <p className="text-gray-600 mb-6">
                Convertirnos en el partner estratégico líder para empresas que buscan expandirse internacionalmente, 
                eliminando barreras y creando oportunidades en el mercado global.
              </p>

              <h2 className="text-3xl font-bold mb-6 text-center mt-12">Nuestros Valores</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Integridad</h3>
                  <p className="text-gray-600">
                    Actuamos con transparencia y honestidad en todas nuestras operaciones.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Excelencia</h3>
                  <p className="text-gray-600">
                    Buscamos la más alta calidad en cada servicio que ofrecemos.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Innovación</h3>
                  <p className="text-gray-600">
                    Adoptamos tecnología de vanguardia para optimizar procesos.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold mb-3 text-primary-600">Compromiso</h3>
                  <p className="text-gray-600">
                    Nos dedicamos completamente al éxito de nuestros clientes.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-center mt-12">Nuestro Equipo</h2>
              
              <p className="text-gray-600 mb-6">
                Contamos con un equipo multidisciplinario de más de 50 profesionales, incluyendo expertos en aduanas, 
                logística, derecho internacional y tecnología. Cada miembro de nuestro equipo comparte nuestra pasión 
                por el comercio internacional y el compromiso con la excelencia.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-600 p-6 mt-12">
                <p className="text-lg text-gray-700 italic">
                  "En COMEX, no solo movemos mercancías, construimos puentes entre mercados y creamos oportunidades 
                  para que nuestras empresas clientes alcancen su máximo potencial global."
                </p>
                <p className="text-right mt-4 font-semibold text-primary-600">
                  - CEO, COMEX
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
