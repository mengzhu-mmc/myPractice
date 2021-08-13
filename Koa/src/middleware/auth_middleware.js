const md5Password = require('../until/password-handle')
const userService = require('../service/user_service')
const authService = require('../service/auth_service')
const errorTypes = require('../constants/error_type')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')

// 验证登录信息
const verifyLogin = async (ctx, next) => {
    // 1.获取用户登录信息
    const { name, password } = ctx.request.body
    // 2.检测是否为空
    if (!name || !password) {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUEST)
        return ctx.app.emit('error', err, ctx)
    }
    // 3.获取用户信息
    const res = await userService.getUserByName(name)
    const user = res[0]
    // 4. 是否为空
    if (!user) {
        const err = new Error(errorTypes.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', err, ctx)
    }

    // 5.验证密码是否正确
    if (md5Password(password) !== user.password ) {
        const err = new Error(errorTypes.PASSWORD_IS_INCORRECT)
        return ctx.app.emit('error', err, ctx) 
    }

    ctx.user = user

    await next()
}

// 验证是否登录
const verifyAuth = async (ctx, next) => {
    try {
        const token = ctx.header.authorization.replace('Bearer ', '')
        const result = jwt.verify(token, PRIVATE_KEY, {
            algorithms: ["RS256"]
        })
        ctx.user = result
        await next()
    } catch (error) {
        const err = new Error(errorTypes.UNAUTHORIZATION)
        return ctx.app.emit('error', err, ctx)
    }
}

// 验证是否有权限
const verifyPermission = async (ctx, next) => {
    const [resourceKey] = Object.keys(ctx.params)
    const tableName = resourceKey.replace('Id', '')
    const resourceId = ctx.params[resourceKey]
    const { id } = ctx.user
    try {
        const isPremission = await authService.checkSource(tableName, resourceId, id)
        if (!isPremission) throw new Error();
        await next()
    } catch(error) {
        const err = new Error(errorTypes.UNPERMISSION)
        return ctx.app.emit('error', err, ctx)
    }
}

module.exports = {
    verifyLogin,
    verifyAuth,
    verifyPermission
}