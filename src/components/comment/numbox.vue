<template>
    <div class="wrap mui-clearfix">
        <!-- ++++ -->
        <div class="numbtn" @click="plus"><i class="fa fa-plus"></i></div>
        <input type="number" class="input" v-model="num" v-show="isShow"/>
        <!-- - -->
        <div class="numbtn" @click="minus" v-show="isShow"><i class="fa fa-minus"></i></div>
    </div>
</template>

<script>
export default {
  props: ["value", "id"],
  data() {
    return {  
      num: this.value,
      isShow: false
    };
  },
  methods: {
    plus() {
      this.num++;
    },
    minus() {
      this.num--;
    }
  },
  watch: {
    num(nv, ov) {
      if (nv > 0) {
        this.isShow = true;
      } else {
        this.isShow = false;
      }
      this.$emit("input", nv);
      // 并且跟新到本地存储中
      this.$store.commit("saveOneInfo", { "id": this.id, "count": nv ,isChecked:true});

    }
  },
  created(){
    this.num = this.value;
    if(this.num > 0) {
      this.isShow = true;
    }
  }
};
</script>

<style scoped>
.wrap {
  width: 100px;
}
.numbtn {
  width: 26px;
  height: 26px;
  line-height: 26px;
  border-radius: 50%;
  border: 1px solid #ffbe89;
  text-align: center;
  color: #ff4300;
  float: right;
}
.input {
  float: right;
  /* display: block;     */
  width: 26px;
  height: 26px;
  border: none;
  padding: 0;
  margin: 0;
  text-align: center;
  line-height: 26px;
}
</style>

