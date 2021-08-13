let main = document.getElementsByTagName('main')[0]
let login = document.getElementsByClassName('login')[0]
let register = document.getElementsByClassName('register')[0]
let toLogin = document.getElementsByClassName('toLogin')[0]
let toRegister = document.getElementsByClassName('toRegister')[0]

const loginBtn = document.getElementsByClassName('loginBtn')[0]
let loginUser = document.getElementsByClassName('loginUser')[0]
let loginPwd = document.getElementsByClassName('loginPwd')[0]
const registerBtn = document.getElementsByClassName('registerBtn')[0]
let regUser = document.getElementsByClassName('regUser')[0]
let regPwd = document.getElementsByClassName('regPwd')[0]
let pwdCheck = document.getElementsByClassName('pwdCheck')[0]

const rootLogin = document.getElementsByClassName('rootLogin')[0]
const rootUser = document.getElementsByClassName('rootUser')[0]
const rootPwd = document.getElementsByClassName('rootPwd')[0]

let toRoot = document.getElementsByClassName('toRoot')[0]
let toUser = document.getElementsByClassName('toUser')[0]
let rootWrap = document.getElementsByClassName('rootWrap')[0]

let locationHref = 'http://192.168.43.71'


// 绑定事件兼容
function addEvent(ele, type, callback) {
    if (ele.addEventListener) {
        addEvent = function (ele, type, callback) {
            ele.addEventListener(type, callback, false)
        }
    } else if (ele.attachEvent) {
        addEvent = function (ele, type, callback) {
            ele.attachEvent('on' + type, callback)
        }
    } else {
        addEvent = function (ele, type, callback) {
            ele['on' + type] = callback
        }
    }
    addEvent(ele, type, callback)
}

// 点击反转
addEvent(toLogin, 'click', function () {
    main.style.transform = 'translate(-50%, -50%) rotateY(0deg)'
})
addEvent(toRegister, 'click', function () {
    main.style.transform = 'translate(-50%, -50%) rotateY(180deg)'
})


// 普通用户登录和管理登录界面切换
toRoot.addEventListener('click',() => {
    rootWrap.style.right = '50%'
})
toUser.addEventListener('click', () => {
    rootWrap.style.right = 0
})

// 登录和注册

// 如果已登录，重定向到网站首页

// 获取用户信息
axios.get('user/userInfo')
    .then((res) => {
        res = res.data
        if (!res) {
            localStorage.removeItem('token'); 
        }
        window.location.href = locationHref + ':3001/htmls'
    })
    .catch((err) => {
        if (err.response == undefined || err.response.status !== 200) {
            localStorage.removeItem('token');
        }
    })
// window.onload = function () {
//     if (localStorage.getItem('token')) {
//         setTimeout(() => {
//             window.location.href = 'http://localhost:3001/htmls'
//         }, 1000)
//         console.log(localStorage.getItem('token'));
//     }
// }

//  window.location.replace 不会被写入浏览记录

// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';   

// 创建axios实例
const instance = axios.create({
    baseURL: locationHref+':3000/',
    timeout: 1000
})


// 普通用户登录
addEvent(loginBtn, 'click', function () {
    if (loginUser.value == '' || loginPwd.value == '') {
        alert('请将信息输入完整')
        return false
    }
    instance.post('login', {
        name: loginUser.value,
        password: loginPwd.value
    }).then((res) => {
        if (res.data && res.status == 200) {
            localStorage.setItem('token', res.data.token);
            window.location.href = locationHref+':3001/htmls'
        } else {
            console.log(res.response);
        }
    }).catch((err) => {
        console.log(err.response);
    })
})

// 注册
addEvent(registerBtn, 'click', function () {
    if (regUser.value == '' || regPwd.value == '' || pwdCheck.value == '') {
        alert('请将信息输入完整')
        return false
    }
    
    if (pwdCheck.value !== regPwd.value) {
        alert('请确认两次输入的密码一致')
        return false
    }

    instance.post('/user', {
        name: regUser.value,
        password: regPwd.value
    }).then((res) => {
        console.log(res.status);
        if(res.status == 200) {
            main.style.transform = 'translate(-50%, -50%) rotateY(0deg)'
            loginUser.value = regUser.value
            loginPwd.value = ''
        }
    })
    .catch((err) => {
        alert(`${err.response.data}，请重新输入`)
        regUser.value = '';
        regPwd.value = '';
        pwdCheck.value = '';
    })
})

// 管理员登录
addEvent(rootLogin, 'click', function () {
    console.log(rootUser.value, rootPwd.value);

    if (rootUser.value == '' || rootPwd.value == '') {
        alert('请将信息输入完整')
        return false
    }
    instance.post('/admin', {
        name: rootUser.value,
        password: rootPwd.value
    }).then((res) => {
        if (res.data && res.status == 200) {
            localStorage.setItem('rootToken', res.data.token);
            window.location.href = locationHref+':3001/htmls/root-index.html'
        } else {
            console.log(res.response);
        }
    }).catch((err) => {
        console.log(err.response);
    })
})