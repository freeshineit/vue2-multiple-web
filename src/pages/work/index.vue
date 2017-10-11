<template>
	<div id='app'>
		<v-nav :index="1"></v-nav>
		<p>这是作品展示</p>
	</div>
</template>
<style lang='less' rel='stylesheet/less'>
	@import '../../assets/less/reset';
</style>
<script>
	import Nav from '@/components/common/nav/index'
export default {
	name: 'work',
	components: {'v-nav': Nav}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>

</style>