export const detail = (req, _, next) => {
  const safeBody = { ...req.body }
  if (safeBody.password) safeBody.password = '***'
  console.log(
    '👉🏼 DETALLE DE LA CONSULTA REALIZADA:',
    {
      method: req.method,
      url: req.originalUrl,
      body: safeBody
    })
  next()
}
