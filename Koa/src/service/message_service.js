const connection = require('../app/database')

class messageService {
    async createMsg(content, userId) {
        const statement = `
        INSERT INTO post (content, user_id) VALUES (?, ?) `
        const [result] = await connection.execute(statement, [content, userId])
        return result
    }

    async getMsgList() {
        const statement = `
        SELECT p.id id,p.content content,p.createAt createTime, u.name FROM post p
        LEFT JOIN user u ON p.user_id = u.id
        `
        const [result] = await connection.execute(statement, [])
        return result
    }
}

module.exports = new messageService()