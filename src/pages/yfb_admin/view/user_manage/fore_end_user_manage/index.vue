<template>
	<div id='app'  class="fore_end_user_manage">
		<div class="">
			<v-nav :index='0'></v-nav>
			<v-header></v-header>
		</div>
		<div class="content">
			{{message}}
		</div>
	</div>
</template>

<script>
	import Nav from '@/pages/yfb_admin/view/common/nav/index'
	import Header from '@/pages/yfb_admin/view/common/header/index'

export default {
	name: 'fore_end_user_manage',
	data() {
		return {
			show: true,
			message: 'fore_end_user_manage!',
		}
	},
	mounted: function(){
	
	},
	components: {
		'v-nav': Nav,
		'v-header': Header
	}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	
</style>