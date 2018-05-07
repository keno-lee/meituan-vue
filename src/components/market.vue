<template>
  <div class="page">
    <div class="sidebar">
      <div class="mui-scroll-wrapper">
        <div class="mui-scroll">
          <div class="item" v-for="(v, i) in categoryList" :key="i" @click="toProList($event)">
              <!-- <router-link :to="{path:'/market/'+v.id,activeClass:'sidebarActive'}" class="item"> -->
              <router-link :to="'/market/'+v.id" class="itemA">
                {{v.name}}
              </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="content">

      <div style="padding: 10px 10px;" class="nav">
				<div id="segmentedControl" class="mui-segmented-control">
					<a class="mui-control-item mui-active" href="#item1">
            全部分类
          </a>
          <a class="mui-control-item" href="#item2">
            综合排序
          </a>
        </div>
			</div>

      <div class="subnav">
        
        <div id="item1" class="mui-control-content items mui-active">
          <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view-cms">
                  <li class="mui-table-view-cell-cms mui-media" v-for="(v, i) in productsById" :key="i">
                    
                      <img class="mui-media-object mui-pull-left" :src="v.img">
                      <div class="mui-media-body">
                          <h4>{{v.name}}</h4>  
                          <p>{{v.specifics}}</p>
                          <p>
                            <span class="price">¥ {{v.partner_price}}</span> <span class="oldPrice">¥ {{v.price}}</span>
                            <numbox class="mui-pull-right" v-model="count" :id="v.id"></numbox>
                          </p>
                      </div>
                      
                  </li>
                </ul>
            </div>
          </div>
        </div>

        <div id="item2" class="mui-control-content items">
          <div class="mui-scroll-wrapper">
            <div class="mui-scroll">
                <ul class="mui-table-view">
                  <li class="mui-table-view-cell">
                    综合排序更新中...
                    <br>
                    给您带来的不便表示歉意...
                  </li>
                </ul>
              </div>
            </div>
				</div>

			</div>
    </div>


  </div>
</template>

<script>
import mui from "@/assets/mui/js/mui.min.js";
import numbox from "@/components/comment/numbox";

export default {
  data() {
    return {
      categoryList: [],
      productList: {},
      productsById: [],
      count:0,
      id:0
    };
  },
  created() {
    // 一进入页面就渲染sidebar和热销榜
    this.$http.jsonp("http://localhost:3008/list").then(res => {
      console.log(res);
      // sidebar
      this.categoryList = res.body.data.categories;
      // 产品
      this.productList = res.body.data.products;
      this.productsById = this.productList[104751];
    });
    // this.count =  this.$store.getters.getCountById(this.id);
  },
  mounted() {
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.01, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
      scrollY: true, //是否竖向滚动
      scrollX: false //是否横向滚动
    });
  },
  methods: {
    toProList(e) {
      // 获取路由参数
      document.querySelectorAll(".itemA").forEach(v => {
        v.style.borderLeft = "3px solid #f8f8f8";
      });
      e.target.style.borderLeft = "3px solid #ffd600";
    }
  },
  watch: {
    $route: {
      handler() {
        console.log(this.$route.params.id);
        this.productsById = this.productList[this.$route.params.id];
        // console.log(this.productsById);
      },
      deep: true
    }
  },
  components: {
    numbox
  }
};
</script>
<style>
.page {
  width: 100%;
  height: 100%;
  background-color: pink;
  position: relative;
  overflow: hidden;
}
.sidebarActive {
  border-left: 3px solid #ffd600;
}
.sidebar {
  width: 20%;
  height: 100%;
  background-color: #f8f8f8;
  position: absolute;
  left: 0;
  top: 0;
  overflow: hidden;
}
.sidebar .item a {
  display: block;
  width: 100%;
  height: 54px;
  border-left: 3px solid #f8f8f8;
  text-align: center;
  line-height: 54px;
  font-size: 16px;
  color: #000;
}
.content {
  margin-left: 20%;
  height: 100%;
  padding-top: 60px;
  background-color: #fff;
}
.nav {
  position: absolute;
  top: 0;
}


.subnav {
  height: 100%;
  background-color: #fff;
}
.items {
  height: 100%;
}

.mui-table-view-cms .mui-media,
.mui-table-view-cms .mui-media-body {
  overflow: hidden;
}
.mui-table-view-cell-cms {
  position: relative;
  overflow: hidden;
  padding: 11px 15px;
}

.mui-table-view-cell-cms,
.mui-table-view-cell-cms a {
  height: 110px;
}
.mui-table-view-cell-cms h4 {
  margin-bottom: 10px;
}
.mui-table-view-cell-cms .price {
  color: red;
}
.mui-table-view-cell-cms .oldPrice {
  text-decoration: line-through;
}
.mui-table-view-cms .mui-media-object {
  margin-top: 10px;
  line-height: 42px;
  max-width: 55px;
  height: 55px;
}
</style>
