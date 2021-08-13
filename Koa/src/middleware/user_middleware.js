const errorTypes = require('../constants/error_type')
const md5Password = require('../until/password-handle')
const userService = require('../service/user_service')

const verifyUser = async (ctx, next) => {
    // 1.获取用户注册信息
    const { name, password } = ctx.request.body
    // 2.判断是否为空
    if (!name || !password) {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUEST)
        return ctx.app.emit('error', err, ctx)
    }

    // 3.判断用户名是否重复
    const res = await userService.getUserByName(name)

    if (res.length) {
        const err = new Error(errorTypes.USER_ALREADY_EXISTS)
        return ctx.app.emit('error', err, ctx)
    }

    ctx.user = { name, password }
    
    await next()
}

const passwordHandle = async (ctx, next) => {
    const { password } = ctx.user
    ctx.user.password = md5Password(password)
    await next()
}

module.exports = {
    verifyUser,
    passwordHandle
}