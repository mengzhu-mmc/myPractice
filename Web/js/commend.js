/*
 * @Author: your name
 * @Date: 2021-05-15 16:03:42
 * @LastEditTime: 2021-06-11 20:02:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \小学期页面\js\commend.js
 */
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


let locationHref = 'http://192.168.43.71'

const headerAvatar = document.querySelector('header .user>img')
// axios 基础设置
axios.defaults.baseURL = locationHref+':3000/'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.timeout = 5000

// 请求拦截器
axios.interceptors.request.use(function (config) {
    if (localStorage.getItem('token')) {
        let token = localStorage.getItem('token')
        config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
}, function (error) {
    return Promise.reject(error)
})


// 退出登录
let logout = document.querySelector('header .person .logout')
addEvent(logout, 'click', () => {
    try {
        localStorage.removeItem('token'); 
        setTimeout(
            function () { 
                window.location.href = locationHref+':3001/'
            }, 
        1000)
    } catch(err) {
        console.log(err);
        alert('退出失败，请重试~')
    }
})