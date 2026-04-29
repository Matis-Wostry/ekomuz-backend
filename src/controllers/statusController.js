export const getStatus = (req, res) => {
  res.json({
    success: true,
    message: 'API Ekomuz opérationnelle',
    version: '0.1.0',
    timestamp: new Date().toISOString()
  })
}
