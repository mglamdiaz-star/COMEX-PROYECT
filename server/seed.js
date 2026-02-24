const mongoose = require('mongoose');
const Service = require('./models/Service');

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/comex', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const services = [
    {
        title: "Asesoría Estratégica",
        description: "Definición completa de la operación evaluando riesgos, costos y estructura logística óptima. Incluye análisis de viabilidad, evaluación financiera y tributaria, definición contractual y planificación logística.",
        category: "asesoria_estrategica",
        price: 0,
        featured: true,
        image: ""
    },
    {
        title: "Gestión Operativa (End-to-End)",
        description: "Ejecución completa de la operación desde origen hasta entrega final. Coordinación internacional, supervisión documental, gestión aduanera y coordinación local con seguimiento continuo.",
        category: "gestion_operativa",
        price: 0,
        featured: true,
        image: ""
    },
    {
        title: "Control y Optimización",
        description: "Protección del cliente y mejora continua de operaciones. Control de costos vs proyecciones, gestión de riesgos, optimización de procesos e informe final de operación con recomendaciones estratégicas.",
        category: "control_optimizacion",
        price: 0,
        featured: true,
        image: ""
    },
    {
        title: "Evaluación de Viabilidad",
        description: "Análisis técnico completo de operaciones de importación/exportación. Revisión de modelo de compra (FOB, CIF, EXW), evaluación de riesgos y análisis de proveedores internacionales.",
        category: "asesoria_estrategica",
        price: 0,
        featured: false,
        image: ""
    },
    {
        title: "Análisis Financiero y Tributario",
        description: "Proyección detallada de costos totales incluyendo flete, seguro, impuestos y gastos locales. Estimación de derechos, IVA e identificación de sobrecostos potenciales.",
        category: "asesoria_estrategica",
        price: 0,
        featured: false,
        image: ""
    },
    {
        title: "Coordinación Internacional",
        description: "Gestión directa con proveedores, coordinación con freight forwarder, supervisión de booking y seguimiento completo del embarque con comunicación constante.",
        category: "gestion_operativa",
        price: 0,
        featured: false,
        image: ""
    },
    {
        title: "Coordinación Aduanera",
        description: "Trabajo conjunto con agencia de aduana, supervisión de clasificación arancelaria, control de Declaración de Ingreso (DIN) y seguimiento de aforos o fiscalizaciones.",
        category: "gestion_operativa",
        price: 0,
        featured: false,
        image: ""
    },
    {
        title: "Control de Costos y Optimización",
        description: "Comparación detallada de costos proyectados vs reales, identificación de desviaciones, análisis de gastos portuarios y recomendaciones de mejora estructural.",
        category: "control_optimizacion",
        price: 0,
        featured: false,
        image: ""
    }
];

async function seedServices() {
    try {
        // Limpiar servicios existentes
        await Service.deleteMany({});
        console.log('Servicios existentes eliminados');

        // Insertar nuevos servicios
        await Service.insertMany(services);
        console.log('Servicios de ejemplo insertados correctamente');

        // Mostrar servicios insertados
        const insertedServices = await Service.find({});
        console.log(`Total de servicios insertados: ${insertedServices.length}`);
        
        insertedServices.forEach((service, index) => {
            console.log(`${index + 1}. ${service.title} - ${service.category} - Contactar para cotización`);
        });

    } catch (error) {
        console.error('Error al insertar servicios:', error);
    } finally {
        mongoose.connection.close();
    }
}

seedServices();
