import Helper from './helper.js'
import path from 'path'
import fs from 'fs'
import { promisify } from 'util'

const readFile = promisify(fs.readFile)
const usersFile = path.join(__dirname, '../data/users.json')

export default class HelperUser {
    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} mail
     * @param {string} password
     * @param {JSON} users
     * @returns {user}
     */
    static async createUsers(firstName, lastName, mail, password) {
        // Load data
        var users = JSON.parse(await readFile(usersFile, 'utf8'))

        Helper.getHashPassword(password).then((HashedPassword) => {
            var user = {
                id: Helper.getNewId(users),
                firstName: firstName,
                lastName: lastName,
                mail: mail,
                password: HashedPassword,
                confirmedMail: false
            }

            // Add user to Json array
            users.push(user)

            // Save data
            Helper.writeToFile(usersFile, users)

            return user
        })
    }

    /**
     * @param {string} email
     * @param {Array} users
     * @returns {null || user}
     */
    static async getRecordByMail(mail) {
        // Load data
        var users = JSON.parse(await readFile(usersFile, 'utf8'))

        for (var i = 0; i < users.length; i++) {
            if (users[i].mail === mail) {
                return users[i]
            }
        }
        return null
    }

    static deleteUser() {

    }

    static updateUser() {

    }
}