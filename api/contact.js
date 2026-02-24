export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    try {
      const { name, email, phone, company, service, message } = req.body;

      // Validación básica
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }

      // Aquí podrías enviar email o guardar en base de datos
      // Por ahora, solo simulamos éxito
      console.log('Nuevo contacto:', { name, email, phone, company, service, message });

      return res.status(200).json({ 
        success: true, 
        message: 'Mensaje enviado correctamente. Nos contactaremos pronto.' 
      });
    } catch (error) {
      return res.status(500).json({ error: 'Error al enviar mensaje' });
    }
  }

  return res.status(405).json({ error: 'Método no permitido' });
}
