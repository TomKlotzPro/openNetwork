
import { Router } from 'express'
import postSignUp from '../controllers/authentification/signup/post.signup.js'

const router = Router()

router.post('/signup', postSignUp)

export default router