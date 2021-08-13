const messageService = require('../service/message_service')


class messageController {
    async createMsg(ctx, next) {
        const user = ctx.user
        const {content} = ctx.request.body
        const result = await messageService.createMsg(content, user.id)
        ctx.body = result
    }

    async getMsgList(ctx, next) {
        const result = await messageService.getMsgList()
        ctx.body = result
    }
}

module.exports = new messageController()