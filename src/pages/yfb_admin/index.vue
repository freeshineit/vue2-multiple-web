<template>
	<div id="app" class="index">
		<div class="">
			<v-nav :index='0'></v-nav>
			<v-header></v-header>
		</div>
		<div class="content">
			<v-echarts className="chart1" id="chart1" width='100%' height='400px'></v-echarts>
		</div>
		<footer>footer</footer>
	</div>
</template>

<script>
	import Nav from '@/pages/yfb_admin/view/common/nav/index'
	import Header from '@/pages/yfb_admin/view/common/header/index'

	import Echarts from '@/pages/yfb_admin/view/index/echarts/index'

export default {
	name: 'index',
	data() {
		return {
			show: true,
			message: 'helloe vue!',
		}
	},
	mounted: function(){
		let _this = this
        setInterval(() => {
            this.show = !this.show
        }, 10000)
	},
	components: {
		'v-nav': Nav,
		'v-header': Header,
		'v-echarts': Echarts
	}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	.start{
        transition: all .3s ease;
        opacity: 1;
    }
</style>
