<template>
  <header class="cm_pf cm_w100 cm_z99999" id="headerMain">
    <div class="cm_main cm_pr cm_hl3 cm_m0 cm_b0 cm_cf cm_tc">{{title}}</div>
  </header>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Header1 extends Vue {
  @Prop() private title!: string;
}
</script>
<style lang="less" scope>
#headerMain {
  top: 0;
}
</style>