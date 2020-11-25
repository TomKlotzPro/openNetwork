const User = require('../models/user');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const { sendConfirmationEmail } = require('../services/MailService')
const keys = require('../keys/index')

exports.getCurrentUser = function (req, res, next) {
  const user = req.user;

  if(!user) {
    return res.sendStatus(422);
  }

  return res.json(user);
};

exports.register = function(req, res) {
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
      return res.status(422).json({errors})
    }

    //// Send mail confirmation when user is created
    // Create token
    const token = jwt.sign({
      id: savedUser._id
    }, 
    'JWT_KEY', //FIXME: Extract key from local config file
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
      return res.status(422).send({errors: {
        'message': 'Invalid password or email'
      }})
    }

  })(req, res, next)
}

exports.logout = function (req, res) {
  req.logout()
  return res.json({status: 'Session destroyed!'})
}

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
            return res.status(200).send({message: 'Confirmed'})
          }
      });
        
      }
      catch(err) {
        console.log('Error on confirmation : ' + err)
        return res.status(400).send({message: 'Bad request'})
      }
  }
}

