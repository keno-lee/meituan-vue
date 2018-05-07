import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 引入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)


// 引入rem布局的适配方案
// import "@/assets/flexible/adaptor.less"
// 引入flexible
// import '../node_modules/lib-flexible/flexible'
// 引入base.css
import "@/assets/flexible/base.css"
// 引入mintUI全部组件
import Mint from 'mint-ui';
// 引入mint-ui的css样式
import "../node_modules/mint-ui/lib/style.min.css"
Vue.use(Mint);
// 引入mui的css样式和js
import "@/assets/mui/css/mui.min.css"
import "@/assets/mui/js/mui.min.js"

// 引入font-awesome
import "../node_modules/font-awesome/css/font-awesome.min.css"
// 引入vueX
import store from '@/store/index'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store
})
