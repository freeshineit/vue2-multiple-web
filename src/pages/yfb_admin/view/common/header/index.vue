<template>
	<div class="header">
		<header class="header-box">
			<div class="fl">
	        	<b class="header-side-btn"></b>
		        <div class="header-search">
		            <span><i class="header-search-icon"></i></span>
		            <input type="text" placeholder="搜索功能项、广告主、媒体主、订单等" maxlength="300">
		        </div>
		    </div>
		</header>
	</div>
</template>
<script>

	export default {
		name:'header',
		props: {
		},
		data() {
			return {
				header:[]
			}
		},
		mounted: function(){
			// 		this.navList = navList.data;
		},
		methods: {}
	}
</script>
<style scoped lang='less' rel='stylesheet/less'>

	@input_focus_color:#f0f9ff;
	.header{
		z-index: 100;

		.header-box{

		}

		&-side-btn{
			display: inline-block;
			width: 24px;
			height: 24px;
			float: left;
			margin: 13px 10px 13px;
			padding-right: 50px;
			background: url(../../../../../assets/images/header/header_side_btn.png) no-repeat center center;
			border: 1px solid transparent;
			border-right: 1px solid #e6e9eb;
		}
		&-search{
			position: relative;
		    float: left;
		    display: inline-block;
		    width: 23.9em;
		    height: 50px;

		    & > span{
		    	position: absolute;
		    	left: 15px;
    			top: 15px;
		    }

			&-icon{
				display: inline-block;
				width: 18px;
    			height: 18px;
				background: url(../../../../../assets/images/header/header_search_icon.png) no-repeat center center;
			}

			& > input[type="text"]{
				border-width: 0;

				&:focus{
				    background-color:@input_focus_color;
				}
			}
		}
	}
</style>
