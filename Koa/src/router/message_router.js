const Router = require('koa-router')

const postRouter = new Router({prefix: '/message'})

const {
    verifyAuth
} = require('../middleware/auth_middleware')

const {
    createMsg, getMsgList
} = require('../controller/message_controller')

postRouter.post('/',verifyAuth,  createMsg)
postRouter.get('/',  getMsgList)

module.exports = postRouter