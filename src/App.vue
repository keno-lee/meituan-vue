<template>
  <div id="app">
    <mt-header fixed title="美团"></mt-header>

    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<a class="mui-tab-item mui-active" href="#tabbar">
				<span class="mui-icon fa fa-home"></span>
				<span class="mui-tab-label">首页</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-chat">
				<span class="mui-icon fa fa-flash"></span>
				<span class="mui-tab-label">闪送超市</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-contact">
				<span class="mui-icon fa fa-shopping-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</a>
			<a class="mui-tab-item" href="#tabbar-with-map">
				<span class="mui-icon fa fa-user-o"></span>
				<span class="mui-tab-label">我的</span>
			</a>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
  header {
    background-color: #ffd600;
    color: #000;
    height: 54px;
    font-size: 22px;
  }
  nav.mui-bar {
    height: 55px;
  }
</style>

