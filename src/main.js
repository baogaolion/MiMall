import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import App from './App.vue'
import store from './store'
import VueLazyload from 'vue-lazyload'
// import env from './env'

const mock = false
if (mock) {
    require('./mock/api')
}
// axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5efb50e24d47bc036db9d9ac/api'
axios.defaults.baseURL = '/api'
axios.defaults.timeout = 8000
    //根据环境变量获取不同的请求地址
    // axios.defaults.baseURL = env.baseURL
    // 接口错误拦截
axios.interceptors.response.use(function(response) {
    let res = response.data
    let path = location.hash
    if (res.status == 0) {
        return res.data
    } else if (res.status == 10) {
        if (path != '#/index')
            window.location.href = '/#/login'
    } else {
        alert(res.msg)
    }
});

Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
    loading: '/imgs/loading-svg/loading-bubbles.svg'
})
Vue.config.productionTip = false


new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')