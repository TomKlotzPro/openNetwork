const express = require('express');
const router = express.Router();

const UsersCtrl = require('../controllers/user');
const AuthCtrl = require('../controllers/auth');

/**
 * Allow to get the current user
 * @route GET /users/me
 * @group users - Operations about users
 * @returns {object} 200 - Return the user
 * @returns {Error} 422 - Error found
 */
router.get('/me', AuthCtrl.onlyAuthUser, UsersCtrl.getCurrentUser);

/**
 * Allow to register a user
 * @route POST /users/register
 * @group users - Operations about users
 * @param {object} user - User credentials with login and password
 * @returns {object} 201 - Return the user created
 * @returns {Error} 422 - Error found
 */
router.post('/register', UsersCtrl.register)

/**
 * Allow to login a user
 * @route POST /users/login
 * @group users - Operations about users
 * @param {object} user - User credentials with login and password
 * @returns {object} 200 - Return the session created with passport
 * @returns {Error} 422 - Error found
 */
router.post('/login', UsersCtrl.login)

/**
 * Allow to disconnect a user
 * @route POST /users/logout
 * @group users - Operations about users
 * @returns {string} 200 - Destroy the session by invalidating JWT 
 * @returns {Error} 422 - Error found
 */
router.post('/logout', UsersCtrl.logout)

/**
 * Allow to ask a password reset
 * @route POST /users/forgot
 * @group users - Operations about users
 * @param {object} user - User credentials with only email
 * @returns {string} 200 - Success and sending an email to the user
 * @returns {Error} 422 - Error found
 */
router.post('/forgot', UsersCtrl.forgotPassword)

/**
 * Allow to enter a code to reset password
 * @route POST /users/resetPwd/:token
 * @group users - Operations about users
 * @param {string} token - Token sent by email to the user
 * @returns {string} 200 - Password modified
 * @returns {Error} 422 - Password is not the same as confirmation password
 * @returns {Error} 500 - Server error
 */
router.post('/resetPwd/:token', UsersCtrl.resetPassword)

/**
 * Allow to send a confirmation email
 * @route POST /users/send-confirmation-email
 * @group users - Operations about users
 * @param {object} user - User credentials with only email
 * @returns {string} 200 - Confirmation email has been sent
 * @returns {Error} 400 - Confirmation email has not been sent
 */
router.post('/send-confirmation-email', UsersCtrl.sendConfirmationEmail)

/**
 * Allow to send a confirmation email
 * @route POST /users/confirm/:token*
 * @group users - Operations about users
 * @param {string} token - Token to confirm email
 * @returns {string} 200 - Your email adress is confirmed
 * @returns {Error} 400 - The token is invalid or expired
 * @returns {Error} 500 - Server error
 */
router.get('/confirm/:token*', UsersCtrl.confirmEmail)

module.exports = router;
