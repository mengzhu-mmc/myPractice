const app = require('./app/index')
const config = require('./app/config')
app.listen(config.APP_PORT, () => {
    console.log(`Service is running at port ${APP_PORT}`);
})