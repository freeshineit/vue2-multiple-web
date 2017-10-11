<template>
	<div id="nav">
		<nav class="nav-box">
			<ul class="nav-list">
				<li v-for="(nav,i) in navList"><a :class="index == i? 'active':''" :href="nav.linkUrl">{{nav.name}}</a></li>
			</ul>
		</nav>	
	</div>
</template>
<script>
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
      		navList:[
      			{'name':'首页','linkUrl':'../index/index.html'},
      			{'name':'作品展示','linkUrl':'../work/index.html'},
      			{'name':'图片直播','linkUrl':'../imgupload/index.html'},
      			{'name':'活动展示','linkUrl':'../actives/index.html'},
      		],
      	}
      },
      metheds: {
      }
	}
</script>

<style scoped lang='less' rel='stylesheet/less'>
	.nav-box{
		transition:width 2s,height 2s,-webkit-transform 2s;
		.nav-list{
			list-style: none;
			padding:0;
			height:50px;
			background-color: rgba(0,0,0,.8);
			& > li{
				display: inline-block;
				padding: 15px 20px;
				a {
					text-decoration: none;
					color:#fff;

					&.active{
						color:#0099e5;
					}
				}
			}
		}

	}
</style>
