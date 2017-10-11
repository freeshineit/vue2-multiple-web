import Vue from 'vue'
import Index from './index.vue'
import '../../assets/less/reset.less'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
	el: '#app',
	template: '<Index />',
	components: {Index}
})