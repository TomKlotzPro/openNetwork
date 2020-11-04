import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import request from 'supertest'
import express from 'express'
import session from 'express-session'
import apiRouter from '../../routes/routes.js'
const writeFile = promisify(fs.writeFile)
const usersFile = path.join(__dirname, '../../data/users.json')

/**
 * We recreate the express app with our apiRouter to isolate any unwanted middleware
 * Then, we can use a session secret that doesn't need the real server configuration
 */
function createExpress() {
    const app = express()
    app.use(session({
        secret: 'whatever',
        resave: false,
        saveUninitialized: false
    }))
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use('/api/', apiRouter)

    const agent = request.agent(app)
    return agent
}

describe('POST /api/signup/', () => {
    const newVals = {
        firstname: 'John',
        lastname: 'Doe',
        mail: 'john@doe.com',
        password: 'toto',
        confirmedpassword: 'toto'
    }
    const emptyVals = {
        lastname: '',
        firstname: 'John',
        mail: 'john@doe.com',
        password: 'toto',
        confirmedpassword: 'toto'
    }

    it('should add a new users', () => {
        const agent = createExpress()
        return agent
            .post('/api/signup/')
            .send(newVals)
            .expect('Content-Type', "application/json; charset=utf-8")
            .expect(200)
    })

    it('should return missing parameter', () => {
        const agent = createExpress()
        return agent
            .post('/api/signup/')
            .send(emptyVals)
            .expect('Content-Type', /json/)
            .expect(400)
    })
})