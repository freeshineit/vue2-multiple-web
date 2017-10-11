import Vue from 'vue'
import Router from 'vue-router'
import Select from '../test/select'
import Test from '../test/test1'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/select',
        name: 'Select',
        component: Select
    }, {
        path: '/test',
        name: 'Select',
        component: Test
    }],
    linkActiveClass: 'active'
})