const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Obtener todos los contactos
router.get('/', async (req, res) => {
    try {
        const { status } = req.query;
        let query = {};
        
        if (status) query.status = status;
        
        const contacts = await Contact.find(query).sort({ createdAt: -1 });
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Crear un nuevo contacto
router.post('/', async (req, res) => {
    try {
        const contact = new Contact(req.body);
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Actualizar estado de contacto
router.put('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        
        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Eliminar un contacto
router.delete('/:id', async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (!contact) {
            return res.status(404).json({ message: 'Contacto no encontrado' });
        }
        res.json({ message: 'Contacto eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
