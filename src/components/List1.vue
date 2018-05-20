<template>
  <ul class="cm_pc_12 cm_bf">
     <li class="cm_pc_12 cm_bb1ce cmt2" @click="toUrl(k)" v-for="(v,k) in Larr"  v-bind:key="k">
       <div class="cm_pa cm_tl0" v-if="v.isLimg==1">
           <img v-lazy="v.Limg" class="cm_fl cm_wh2 cm_bs100 cm_m05" />
       </div>
  	   <div class="cm_pc_12 cm_hl3 cm_ti05" :class="{'cm_pl205':v.isLimg==1}">
  	      <span :class="v.Tcolor">{{v.title}}</span>
  	   </div>
  	   <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
  	       <div class="cm_fl cm_c4c cm_fs08" :class="v.tscolor" v-if="v.ists==1">{{v.ts}}</div>
  	       <img v-lazy="imgR" class="cm_fl cm_wh1 cm_bs100 cm_mtb1"  v-if="v.noR!=1"/>
  	   </div>
  	</li>
  </ul>
</template>
<script>
  // <list2 :Larr="Larr2"></list2>
  // import List2 from 'components/List1';
  // Larr2:{title:'我的',Tcolor:'',isLimg:0,Limg:'',ists:1,ts:'查看全部订单',tscolor:'',iswai:0,url:'/mine/myorder'},

  export default {
  	props:['Larr'],
    data () {
      return {
      	imgR:require('../assets/images/commons/cm_right.png')
      }
    },
    methods:{
    	toUrl:function(id){
    		var t=this;
        var url=t.Larr[id].url;
    		if(t.Larr[id].iswai==0){
    			t.$router.push({path:url});
    			return;
    		}
        if(t.Larr[id].isphone==1){
          window.location = 'tel:' + url;
          return;
        }
    		window.location = url;
    	} 
    },
    components: {},
    mounted(){
      cm.loadImg(0);
      cm.bet2('.cmt2', 1);
    },
    activated:function(){
      cm.loadImg(0);
    },
    deactivated:function(){
       
    }
  }
</script>

