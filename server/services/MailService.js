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