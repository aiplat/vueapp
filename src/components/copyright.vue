<template>
   <div class="cm_pf cm_pc_12 cm_hl3 cm_tc" :class="{'cm_b3e':isb0!=1,'cm_bl0':isb0==1}">
      &copy;2016 <a :href="app.url" target="_blank">{{app.site}}</a>
  </div>
</template>

<script>
  export default {
    props:['isb0'],
    data () {
      return {
        app:{description:Mconf.description,site:Mconf.site,url:Mconf.url}
      }
    },
    methods:{

    },
    mounted(){

    },
    activated:function(){

    },
    components: {}
  }
</script>