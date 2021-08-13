const Multer = require('koa-multer')

const avatarUpload = Multer({
    dest: './uploads/avatar'
})

const coursewareUpload = Multer({
    dest: './uploads/courseware'
})

// const storage = Multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, './uploads/courseware')
//     },
//     filename: function (req, file, cb) {
//         let type = file.originalname.split('.')[1]
//         cb(null, `${file.originalname}`)
//     }
// })




const avatarHandler = avatarUpload.single('avatar')
const coursewareHandler = coursewareUpload.single('courseware')
 
module.exports = {
    avatarHandler,
    coursewareHandler
}