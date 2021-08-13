const fileService = require('../service/file_service')
const userService = require('../service/user_service')
const { APP_HOST, APP_PORT } = require('../app/config')

class fileController {
    async saveAvatarInfo(ctx, next) {
        // 1.获取图像相关信息
        const { filename, mimetype, size } = ctx.req.file
        const { id } = ctx.user
        // 2.保存图像信息
        const result = await fileService.createAvatar(filename, mimetype, size, id)
        
        // 3.将图片地址存入用户表中
        const avatarUrl = `${APP_HOST}:${APP_PORT}/user/${id}/avatar`
        await userService.updateAvatarUrlById(avatarUrl, id)
        ctx.body = '上传头像成功'
    }

    async saveCourseware(ctx, next) {
        // 1.获取课件相关信息
        const { filename, mimetype,size, originalname} = ctx.req.file
        // 2.保存课件信息
        const result = await fileService.createCourseware( filename, mimetype,size, originalname)
        // const avatarUrl = `${APP_HOST}:${APP_PORT}/user/${id}/avatar`
        // await userService.updateAvatarUrlById(avatarUrl, id)
        ctx.body = '上传课件成功'
    }
}

module.exports = new fileController()