const db = require('../util/db')

module.exports = class Tweet {
    constructor(text, imageUrl, time) {
        this.text = text
        this.imageUrl = imageUrl
        this.time = time
    }
    save() {
        return db.execute('INSERT INTO tweets (text, imageUrl, time) VALUES (?, ?, ?)', [this.text, this.imageUrl, this.time])
    }
    static fetchAll() {
        return db.execute('SELECT * FROM tweets')
      }
    static findById(id) {
        return db.execute('SELECT * FROM tweets WHERE tweets.id = ?', [id])
    }
    static deleteById(id) {
        return db.execute('DELETE FROM tweets WHERE id = ?', [id])
    }
}
