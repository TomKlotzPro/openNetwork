import fs from 'fs'
import { promisify } from 'util'
import bcrypt from 'bcrypt'

const writeFile = promisify(fs.writeFile)

export default class Helper {

    /**
     * @param {String} path
     * @param {Array} data
     * @returns {Promise<>}
     */
    static async writeToFile(path, data) {
        const json = JSON.stringify(data, null, 2)

        try {
            await writeFile(path, json)
        } catch (error) {
            console.error(error)
        }

    }

    /**
     * @param {Array} data
     * @returns {Int}
     */
    static getNewId(data) {
        try {
            var lastObject = parseInt(JSON.stringify(data[data.length - 1]['id'], null, 2))
            console.log(lastObject)
        } catch {
            console.log("Empty database")
            var lastObject = 0
        }

        return lastObject + 1
    }

    /**
     * @param {string} password
     * @returns {string} hashedPassword
     */
    static getHashPassword(password) {
        const saltRounds = 10

        var hashedPassword = bcrypt.hash(password, saltRounds)

        return hashedPassword
    }

    static comparePassword(password, user) {
        return bcrypt.compareSync(password, user['password']);
    }
}