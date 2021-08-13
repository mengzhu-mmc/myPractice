const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const cors = require('koa2-cors')

const errorHandle = require('./error_handle')
const importRouters = require('../router/index')

const app = new Koa()

// 设置跨域
app.use(cors())

// 解析post请求
app.use(bodyParser())

// 导入路由
importRouters(app)

app.on('error', errorHandle)

module.exports = app