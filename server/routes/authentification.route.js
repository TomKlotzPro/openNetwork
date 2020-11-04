
import { Router } from 'express'
import postSignUp from '../controllers/authentification/signup/post.signup.js'
import postLogin from '../controllers/authentification/login/post.login.js'


const router = Router()

router.post('/signup', postSignUp)
router.post('/login', postLogin)

export default router