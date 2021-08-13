const momentService = require('../service/moment_service') 

class momentController {
    async create(ctx, next) {
        const { content } = ctx.request.body
        const user = ctx.user
        const result = await momentService.create(content, user.id)
        ctx.body = result
    }

    async list(ctx, next) {
        const { offset, limit } = ctx.query;
        const result = await momentService.getMomentList(offset, limit)
        ctx.body = result
    }

    async detail(ctx, next) {
        const {momentId} = ctx.params
        const result = await momentService.getMomentById(momentId)
        ctx.body = result[0]
    }

    async update(ctx, next) {
        const {content} = ctx.request.body
        const {momentId} = ctx.params
        const result = await momentService.updateMomentById(content, momentId)

        ctx.body = result
    }

    async remove(ctx, next) {
        const { momentId } = ctx.params
        const result = await momentService.removeMomentById(momentId)
        ctx.body = result
    }
}


module.exports = new momentController()