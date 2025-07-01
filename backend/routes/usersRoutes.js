import { Router } from 'express'
import { registerUser } from '../src/controllers/usersController.js'
import { checkRegisterCredentials } from '../middleware/verifyCredentials.middleware.js'

const router = Router()

router.post('/usuarios', checkRegisterCredentials, registerUser)

export default router
