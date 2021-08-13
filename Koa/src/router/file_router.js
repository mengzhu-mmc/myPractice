const Router = require('koa-router')
const fileRouter = new Router({prefix: '/upload'})

const {
    verifyAuth
} = require('../middleware/auth_middleware')

const {
    verifyAdmin
} = require('../middleware/admin_middleware')

const {
    avatarHandler,
    coursewareHandler
} = require('../middleware/file_middleware')

const {
    saveAvatarInfo,
    saveCourseware
} = require('../controller/file_controller')

fileRouter.post('/avatar', verifyAuth, avatarHandler, saveAvatarInfo)
fileRouter.post('/courseware', verifyAdmin, coursewareHandler,saveCourseware)

module.exports = fileRouter