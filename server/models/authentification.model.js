import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import HelperUser from '../helpers/helperUser.js'

const readFile = promisify(fs.readFile)
const usersFile = path.join(__dirname, '../data/users.json')

export default class Authentification {

    /**
     * @param {String} description
     * @param {Boolean} [finished=false]
     * @returns {int| null}
     */
    static async signUp(firstName, lastName, mail, password, confirmedPassword) {
        // Load data
        var users = JSON.parse(await readFile(usersFile, 'utf8'))

        // Check if password are the same
        if (password !== confirmedPassword) return 123

        var user = HelperUser.createUsers(firstName, lastName, mail, password, users)

        return user

    }

    /**
     * @param {String} id
     * @returns {Promise<Todo>}
     */
    static async login(email, password) {

    }

    /**
    * @param {String} id
    * @param {String} [description=null]
    * @param {Boolean} [finished=null]
    * @returns {Promise<Todo>}
    */
    static async update(id, description = null, finished = null) {

    }
}
