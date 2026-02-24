import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">COMEX</h3>
            <p className="text-gray-300">
              Expertos en carga internacional con experiencia comprobada. Especialistas en cotización y propuesta integral para tu carga, incluyendo movimiento de equipos especiales desde República Checa.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Servicios</h4>
            <ul className="space-y-2 text-gray-300">
              <li>🌍 Asesoría Estratégica</li>
              <li>⚡ Gestión Operativa</li>
              <li>📊 Control y Optimización</li>
              <li>🚛️ Movimiento desde República Checa</li>
              <li>🤝 Proveedores Certificados</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Teléfono: +1 234 567 890</li>
              <li>Email: info@comex.com</li>
              <li>Dirección: Calle Principal 123</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 COMEX. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
