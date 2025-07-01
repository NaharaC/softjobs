import express from 'express'
import cors from 'cors'

import userRoutes from './routes/usersRoutes.js'
import authRoutes from './routes/authRoutes.js'
import { detail } from './middleware/detail.middleware.js'

const PORT = process.env.PORT || 3000
const app = express()
app.use(express.json())
app.use(cors())
app.use(detail)

app.use(userRoutes)
app.use(authRoutes)

app.listen(PORT, console.log(`🔥 Server on http://localhost:${PORT}`))
