// import { findUserModel } from '../models/usersModel.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

// import 'dotenv/config'

// const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body
//     const user = await findUserModel(email)
//     if (!user) {
//       res.status(401).json({ message: 'no autorizado' })
//     }
//     const isPasswordValid = bcrypt.compareSync(password, user.password)
//     if (!isPasswordValid) {
//       res.status(401).json({ message: 'no autorizado' })
//     }
//   } catch (error) {
//   }
// }
