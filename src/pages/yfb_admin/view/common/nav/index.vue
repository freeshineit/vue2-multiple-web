<template>
	<div id="nav">
		<nav class="nav-box">
			<div class="nav-head">
				<div class="nav-logo">
					<img src="../../../../../assets/images/nav/admin_logo.png" alt="">
				</div>
				<div class="nav-title">
					<a style="display: inline-block;" href='#'>- 优粉吧运营后台  -</a>
				</div>
			</div>
			<ul class="nav-list">
				<li v-for="(nav,i) in navList" :key="nav.id" :class="'icon ' + nav.class_name "
				:style="{background: 'url(\''+ icons[i].url+'\') no-repeat 29px 14px'}"
				@click="handlerClick(nav.id,i,$event)">
					<a :class="index == i? 'active':''" :href="nav.url">{{nav.menu_name}}</a>
					<b v-show="nav.submenu.length > 0" class="mainNav-cl" style="display: block;"></b>
					<ul v-show="nav.submenu.length > 0" class="level2-list" ref='level2' >
						<li v-for="(level2,i) in nav.submenu" :key='level2.id'>
							<a :href="level2.url">{{level2.menu_name}}</a>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
	import navList from './index.json' //导航栏数据
	export default {
	  name: 'nav',
	  props: {
	  	index: {
                type: Number,
                default() {
                    return 0
                }
            }
      },
      data() {
      	return {
      		navList:[],
			icons:[{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_0.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_1.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_2.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_3.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_4.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_5.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_6.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_7.png')
			},{
				name:'icon_index',
				url:require('@/assets/images/nav/nav_icon_8.png')
			}]
      	}
      },
      mounted: function(){
      		this.navList = navList.data;
      },
      methods: {
		  handlerClick: function(id,i,el){
			  let index = i;
			  let dis = this.$refs.level2[index].style.display;
			  if(dis == 'none' || dis == ''){
				  this.$refs.level2[index].style.display = 'block';
			  }else{
				  this.$refs.level2[index].style.display = 'none';
			  }
		  },
      }
	}
</script>
<style scoped lang='less' rel='stylesheet/less'>
	.nav-box{
		position: fixed;
	    top: 0;
	    width: 260px;
	    height: 100%;
	    overflow-y: scroll;
	    overflow-x: hidden;
		background-color: #21252a;
	    z-index: 101!important;

		.nav-head{
			height:140px;
			width: 260px;
			position: relative;
			text-align: center;
    		// background: url() center center no-repeat;
		    background-color: #12181f;
		    border-bottom: 1px solid #353C44;

    		& .nav-logo{
				position: absolute;
				top:50%;
				left:50%;
				margin-top: -26px;
				margin-left: -26px;
				cursor: pointer;

    		}

    		& .nav-title{
    			position: absolute;
    			bottom:8px;
				left:50%;
				margin-left: -80px;
    			display: inline-block;
			    width: 160px;
			    font-family: "微软雅黑";
			    position: absolute;
			    text-align: center;
    			transition: all 0.2s cubic-bezier(0.22, 0.61, 0.36, 1);
			    & a{
			    	font-size: 18px;
			    	color: #5c7a99;
			    }
    		}

		}

		.nav-list{
			list-style: none;
			padding:0;
			padding-top: 20px;
			height:50px;

			& > li{
				margin-bottom: 10px;
				cursor: pointer;
				position: relative;

				&:hover{
					background-color: #fff;
				}

				.mainNav-cl{
					background: url(../../../../../assets/images/nav/icon_arrow_jump.png) center center no-repeat;
				}

				a {
					display: inline-block;
					text-decoration: none;
					color:#fff;
				    text-indent: -3px;
				    background: none;
				    overflow: hidden;
				    visibility: visible;
				    height: 45px;
				    line-height: 45px;
				    text-align: left;
				    padding-left: 58px;
				    font-size: 14px;
					&.active{
						color:#0099e5;
					}
				}
			}
			.level2-list{
				display: none;

				a{
					padding-left: 72px;
				}
			}
		}

	}
</style>
