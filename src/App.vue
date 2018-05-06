<template>
  <div id="app">
    <mt-header fixed title="美团"></mt-header>

		<router-view/>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon fa fa-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/market">
				<span class="mui-icon fa fa-flash"></span>
				<span class="mui-tab-label">闪送超市</span>
			</router-link>
			<router-link class="mui-tab-item" to="/cart">
				<span class="mui-icon fa fa-shopping-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/user">
				<span class="mui-icon fa fa-user-o"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
	#app {
		padding: 54px 0 55px;
	}

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

