import Vue from 'vue'
// import router from './router'
import Index from './index.vue'
import VueResource from 'vue-resource'
import '../../../static/index.less'

Vue.config.productionTip = false

Vue.use(VueResource)

// router.push('select')

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // router,
  template: '<Index/>',
  components: {Index}
})
