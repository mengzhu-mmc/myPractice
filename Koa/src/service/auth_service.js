const connection = require('../app/database')

class authService {
    async checkSource(tableName, resourceId, userId) {
        const statement = `SELECT * FROM ${tableName} WHERE id = ? and user_id = ?`
        const [result] = await connection.execute(statement, [resourceId, userId])
        return result.length == 0? false : true 
    }

}

module.exports = new authService()