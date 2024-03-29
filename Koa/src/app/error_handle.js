const errorType = require('../constants/error_type')

const errorHandle = (error, ctx) => {
    let status, message
    switch (error.message) {
        case errorType.NAME_OR_PASSWORD_IS_REQUEST:
            status = 400; // Bad Request
            message = '用户名或密码不能为空';
            break;
        case errorType.USER_ALREADY_EXISTS:
            status = 409;// conflict（冲突）
            message = '用户已存在';
            break;
        case errorType.USER_DOES_NOT_EXISTS:
            status = 400; // 参数错误
            message = '用户不存在';
            break;
        case errorType.PASSWORD_IS_INCORRECT:
            status = 400;
            message = '密码输入错误';
            break;
        case errorType.UNAUTHORIZATION:
            status = 401;
            message = '无效token';
            break;
        case errorType.UNPERMISSION:
            status = 401;
            message = '您不具备操作权限'
            break;
        default:
            status = 404;
            message = '404 not found'
    }
    ctx.status = status
    ctx.body = message
}

module.exports = errorHandle