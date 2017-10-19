import Vue from 'vue'
import Router from 'vue-router'
import Echarts from '@/pages/yfb_admin/view/index/echarts/index'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Echarts',
            component: Echarts
        }
    ],
    linkActiveClass: 'active'
})