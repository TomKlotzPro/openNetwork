const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/user');
const AuthCtrl = require('../controllers/auth');

router.get('/me', AuthCtrl.onlyAuthUser, UsersCtrl.getCurrentUser);

router.post('/register', UsersCtrl.register)
router.post('/login', UsersCtrl.login)
router.post('/logout', UsersCtrl.logout)
router.post('/confirm/:token', UsersCtrl.confirmEmail)

router.post('/forgot', UsersCtrl.forgotPassword)
router.post('/resetPwd/:token', UsersCtrl.resetPassword)


module.exports = router;
