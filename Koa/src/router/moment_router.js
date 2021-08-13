const { verify } = require('jsonwebtoken')
const Router = require('koa-router')

const momentRouter = new Router({prefix: '/moment'})

const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth_middleware')

const {
    create,
    list,
    detail,
    update,
    remove
} = require('../controller/moment_controller')

momentRouter.post('/', verifyAuth, create)

momentRouter.get('/', list)
momentRouter.get('/:momentId', detail)

// 修改评论
momentRouter.patch('/:momentId', verifyAuth, verifyPermission, update)
// 删除评论
momentRouter.delete('/:momentId', verifyAuth, verifyPermission, remove)
module.exports = momentRouter