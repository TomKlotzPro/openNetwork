import HelperUser from '../helpers/helperUser.js'
import Helper from '../helpers/helper.js'

export default class Authentification {
    /**
     * @param {String} description
     * @param {Boolean} [finished=false]
     * @returns {int| null}
     */
    static async signUp(firstName, lastName, mail, password, confirmedPassword) {
        // Check if password are the same
        if (password !== confirmedPassword) return 123

        // Create user
        HelperUser.createUsers(firstName, lastName, mail, password).then((user) => {
            if (user !== null) return 200
            else return 500
        })
    }

    /**
     * @param {String} mail
     * @param {String} password
     * @returns {int}
     */
    static async login(mail, password) {
        const code = HelperUser.getRecordByMail(mail).then((user) => {
        // if user dont existe return 404
        if (user === null) return 404
        // Compare hash 
        return Helper.comparePassword(password, user) ? 200 : 404
        })
        
        return code
    }
}
