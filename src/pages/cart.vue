<template>
  <div>
    <div class="addrinfo">
      <table>
        <tr>
          <td>收货人</td>
          <td>李浩</td>
          <td rowspan="3">修改 > </td>
        </tr>
        <tr>
          <td>电话</td>
          <td>2121212121</td>
        </tr>
        <tr>
          <td>收货地址</td>
          <td><strong>上海市浦东新区xxxxxx</strong></td>
        </tr>
      </table>
    </div>

    <div class="main">
      <div class="maininfo">
        <p class="clearfix"><span class="flash">闪送超市</span><span class="addon">凑单专区</span></p>
        <p>0元起送，22点后满￥69运费5元起，不满￥69运10元起</p>
      </div>

      <div class="gettime clearfix">
        <div class="time">收货时间 &nbsp;&nbsp;<span>08:00-09:00</span></div>
        <div class="reserve">可预订 <i class="fa fa-chevron-right"></i> </div>
      </div>

      <div class="remark clearfix">
        <div class="fl tips">收货备注:</div> 
        <div class="fl mess"><input type="text" placeholder="请输入备注信息"></div>
      </div>

      <div class="item-list">
        <table>
          <tr v-for="(v,i) in carts" :key="i">
            <td class="checkbox">
              <input type="checkbox" v-model="v.isChecked">
            </td>
            <td class="cart-img">
              <img :src="v.img" alt="">
            </td>
            <td class="cart-info">
              <div class="cart-title">
                {{v.name}}
              </div>
              <div class="control">
                <div class="price fl">¥{{v.partner_price}}</div>
                <numbox class="fr" v-model="v.count" :id="v.id"></numbox>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div class="total clearfix">
        <div class="allc">
        <input type="checkbox" :checked="allChecked">
        </div>
        <span>全选</span>
        <span>共: <i> ¥ {{totalPrice}}</i></span>
        <button class="btn-c">选好了</button>
      </div>

    </div>
  </div>
</template>

<script>
import numbox from "@/components/numbox"
export default {
  data () {
    return {
      carts:[]
    }
  },
  created(){
    var obj =  JSON.parse(localStorage.getItem("info"));
    // 产品
    for(var k in obj){
      if (k != 104751) {
        obj[k].forEach(v => {
          this.$store.getters.getMtInfo.forEach(e => {
              if(e.id == v.id) {
                v.count = e.count;
                v.isChecked = e.isChecked;
                this.carts.push(v);
              }
          });
        });
      }
    }
    console.log(this.carts);
    
  },
  components: {
    numbox
  },
  computed: {
    totalPrice(){
      var total = 0;
      this.carts.forEach(v => {
        if (v.isChecked){
          total += Number(v.partner_price) * Number(v.count);
        }
      });
      return total;
    },
    // allChecked(){
    //   var temp = this.carts.map(v => {
    //     return v.isChecked == true
    //   }); 
    //   if (temp.length == this.carts.length){
    //     return true
    //   }else {
    //     return false
    //   }
    // }
    allChecked(){
      var count = 0;
      this.carts.forEach(v => {
        if (v.isChecked){
          count++;
        }
      });
      if(count == this.carts.length){
        return true
      }else{
        return false
      }
    }
  }
}
</script>
<style scoped>
.addrinfo {
  width: 100%;
  padding: 5px 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
}

.addrinfo table td{
  text-align: left;
  vertical-align: baseline;
  padding: 5px;
}

td:nth-child(1){
  width: 20%;
}
td:nth-child(2){
  width: 60%;
}
td:nth-child(3){
  width: 20%;
}
.main {
  padding: 10px;
  background-color: #fff;
  padding-bottom: 0;
}
.maininfo {
  width: 100%;
  border-bottom: 1px solid #ccc;
}
.flash {
  border-left: 5px solid #ffd600;
  padding-left: 5px;
  height: 24px;
}
.addon {
  float: right;
  color: red;
  padding: 0 8px;
  border: 1px solid red;
  height: 24px;  
  border-radius: 12px; 
}
.gettime {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  
}
.gettime .time{
  float: left;
  height: 24px;
  line-height: 24px;
}
.gettime .time span {
  color: red;
}
.gettime .reserve {
  float: right;
  height: 24px;
  line-height: 24px; 
}
.gettime .reserve i {
  color: #666;
  font-weight: 400;
}
.remark {
  padding: 10px 0;
}
.remark  {
  width: 100%;
  border-bottom: 1px solid #ccc;
  
}
.tips {
  height: 30px;
  line-height: 30px;
  width: 20%;
  font-size: 16px;
}
.mess {
  height: 30px;
  width: 80%;
  padding-right: 20px;
}
.mess input {
  height: 30px;
  font-size: 14px;
}

.item-list {
  padding: 10px 0;
  width: 100%;
}
.item-list table {
  width: 100%;
}
.item-list table tr{
  /* height: 100px; */
  width: 100%;
  height: 80px;
}
td.checkbox {
  width: 15%;
}
td.checkbox input {
  display: block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin: 0 auto;
}
td.cart-img {
  width: 15%;
}
td.cart-info {
  width: 70%;
}
.price {
  margin-top: 10px;
}
.total {
  /* padding: 10px 0; */
  padding-left: 28px;
  height: 54px;
  line-height: 54px;
  position: relative;
  border-top: 1px solid #ccc;
}
.total .allc {
  /* float: left; */
  display: inline-block;
  width: 20px;
  height: 20px;
}
.total .allc input{
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  /* margin: 0 auto; */
}
.btn-c {
  background-color: #ffd600;
  height: 54px;
  padding: 20px;
  font-size: 14px; 
  right: 0;
  top: 0;
  position: absolute;
}
</style>
