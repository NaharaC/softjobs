export const checkRegisterCredentials = (req, res, next) => {
  const { email, password, rol, lenguage } = req.body
  if (!email || !password || !rol || !lenguage) {
    return res.status(400).json({ menssage: 'Se deben enviar todos los campos' })
  }
  next()
}

export const checkLoginCredentials = (req, res, next) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({ message: 'Se debe enviar el email y password' })
  }
  next()
}
