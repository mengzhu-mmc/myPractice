const { verify } = require('jsonwebtoken')
const Router = require('koa-router')

const { 
    login,
    // getInfo,
    getMoment,
    delMoment,
    updateStdInfo,
    getCwList,
    getCwInfo,
    delCw
} = require('../controller/admin_controller')

const { 
    verifyAdminLogin, 
    verifyAdmin 
} = require('../middleware/admin_middleware')


const adminRouter = new Router({prefix: '/admin'})


adminRouter.post('/', verifyAdminLogin, login)
// adminRouter.get('/admin', verifyAdmin, getInfo)
adminRouter.get('/getMoment', verifyAdmin, getMoment)
adminRouter.delete('/moment/:momentId', verifyAdmin, delMoment)
adminRouter.patch('/stdInfo', verifyAdmin, updateStdInfo)
adminRouter.get('/cwList', getCwList)
adminRouter.get('/cwInfo', getCwInfo)
adminRouter.delete('/cw/:cwId', verifyAdmin, delCw)
module.exports = adminRouter