<template>
  <header class="top-fixed" id="WXtitle">
      <div class="cm_main cm_pr cm_m0 cm_b0">
          <div class="cm_pa cm_tl0 cm_z2 cm_wh2 cm_m05" @click="routerBack">
              <img class="cm_fc cm_wh100 cm_bs100" :src="back2"/>
          </div>
          <div class="cm_main cm_hl3 cm_tc cm_cf cm_fwb">{{title}}</div>
      </div>
  </header>
</template>
<script>
export default {
  props: ['title'],
  data() {
    return {
      back2: require('../../assets/images/commons/cm_back2.png')
    };
  },
  methods: {
    routerBack() {
      this.$router.push({ path: '/' });
    }
  },
  mounted() {
    //cm.setWXH();
  }
};
</script>