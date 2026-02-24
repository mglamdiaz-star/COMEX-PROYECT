const express = require('express');
const router = express.Router();
const Service = require('../models/Service');
const multer = require('multer');
const path = require('path');

// Configuración de multer para subir imágenes
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

// Obtener todos los servicios
router.get('/', async (req, res) => {
    try {
        const { category, featured } = req.query;
        let query = {};
        
        if (category) query.category = category;
        if (featured === 'true') query.featured = true;
        
        const services = await Service.find(query).sort({ createdAt: -1 });
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Obtener un servicio por ID
router.get('/:id', async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        res.json(service);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo servicio
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const serviceData = {
            ...req.body,
            image: req.file ? `/uploads/${req.file.filename}` : ''
        };
        
        const service = new Service(serviceData);
        const newService = await service.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar un servicio
router.put('/:id', upload.single('image'), async (req, res) => {
    try {
        const serviceData = {
            ...req.body,
            updatedAt: Date.now()
        };
        
        if (req.file) {
            serviceData.image = `/uploads/${req.file.filename}`;
        }
        
        const service = await Service.findByIdAndUpdate(
            req.params.id,
            serviceData,
            { new: true }
        );
        
        if (!service) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        
        res.json(service);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un servicio
router.delete('/:id', async (req, res) => {
    try {
        const service = await Service.findByIdAndDelete(req.params.id);
        if (!service) {
            return res.status(404).json({ message: 'Servicio no encontrado' });
        }
        res.json({ message: 'Servicio eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
