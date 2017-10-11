<template>
	<div id="app" class="index">
	  	<p @click="loadvideo">点击我 加载数据</p>
	</div>
</template>

<script>
export default {
	name: 'index',
	data() {
		return {
			show: true,
			message: 'helloe vue!',
			apiUrl: ''
		}
	},
	mounted: function(){
	},
	created() {
            let d = new Date()
            let day = d.getDate()
            let month = d.getMonth() + 1

            month = (month > 9) ? month : '0' + month

            let year = d.getFullYear()
            this.nextDate = year + '' + month + day

            this.apiUrl = 'http://baobab.kaiyanapp.com/api/v1/feed?date=' + this.nextDate + '&num=1'
        },
	methods:{
		loadvideo: function() {
                let newPageUrl = ''
				
                newPageUrl = this.apiUrl
                this.loadState = false
                this.show = true
                this.$http.get(this.apiUrl).then(res => {
                    res = res.body
                    this.apiUrl = res.nextPageUrl
                    this.loadState = true
                    this.show = false
                })
        },
	}
}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	.start{
        transition: all .3s ease;
        opacity: 1;
    }
</style>