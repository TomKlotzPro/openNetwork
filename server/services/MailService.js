const nodemailer = require('nodemailer')
const keys = require('../keys/index')

/**
 * Send a confirmation email to a user using nodemailer
 * @param {User} user 
 * @param {JSONWebToken} token 
 */
exports.sendConfirmationEmail = function (user, token) {
    // TODO: Set here an email account from our mail provider
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: keys.MAILSERVICE_MAIL, 
            pass: keys.MAILSERVICE_PASS
        }
    });
    let mailOptions = {
        from: 'openetwork.mail@gmail.com',
        to: `${user.email}`,
        subject: 'Confirmation email',
        html: `Click on this <a href="http://localhost:3000/confirm/${token}">link</a> to confirm your email.`
        // FIXME: Set website url from local config file instead of localhost
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occured when sending a mail : ' + err);
        }
        else console.log('Email sent');
    });
}

exports.sendResetPassword = function (user, token) {
    // TODO: Set here an email account from our mail provider
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: keys.MAILSERVICE_MAIL, 
            pass: keys.MAILSERVICE_PASS
        }
    });

    let mailOptions = {
        from: 'openetwork.mail@gmail.com',
        to: `${user.email}`,
        subject: 'Reset password',
        html: `<img src="assets/images/opentwk.svg" alt="Openetwork">
        <p>Hi ${user.name},</p>

        <p>You have requested a reset of the password for your Openetwork account.</p>
 
        <p>To create your new password, please click <a href="http://localhost:3000/reset?token=${token}">here</a>.</p>
         
        <p>If you havn't tried to reset your password, just ignore this mail</p>
        
        <p>Have fun on our website ! </p>

        <p>Openetwork's dev team</p>`,
        // attachments: [{
        //     filename: 'opentwk.svg',
        //     path: 'assets/images/opentwk.svg',
        //     cid: 'logo' //same cid value as in the html img src
        // }]

        // FIXME: Set website url from local config file instead of localhost
    };

    transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            console.log('Error occured when sending a mail : ' + err);
        }
        else console.log('Email sent');
    });
