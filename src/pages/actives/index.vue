<template>
	<div class="container">
		<v-nav :index='3'></v-nav>
		<div>
			<p>这是活动展示</p>
		</div>
	</div>
</template>

<script>
	import Nav from '@/components/common/nav/index'

export default {
	name: 'actives',
	components: {
		'v-nav': Nav
	}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
</style>