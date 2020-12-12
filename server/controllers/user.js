const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const { sendConfirmationEmail, sendResetPassword } = require('../services/MailService')
const keys = require('../keys/index')
const bcrypt = require('bcrypt')

exports.getCurrentUser = function (req, res, next) {
  const user = req.user;

  if (!user) {
    return res.sendStatus(422);
  }

  return res.json(user);
};

exports.register = function (req, res) {


  const registerData = req.body
  if (!registerData.email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!registerData.password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  if (registerData.password !== registerData.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password'
      }
    })
  }

  const user = new User(registerData);

  return user.save((errors, savedUser) => {
    if (errors) {
      return res.status(422).json({ errors })
    }

    //// Send mail confirmation when user is created
    // Create token
    const token = jwt.sign({
      id: savedUser._id
    },
      keys.JWT_KEY,
    {
        expiresIn: '1d',
    })
    // Send email
    sendConfirmationEmail(savedUser, token)

    return res.json(savedUser)
  })
}

exports.login = function (req, res, next) {
  const { email, password } = req.body
  if (!email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  if (!password) {
    return res.status(422).json({
      errors: {
        password: 'is required',
        message: 'Password is required'
      }
    })
  }

  return passport.authenticate('local', (err, passportUser) => {
    if (err) {
      return next(err)
    }

    if (passportUser) {
      req.login(passportUser, function (err) {
        if (err) { next(err); }

        return res.json(passportUser)
      });
    } else {
      return res.status(422).send({
        errors: {
          'message': 'Invalid password or email'
        }
      })
    }

  })(req, res, next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({ status: 'Session destroyed!' })
}

exports.forgotPassword = function (req, res) {
  const email = req.body.email
  if (!email) {
    return res.status(422).json({
      errors: {
        email: 'is required',
        message: 'Email is required'
      }
    })
  }

  User.findOne({ email }, function (err, user) {
    if (err) { return err }
    if (!user) { return res.sendStatus(422); }

    const token = jwt.sign({
      id: user._id
    },
      keys.JWT_KEY,
      {
        expiresIn: '1h',
      })
    // Send email
    sendResetPassword(user, token)
    return res.status(200).send({ message: 'Check mailbox' })
  })



}

exports.resetPassword = function (req, res) {
  const data = req.body
  if (req.params.token === '')
    return res.status(400).send({ message: 'Missing parameter' })

  if (data.password !== data.passwordConfirmation) {
    return res.status(422).json({
      errors: {
        password: 'is not the same as confirmation password',
        message: 'Password is not the same as confirmation password'
      }
    })
  }

  try {
    const { id } = jwt.verify(req.params.token, keys.JWT_KEY)


    bcrypt.hash(data.password, 10)
      .then(hash => {
        User.updateOne({ _id: id }, { password: hash }, function (err, docs) {
          if (err) {
            console.log('Error on updating user password ' + err)
            return res.status(500).send({ message: 'Server error' })
          }
          else {
            return res.status(200).send({ message: 'Password modified' })
          }
        });

      })
      .catch(error => res.status(500).json({ error }));


  }
  catch (err) {
    console.log('Error on updating password : ' + err)
    return res.status(400).send({ message: 'Bad request' })
  }



}
/**
 * Check if the token given in the request params is valid and corresponds to a User
 * @param {Request} req
 * @param {Response} res
 */
exports.confirmEmail = function (req, res) {
  if (req.params.token === '')
      return res.status(400).send({ message: 'Missing parameter' })
  else {
      try {
        const { id } = jwt.verify(req.params.token, keys.JWT_KEY)
        User.updateOne({_id: id}, {confirmed: true}, function (err, docs) {
          if (err) {
            console.log('Error on updating user confirmation : ' + err)
            return res.status(500).send({message: 'Server error'})
          }
          else {
            return res.status(200).send({message: 'Your email adress is confirmed'})
          }
      });

      }
      catch(err) {
        console.log('Error on confirmation : ' + err)
        return res.status(400).send({message: 'The token is invalid or expired'})
      }
  }
}

/**
 * Send a mail to confirm the mail adress of a registered User
 * @param {Request} req
 * @param {Response} res
 */
exports.sendConfirmationEmail = function (req, res) {
  const { email } = req.body
  if (!email)
      return res.status(400).send({ message: 'Missing email in body' })
  else {
      try {
        User.findOne({email : email}, function (err, savedUser) {
          if (err || !savedUser) {
            return res.status(400).send({message: 'Confirmation email has not been sent'})
          }
          // Create token
          const token = jwt.sign({
            id: savedUser._id
          },
          keys.JWT_KEY,
          {
              expiresIn: '1d',
          })
          sendConfirmationEmail(savedUser, token)
          return res.status(200).send({message: 'Confirmation email has been sent'})


        });
      }
      catch(err) {
        return res.status(400).send({message: 'Confirmation email has not been sent'})
      }
  }
}
