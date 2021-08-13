const fs = require('fs')

const userService = require('../service/user_service')
const fileService = require('../service/file_service')
const md5Password = require('../until/password-handle')

class userController {
    async create(ctx, body) {
        const { name, password } = ctx.user
        const result = userService.create(name, password)
        ctx.body = "添加成功" + result
    }

    async avatarInfo(ctx, body) {
        // 1.找到用户头像信息
        const { userId } = ctx.params
        const result = await fileService.getAvatarByUserId(userId)
        const avatarInfo = result[result.length - 1]
        
        // 2.返回头像
        ctx.response.set('content-type', avatarInfo.mimetype)
        ctx.body = fs.createReadStream(`./uploads/avatar/${avatarInfo.filename}`)
    }

    async userInfo(ctx, next) {
        const { id } = ctx.user
        const userInfo = await userService.getUserInfoById(id)
        ctx.body = userInfo
    }

    async updateInfo(ctx, next) {
        const { id } = ctx.user
        let { name, password } = ctx.request.body
        password = md5Password(password)
        const result = await userService.updateInfoById(id, name, password)
        ctx.body = result
    }

    async delUser(ctx, next) {
        const { id } = ctx.user
        const result = await userService.delUserById(id)
        ctx.body = result
    }
}

module.exports = new userController()