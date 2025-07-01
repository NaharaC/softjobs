import { Router } from 'express'
import { loginUser, getUser } from '../src/controllers/authController.js'
import { verifyToken } from '../middleware/verifyToken.middleware.js'
import { checkLoginCredentials } from '../middleware/verifyCredentials.middleware.js'

const router = Router()

router.post('/login', checkLoginCredentials, loginUser)
router.get('/usuarios', verifyToken, getUser)

export default router
