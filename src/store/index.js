import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 读取localstorage
function read() {  
    var str = localStorage.getItem("mt-info");
    if(str == null || str.trim() == ""){
        return []
    }else{
        return JSON.parse(str)
    }
}

function save(value) {  //value {id:1,count:20}
    localStorage.setItem("mt-info",JSON.stringify(value));
}

export default new Vuex.Store({
    state: {
      mtInfo: read()
    },
    mutations: {
        saveOneInfo(state,value){
            //先获取数据;
            var temp = state.mtInfo.find(v => {
                return v.id == value.id
            });
            if (temp) {
                temp.count = value.count;
            } else {
                state.mtInfo.push(value);
            }
            save(state.mtInfo);
        }
    },
    getters:{
        //vuex的计算属性
        getMtInfo(state){
            return state.mtInfo;
        },
        totalCount(state){
            var tcount = 0;
            state.mtInfo.forEach(v => {
                tcount += Number(v.count);
            });
            return tcount;
        },
        getCountById:state=>id=>{
            return state.mtInfo.find(v => {
                return v.id = id; 
            }).count
        }
    }
})