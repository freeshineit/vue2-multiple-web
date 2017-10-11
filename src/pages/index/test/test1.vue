<template>
	  	<div class="start" ref='start' v-if='show'>
	  		<p v-bind:title="message">{{ message }}</p>
	  	</div>
</template>

<script>
	import Nav from '@/components/common/nav/index'

export default {
	name: 'index',
	data() {
		return {
			show: true,
			message: 'helloe vue!',
		}
	}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	.start{
        transition: all .3s ease;
        opacity: 1;
    }
</style>
