import { Router } from 'express'
import authentificationRouter from './authentification.route.js'

const router = Router()

router.use('/', authentificationRouter)

export default router