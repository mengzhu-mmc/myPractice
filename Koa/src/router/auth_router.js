const Router = require('koa-router')

const authRouter = new Router()

const {
    login
} = require('../controller/auth_controller')

const {
    verifyLogin
} = require('../middleware/auth_middleware')
    

authRouter.post('/login', verifyLogin, login)

module.exports = authRouter