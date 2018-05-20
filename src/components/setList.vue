<template>
   <ul class="row cm_be cm_pr">
        <router-link tag="li" :to="vv.link" class="cm_pc_12 cm_bf cm_hl3 cm_br02" v-for="(vv,k) in slist" :class="{'cm_mb05':vv.mb==1,'cm_bb1ce':vv.mb==0}" v-bind:key="k">
            <div class="row cm_pr cmtou" :class="vv.ck">
              <span class="cm_pa cm_tl0 cm_wh2 cm_bs100 cm_m05" :class="vv.img" v-if="vv.imghide==0"></span> 
              <div class="row cm_pr7 cm_ts" :class="{'cm_pl05':vv.imghide==1,'cm_pl3':vv.imghide==0}">{{vv.title}}</div>
              <span class="cm_pa cm_tr0 cm_mr05">
                  <span class="cm_fl cm_c4c cm_fs09" v-html="vv.ts"></span>
                  <span class="cm_fl cm_wh1 cm_bs100 cm_mtb1 cm_right"></span>
              </span>
            </div>
         </router-link>
    </ul>
</template>
<script>
  var app2={
  	props:['slist'],
    data () {
      return {
        title: '设置类列表组件'
      }
    }
  }
  export default app2;
</script>