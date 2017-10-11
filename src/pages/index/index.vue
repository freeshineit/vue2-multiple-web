<template>
	<div id="app" class="index">
		<v-nav :index='0'></v-nav>
	  	<p>这是首页</p>
	  	
	  	<!-- <div class="start" ref='start' v-if='show'>
	  		<p v-bind:title="message">{{ message }}</p>
	  	</div> -->
	  	<section class="container" >
	  		<router-view></router-view>  
	  	</section>
	  	<div class="tab-list">
	  		<div class="tab-item">
		          <router-link tag='a' to="/select" class='follow'>
		            <span class="icon"></span>
		            <span> 关注1</span>
		          </router-link>
	        </div>
	        <div class="tab-item">
		          <router-link tag='a' to="/test" class='follow'>
		            <span class="icon"></span>
		            <span> 关注2</span>
		          </router-link>
	        </div>
	  	</div>
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
	},
	mounted: function(){
		let _this = this
        setInterval(() => {
            this.show = !this.show
        }, 10000)
	},
	components: {'v-nav': Nav}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	.start{
        transition: all .3s ease;
        opacity: 1;
    }
</style>
