<template>
  <header class="top-fixed cm_hl3 cm_bb1ce" :class="hdarr.bk">
      <div class="cm_pa cm_tl0 cm_z2 cm_wh2 cm_bs100 cm_m05 cmt2" @click="routerBack" v-if="hdarr.isback==1">
          <img :src="backImg" class="cm_fl cm_wh100 cm_bs100" v-if="hdarr.bkth==0"/>
          <img :src="hdarr.backimg" class="cm_fl cm_wh100 cm_bs100" v-if="hdarr.bkth==1"/>
      </div>
      <div class="cm_pc_12 cm_tc cm_c1c cm_fwb">{{hdarr.title}}</div>
      <router-link tag="div" :to="hdarr.rurl" class="cm_pa cm_tr0 cm_z2 cmt2">
          <img :src="soImg" class="cm_fl cm_wh2 cm_m05 cm_bs100" v-if="hdarr.isso==1 && hdarr.soth==0"/>
          <img :src="hdarr.soimg" class="cm_fl cm_wh2 cm_m05 cm_bs100" v-if="hdarr.isso==1 && hdarr.soth==1"/>
          <span class="cm_fl cm_mrl05" :class="hdarr.txtc" v-if="hdarr.istxt==1">{{hdarr.txt}}</span>
      </router-link>
  </header>
</template>
<script>
// <header2 :hdarr="hdarr2"></header2>
//bk背景颜色，title标题
//左侧
//isback是否有返回键,bkth是否替换返回键图标,backimg替换的返回键图标
//右侧
//isso是否有搜索键,soth是否替换搜索键图标,soimg替换的搜索键图标
//istxt是否为文字，txt文字，txtc文字颜色,
//rurl右侧点击url
//hdarr2:{bk:'cm_bf',title:'aiplat.com',isback:1,bkth:0,backimg:'',isso:0,soth:0,soimg:'',istxt:1,txt:'换个门店',txtc:'',rurl:''},
  export default {
    props:['hdarr'],
    data () {
      return {
        backImg:require('assets/images/commons/cm_back2.png'),
        soImg:require('assets/images/commons/cm_search.png')
      }
    },
    methods:{
      routerBack(){
        va.back(this);
      }
    },
    mounted(){
       //cm.setWXH();
    }
  }
</script>