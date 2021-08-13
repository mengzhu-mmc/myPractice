const jwt = require('jsonwebtoken')

const { PRIVATE_KEY } = require('../app/config')

class authController {
    async login(ctx, next) {
        const { id, name } = ctx.user
        const token = jwt.sign({id, name}, PRIVATE_KEY, {
            expiresIn: 360000, // 以秒为单位
            algorithm: "RS256" //加密用的算法
        })
        ctx.body = {id, name,token}
    }
}

module.exports = new authController()