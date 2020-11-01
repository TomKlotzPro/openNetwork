import Helper from './helper.js'
import path from 'path'

const usersFile = path.join(__dirname, '../data/users.json')

export default class Helperuser {
    /**
     * @param {string} id
     * @param {Array} users
     * @returns {Todo}
     */
    static getuserByUserName(id, users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].id === parseInt(id)) {
                return users[i]
            }
        }
        return null
    }

    /**
     * @param {Todo} user
     * @param {Array} users
     */
    static deleteuser(user, users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i] === user) {
                // Delete user
                users.splice(i, 1)
                // Save Data
                Helper.writeToFile(usersFile, users)
                return
            }
        }
    }

    /**
     * @param {Todo} user
     * @param {String} description
     * @param {Boolean} finished
     * @param {JSON} users
     * @returns {Todo}
     */
    static updateuser(user, description = null, finished = null, users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i] === user) {

                // Save users
                Helper.writeToFile(usersFile, users)
                return users[i]
            }
        }
    }

    /**
     * @param {string} firstName
     * @param {string} lastName
     * @param {string} mail
     * @param {string} password
     * @param {JSON} users
     * @returns {user}
     */
    static createUsers(firstName, lastName, mail, password, users) {
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
    static getRecordByMail(mail, users) {
        for (var i = 0; i < users.length; i++) {
            if (users[i].mail === mail) {
                return users[i]
            }
        }
        return null
    }
}