<template>
  <div id="app">
    <mt-header fixed title="美团"></mt-header>

		<router-view/>
    <!-- 底部 -->
    <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item-cms" to="/home">
				<span class="mui-icon fa fa-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/market">
				<span class="mui-icon fa fa-flash"></span>
				<span class="mui-tab-label">闪送超市</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/cart">
				<span class="mui-icon fa fa-shopping-cart"><span class="mui-badge">{{$store.getters.totalCount}}</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/user">
				<span class="mui-icon fa fa-user-o"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
}
#app {
  width: 100%;
  height: 100%;
  padding: 54px 0 55px 0;
}

.mui-bar-tab .mui-tab-item-cms.mui-active {
  color: #007aff;
}

.mui-bar-tab .mui-tab-item-cms {
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon {
  top: 3px;
  width: 24px;
  height: 24px;
  padding-top: 0;
  padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon ~ .mui-tab-label {
  font-size: 11px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
}
.mint-header {
  background-color: #ffd600;
  color: #000;
  height: 54px;
  font-size: 22px;
}
nav.mui-bar {
  height: 55px;
}
</style>

