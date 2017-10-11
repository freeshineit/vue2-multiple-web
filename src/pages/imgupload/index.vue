<template>
	<div id="" class="index">
		<v-nav :index='2'></v-nav>
	  	<p>这是图片直播</p>
	</div>
</template>
<script>
	import Nav from '@/components/common/nav/index'

export default {
	name: 'imgupload',
	components: {'v-nav': Nav}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
</style>

