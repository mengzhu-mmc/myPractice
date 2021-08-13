const connection = require('../app/database')

class fileService {
    async createAvatar(filename, mimetype, size, userId) {
        const statement = `INSERT INTO avatar (filename, mimetype, size, user_id) VALUES (?, ?, ?, ?)`
        const [result] = await connection.execute(statement, [filename, mimetype, size, userId])
        return result
   }

   async getAvatarByUserId(userId) {
        const statement = `SELECT * FROM avatar WHERE user_id = ?`
        const [result] = await connection.execute(statement, [userId])
        return result
   }

   async createCourseware(filename, mimetype, size, originalname) {
        console.log(filename, mimetype, size, originalname);
     const statement = `INSERT INTO courseware (filename, mimetype, size, originalname) VALUES (?, ?, ?, ?)`
     const result = await connection.execute(statement, [filename, mimetype, size, originalname])
     return result
   }
}

module.exports = new fileService()