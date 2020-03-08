<template>
  <div class="cm_pf cm_tl0 cm_z99999" id="confirmWin" v-if="confirmIsShow==='yes'">
    <div class="cm_pa cm_tl0 cm_z99 cm_b0 cm_o03 mask"></div>
    <div class="cm_pa cm_tl0 cm_z999 main">
      <div class="cm_pc_12 cm_prl2 cm_mt7 cm_minh3">
        <ul class="cm_pc_12 cm_bf cm_br05">
          <li class="cm_pc_12 cm_prl1 cm_hl3 cm_be cm_brtr05 cm_brtl05">{{confirmData.title}}</li>
          <li class="cm_pc_12 cm_prl1 cm_mtb1">
            <span class="cm_fs08 cm_c1c">{{confirmData.content}}</span>
          </li>
          <li class="cm_pc_12 cm_mb1 cm_tc cm_z99">
            <div class="cm_pc_12 cm_prl1 cm_tr">
              <div
                class="cm_dib cm_hl2 cm_prl1 cm_br02 cm_b0 cm_cf cm_mr1 cm_csp"
                @click="confirmClick(confirmData.leftType||'cancel')"
                v-if="confirmData.btnType==='2'"
              >{{confirmData.leftBtn}}</div>
              <div
                class="cm_dib cm_hl2 cm_prl1 cm_br02 cm_c1b cm_cf cm_csp"
                @click="confirmClick(confirmData.rightType||'ok')"
              >{{confirmData.rightBtn}}</div>
            </div>
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
export default class PopConfirm extends Vue {
  @Prop({ default: 'no' }) public confirmIsShow!: string;
  @Prop({
    default: {
      title: '温馨提示',
      content: '',
      btnType: '2',
      leftBtn: '取消',
      leftType: 'cancel',
      rightBtn: '确定',
      rightType: 'ok',
    },
  })
  public confirmData!: object;
  public isShow: string = 'no';
  public updateShow(v: string) {
    const t: any = this;
    t.isShow = v;
  }
  private confirmClick(v: any) {
    const t: any = this;
    t.$emit('confirmClick2', v);
  }
}
</script>
<style lang="less" scoped>
#confirmWin {
  width: 100%;
  height: calc(100vh);
  .mask,
  .main {
    width: 100%;
    height: calc(100vh);
  }
}
</style>
