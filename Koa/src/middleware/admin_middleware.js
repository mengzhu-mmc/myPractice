const errorTypes = require('../constants/error_type')
const jwt = require('jsonwebtoken')
const { PRIVATE_KEY } = require('../app/config')
const adminService = require('../service/admin_service')

const verifyAdminLogin = async (ctx, next) => {
    // 获取用户信息
    const { name, password } = ctx.request.body

    // 验证登录信息是否为空
    if (!name || !password) {
        const err = new Error(errorTypes.NAME_OR_PASSWORD_IS_REQUEST)
        return ctx.app.emit('error', err, ctx)
    }
    // 验证用户是否存在
    const result = await adminService.getRootByName(name)
    const rootInfo = result[0]

    // 检验用户是否存在
    if (!rootInfo) {
        const err = new Error(errorTypes.USER_DOES_NOT_EXISTS)
        return ctx.app.emit('error', err, ctx)
    }

    // 检验密码是否正确
    if (rootInfo.password !== password) {
        const err = new Error(errorTypes.PASSWORD_IS_INCORRECT)
        return ctx.app.emit('error', err, ctx) 
    }
    ctx.root = rootInfo

    await next()
}  

const verifyAdmin = async (ctx, next) => {
    try {
        const rootToken = ctx.header.administrators.replace('Bearer ', '')
        const rootInfo = jwt.verify(rootToken, PRIVATE_KEY, {
            algorithms: "RS256"
        })
        ctx.root = rootInfo
        await next()
    } catch(error) {
        console.log(err);
        const err = new Error(errorTypes.UNAUTHORIZATION)
        return ctx.app.emit('error', err, ctx)
    }
}

module.exports = {
    verifyAdminLogin,
    verifyAdmin
}