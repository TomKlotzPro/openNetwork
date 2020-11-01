import Authentification from '../../../models/authentification.model.js'

export default function postLogin(req, res) {
    if (req.body.mail === '' || req.body.password === '')
        return res.status(400).send({ message: 'Missing Parameters' })
    else {
        Authentification.login(
            req.body.mail,
            req.body.password,
        ).then((code) => {
            if (code === 404) res.status(404).send({ message: 'User not found' })
            else if (code === 400) res.status(400).send({ message: 'Wrong password' })
            else if (code === 200) res.status(200).send({ message: 'logged' })
        })
    }
}