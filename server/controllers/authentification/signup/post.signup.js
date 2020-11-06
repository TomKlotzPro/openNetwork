import Authentification from '../../../models/authentification.model.js'

export default function postSignUp(req, res) {
    
    if ((req.body.firstname === '' || req.body.firstname === undefined) ||
        (req.body.lastname === '' || req.body.firstname === undefined) ||
        (req.body.mail === '' || req.body.firstname === undefined) ||
        (req.body.password === '' || req.body.firstname === undefined) ||
        (req.body.confirmedpassword === ''||req.body.firstname === undefined)) return res.status(400).send({ message: 'Missing Parameters' })
    else {
        Authentification.signUp(
            req.body.firstname,
            req.body.lastname,
            req.body.mail,
            req.body.password,
            req.body.confirmedpassword
        ).then((code) => {
            if ( code === 123) res.status(400).send({message:'Password are not the same'})
            res.status(200).send({ status:200, message: 'ok' })
        })
    }
}