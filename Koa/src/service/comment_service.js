const connection = require('../app/database')

class commentService {
    async create(content, userId, momentId) {
        const statement = `INSERT INTO comment (content, user_id, moment_id) VALUES (?, ?, ?);`
        const [result] = await connection.execute(statement, [content, userId, momentId])
        return result
    }

    async reply(content, userId, momentId, commentId) {
        const statement = `INSERT INTO comment (content, user_id, moment_id, comment_id) VALUES (?, ?, ?, ?);`
        const [result] = await connection.execute(statement, [content, userId, momentId, commentId])
        return result
    }

    async update(commentId, content) {
        const statement = `UPDATE comment SET content = ? WHERE id = ?`
        const [result] = await connection.execute(statement, [content, commentId])
        return result
    }

    async remove(commentId) {
        const statement = `DELETE FROM comment WHERE id = ?`
        const [result] = await connection.execute(statement, [commentId])
        return result
    }
    
    async getCommentsByMomentId(momentId) {
        const statement =  `SELECT * FROM comment WHERE moment_Id = ?`
        const [result] = await connection.execute(statement, [momentId])
        return result
    }
}

module.exports = new commentService()