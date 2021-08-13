const connection = require('../app/database')

class adminService {
    async getRootByName (name) {
        const statement = `SELECT * FROM admin WHERE name = ?`
        const [result] = await connection.execute(statement, [name])
        return result
    }

    async getMoment() {
        const statement = `
        SELECT m.id id, m.content content, m.createAt createTime, u.name userName 
        FROM moment m
        LEFT JOIN user u ON m.user_id = u.id`
        const [result] = await connection.execute(statement, [])
        return result
    }

    async delMoment(momentId) {
        const statement = `
        DELETE FROM moment WHERE id = ?
        `
        const [result] = await connection.execute(statement, [momentId])
        return result
    }

    async updateStdInfo(stdName, stdPwd) {
        const statement = `
        UPDATE user SET  password= ? WHERE name = ?
        `
        const [result] = await connection.execute(statement, [ stdPwd, stdName])
        return result
    }

    async getCwList() {
        const statement = `SELECT * FROM courseware`
        const [result] = await connection.execute(statement, [])
        return result
    }

    async getCwById(cwId) {
        const statement =  `
        SELECT * FROM courseware WHERE id = ?
        `
        const [result] = await connection.execute(statement, [cwId])
        return result[0]
    }

    async delCwById(cwId) {
        const statement = `
        DELETE FROM courseware WHERE id = ?
        `
        const [result] = await connection.execute(statement, [cwId])
        return result
    }
}

module.exports = new adminService()