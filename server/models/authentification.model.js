import fs from 'fs'
import path from 'path'
import { promisify } from 'util'
import HelperUser from '../helpers/helperUser.js'
import Helper from '../helpers/helper.js'

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

        // Create user
        var user = HelperUser.createUsers(firstName, lastName, mail, password, users)

        // Return user
        return user

    }

    /**
     * @param {String} id
     * @returns {Promise<Todo>}
     */
    static async login(mail, password) {
        // Load data
        var users = JSON.parse(await readFile(usersFile, 'utf8'))

        // Retrieve user
        var user = HelperUser.getRecordByMail(mail, users)

        // if user dont existe return 404
        if ( user === null) return 404 

        // Compare hash 
        var code = Helper.comparePassword(password, user) ?  200 : 400

        // return code
        return code
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
