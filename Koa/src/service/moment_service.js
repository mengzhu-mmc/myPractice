const connection = require('../app/database')

class momentService {
    // 发表评论
    async create(content, userId) {
        const statement = `INSERT INTO moment (content, user_id) VALUES (?, ?)`
        const [result] = await connection.execute(statement, [content, userId])
        return result
    }

    // 获取评论列表
    async getMomentList(offset, limit) {
        const statement = `
        SELECT
            m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
            JSON_OBJECT('id', u.id, 'name', u.name, 'avatar', u.avatar) author
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        ORDER BY m.id ASC
        LIMIT ?,?`
        const [result] = await connection.execute(statement, [offset, limit])
        return result
    }
    // 获取单条评论 
    async getMomentById(momentId) {
        const statement = `
        SELECT
		m.id id, m.content content, m.createAt createTime, m.updateAt updateTime,
		JSON_OBJECT('id', u.id, 'name', u.name, 'avatar', u.avatar) author,
		JSON_ARRAYAGG(
				JSON_OBJECT('id', c.id, 'momentname', (SELECT name FROM user WHERE id = c.user_id), 'avatar',(SELECT avatar FROM user WHERE id = c.user_id), 'content', c.content, 'comment_id',c.comment_id, 'createTime', c.createAt,'userId', c2.user_id, 'commendname',u2.name )
		) comments
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id
        LEFT JOIN comment c ON c.moment_id = m.id
        LEFT JOIN comment c2 ON c.comment_id = c2.id
        LEFT JOIN user u2 ON c2.user_id = u2.id
        WHERE m.id = ${momentId}
        `
        const [result] = await connection.execute(statement, [])
        return result
    }
    // 修改评论
    async updateMomentById(content, momentId) {
        const statement = `UPDATE moment SET CONTENT = ? WHERE Id = ?`
        const result = await connection.execute(statement, [content, momentId])
        return result
    }

    // 删除评论
    async removeMomentById(momentId) {
        const statement = `DELETE FROM moment WHERE Id = ?`
        const [result] = await connection.execute(statement, [momentId])
        return result
    }
}

module.exports = new momentService()