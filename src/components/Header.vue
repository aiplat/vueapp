<template>
  <header class="cm_pf cm_w100 cm_z99999" id="headerMain">
    <div class="cm_main cm_pr cm_m0 cm_b0">
      <div class="cm_pa cm_tl0 cm_z2 cm_wh2 cm_m05 cm_csp" @click="routerBack">
        <img class="cm_fc cm_wh100 cm_bs100" :src="back2" />
      </div>
      <div class="cm_main cm_hl3 cm_tc cm_cf cm_fwb">{{title}}</div>
    </div>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header extends Vue {
  @Prop() private title!: string;
  private back2: string = require('@/assets/images/commons/cm_back2.png');

  private routerBack() {
    this.$router.push({ path: '/' });
  }
}
</script>
<style lang="less" scope>
#headerMain {
  top: 0;
}
</style>