// Datos estáticos de servicios para Vercel
const services = [
    {
        _id: "1",
        title: "Asesoría Estratégica",
        description: "Definición completa de la operación evaluando riesgos, costos y estructura logística óptima. Incluye análisis de viabilidad, evaluación financiera y tributaria, definición contractual y planificación logística.",
        category: "asesoria_estrategica",
        price: 0,
        featured: true,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "2",
        title: "Gestión Operativa (End-to-End)",
        description: "Ejecución completa de la operación desde origen hasta entrega final. Coordinación internacional, supervisión documental, gestión aduanera y coordinación local con seguimiento continuo.",
        category: "gestion_operativa",
        price: 0,
        featured: true,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "3",
        title: "Control y Optimización",
        description: "Protección del cliente y mejora continua de operaciones. Control de costos vs proyecciones, gestión de riesgos, optimización de procesos e informe final de operación con recomendaciones estratégicas.",
        category: "control_optimizacion",
        price: 0,
        featured: true,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "4",
        title: "Evaluación de Viabilidad",
        description: "Análisis técnico completo de operaciones de importación/exportación. Revisión de modelo de compra (FOB, CIF, EXW), evaluación de riesgos y análisis de proveedores internacionales.",
        category: "asesoria_estrategica",
        price: 0,
        featured: false,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "5",
        title: "Análisis Financiero y Tributario",
        description: "Proyección detallada de costos totales incluyendo flete, seguro, impuestos y gastos locales. Estimación de derechos, IVA e identificación de sobrecostos potenciales.",
        category: "asesoria_estrategica",
        price: 0,
        featured: false,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "6",
        title: "Coordinación Internacional",
        description: "Gestión directa con proveedores, coordinación con freight forwarder, supervisión de booking y seguimiento completo del embarque con comunicación constante.",
        category: "gestion_operativa",
        price: 0,
        featured: false,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "7",
        title: "Coordinación Aduanera",
        description: "Trabajo conjunto con agencia de aduana, supervisión de clasificación arancelaria, control de Declaración de Ingreso (DIN) y seguimiento de aforos o fiscalizaciones.",
        category: "gestion_operativa",
        price: 0,
        featured: false,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    },
    {
        _id: "8",
        title: "Control de Costos y Optimización",
        description: "Comparación detallada de costos proyectados vs reales, identificación de desviaciones, análisis de gastos portuarios y recomendaciones de mejora estructural.",
        category: "control_optimizacion",
        price: 0,
        featured: false,
        image: "",
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }
];

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    try {
      const { category } = req.query;
      
      let filteredServices = services;
      
      if (category) {
        filteredServices = services.filter(service => service.category === category);
      }
      
      return res.status(200).json(filteredServices);
    } catch (error) {
      return res.status(500).json({ error: 'Error al obtener servicios' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
