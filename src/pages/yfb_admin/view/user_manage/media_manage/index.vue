<template>
	<div id="app" class="media_manage">
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
	name: 'index',
	data() {
		return {
			show: true,
			message: 'media_manage',
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
	.start{
        transition: all .3s ease;
        opacity: 1;
    }
</style>