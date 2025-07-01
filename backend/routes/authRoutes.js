import { Router } from 'express'
import { loginUser, getUser } from '../src/controllers/authController.js'
import { verifyToken } from '../middleware/verifyToken.middleware.js'

const router = Router()

router.post('/login', loginUser)
router.get('/usuarios', verifyToken, getUser)

export default router
