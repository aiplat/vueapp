<template>
      <ul class="cm_pc_12 cm_ptb05 cm_bf">
          <router-link tag="li" :to="{'path':v.url}" class="cm_pc_3 cmt2" v-for="(v,k) in Larr" v-bind:key="k">
              <div class="cm_fc4 cm_mb05">
                  <img class="cm_wh2 cm_bs100" v-lazy="v.img">
              </div>
              <div class="cm_fc4" :class="v.Tcolor">
                  {{v.title}}
              </div>
          </router-link>
      </ul>
</template>
<script>
  // <list2 :Larr="Larr2"></list2>
  // import List2 from 'components/List2';
  // Larr2:{title:'我的',ists:1,ts:'查看全部',iswai:0,path:'/mine/myorder'},

  export default {
  	props:['Larr'],
    data () {
      return {
  
      }
    },
    methods:{

    },
    components: {},
    mounted(){
      cm.bet2('.cmt2', 1);
    },
    activated:function(){

    },
    deactivated:function(){
  
    }
  }
</script>

