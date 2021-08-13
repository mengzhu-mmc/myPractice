const connection = require('../app/database') 

class userService {
    // 注册
    async create(name, password) {
        const statement = `INSERT INTO user (name, password) VALUES (? ,?)`
        const res = await connection.execute(statement, [name, password])
        return res
    }
    // 根据name获取信息
    async getUserByName(name) {
        const statement = `SELECT * FROM user WHERE NAME = ?`
        const [res] = await connection.execute(statement, [name])
        return res
    }

    // 更新头像链接
    async updateAvatarUrlById(avatarUrl, id) {
        const statement = `UPDATE user SET avatar = ? WHERE id = ?`
        const [res] = await connection.execute(statement, [avatarUrl, id])
        return res
    }

    // 获取用户详细信息
    async getUserInfoById(userId) {
        const statement = `
        SELECT
            u.id id, u.name name, u.avatar avatarUrl, u.createAt createTime,
            JSON_ARRAYAGG(
                JSON_OBJECT('momentId', m.id, 'content', m.content, 'createTime', m.createAt)
            ) moment
        FROM user u
        LEFT JOIN moment m ON u.id = m.user_id
        WHERE u.id = ${userId}`
        const [result] = await connection.execute(statement, [])
        return result
    }

    async updateInfoById(id, name, password) {
        const statement = `
        UPDATE user SET name = ?, password=? WHERE id = ? 
        `
        const [result] = await connection.execute(statement, [name, password, id])
        return result
    }

    async delUserById(id) {
        const statement = `DELETE FROM user WHERE id = ${id}`
        const [result] = await connection.execute(statement, [id])
        return result
    }
}

module.exports = new userService()