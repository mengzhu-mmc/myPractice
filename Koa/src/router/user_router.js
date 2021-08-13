const Router = require('koa-router')

const userRouter = new Router({prefix: '/user'})

const {
    verifyUser,
    passwordHandle
} = require('../middleware/user_middleware')

const {
    verifyAuth,
} = require('../middleware/auth_middleware')

const {
    create,
    avatarInfo,
    userInfo,
    updateInfo,
    delUser
} = require('../controller/user_controller')

userRouter.post('/', verifyUser, passwordHandle, create)
userRouter.get('/:userId/avatar', avatarInfo)
userRouter.get('/userInfo', verifyAuth, userInfo)
userRouter.patch('/', verifyAuth, updateInfo)
userRouter.delete('/', verifyAuth, delUser)

module.exports = userRouter