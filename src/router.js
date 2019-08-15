import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
    //设置默认路由为home
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})