<template>
  <div class="cm_pf cm_tl0 cm_z99999" id="popWin" v-if="popIsShow==='yes'">
    <div class="cm_pa cm_tl0 cm_z99 cm_b0 cm_o03 mask"></div>
    <div class="cm_pa cm_tl0 cm_z999 main">
      <div class="cm_pc_12 cm_prl2 cm_mt7">
        <ul class="cm_pc_12 cm_bf cm_br05">
          <li class="cm_pc_12 cm_hl2 cm_tc cm_be cm_brtr05 cm_brtl05">{{popData.title}}</li>
          <li class="cm_pc_12 cm_mtb05 cm_tc cm_c1c">
            <span class="cm_fs08">{{popData.content}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class PopWin extends Vue {
  @Prop({ default: 'no' }) public popIsShow!: string;
  @Prop({
    default: {
      title: '温馨提示',
      content: '',
    },
  })
  public popData!: object;
}
</script>
<style lang="less" scoped>
#popWin {
  width: 100%;
  height: calc(100vh);
  .mask,
  .main {
    width: 100%;
    height: calc(100vh);
  }
}
</style>
