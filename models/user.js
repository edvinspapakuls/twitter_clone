const db = require('../util/db')

module.exports = class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }
    create() {
        return db.execute('INSERT INTO users (email, password) VALUES (?, ?)', [this.email, this.password])
    }
    static findByData(email, password) {
        return db.execute('SELECT id FROM users WHERE email = ? AND password = ?', [email, password])
    }
    // static fetchAll() {
    //     return db.execute('SELECT * FROM tweets')
    //   }
    // static findById(id) {
    //     return db.execute('SELECT * FROM tweets WHERE tweets.id = ?', [id])
    // }
    // static deleteById(id) {
    //     return db.execute('DELETE FROM tweets WHERE id = ?', [id])
    // }
}
