const jwt = require('jsonwebtoken')
const fs = require('fs')

const adminService = require('../service/admin_service')
const md5Password = require('../until/password-handle')

const { PRIVATE_KEY } = require("../app/config")

class adminController {
    async login(ctx, next) {
        const { id, name} = ctx.root
        const token = jwt.sign({id, name}, PRIVATE_KEY, {
            expiresIn: 360000,
            algorithm: "RS256"
        })

        ctx.body = {id, name, token}
    }

    // async getInfo(ctx, next) {
    //     ctx.body = ctx.root
    // }

    async getMoment(ctx, next) {
        const momentList = await adminService.getMoment()
        ctx.body = momentList
    }

    async delMoment(ctx, next) {
        const {momentId} = ctx.params
        const result = await adminService.delMoment(momentId)
        ctx.body = result
    }

    async updateStdInfo(ctx, next) {
        let { name, password } = ctx.request.body
        password = md5Password(password)
        const result = await adminService.updateStdInfo(name, password)
        ctx.body = result
    }

    async getCwList(ctx, next) {
        const result = await adminService.getCwList()
        ctx.body = result
    }
    async getCwInfo(ctx, next) {
        const { cwId } = ctx.query
        const cwInfo = await adminService.getCwById(cwId)
        // 2.返回头像
        ctx.response.set('content-type', cwInfo.mimetype)
        ctx.body = fs.createReadStream(`./uploads/courseware/${cwInfo.filename}`)
    }   
    async delCw(ctx, next) {
        const { cwId } = ctx.params
        const result = await adminService.delCwById(cwId)
        ctx.body = result
    }
}

module.exports = new adminController()