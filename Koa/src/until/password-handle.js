const crypto = require('crypto')
// const { nextTick } = require('process')

const md5Password = password => {
    const md5 = crypto.createHash('md5')
      // 此处password可能是数字，要转成字符串
    return md5.update(password.toString()).digest('hex');
}

module.exports = md5Password
