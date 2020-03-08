<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <Header1 :title="title" v-if="!iswx" />
      <div class="cm_pc_12 cm_mb8" :class="{'cm_mt3':!iswx}">
        <ul class="cm_pc_12">
          <li class="cm_pc_12 cm_prl05 cm_lh105 cm_ti2 cm_mtb05">
            <span class>{{indexData.desc}}</span>
          </li>
          <li class="cm_pc_12 cm_prl05 cm_tc cm_mb05">
            <div
              class="cm_pc_6 cm_hl2 cm_csp"
              :class="{'cm_c1b cm_cf':dnid==k,'cm_be':dnid!=k}"
              @click="tsDnid(k)"
              v-for="(v,k) in indexData.dnarr"
              v-bind:key="k"
            >{{v.name}}</div>
          </li>
          <li class="cm_pc_12 cm_mb05" v-for="(v2,k2) in indexData.dnarr" v-bind:key="k2">
            <img class="cm_h17 cm_bs100 cm_fc" :src="v2.img" v-if="dnid==k2" />
          </li>
          <li class="cm_pc_12 cm_prl05 cm_lh1 cm_ti2 cm_mb05">
            <span class="cm_fs08 cm_c1c">{{indexData.about}}</span>
          </li>
        </ul>
      </div>
      <Footer1 />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Donate extends Vue {
  private title: string = '';
  private iswx: number = 0;
  private indexData: object = {
    desc:
      '非常感谢各位对ai智能空间的无偿捐赠,ai智能空间将会持续开发更多更好的应用。',
    about:
      '特别说明:以上收款二维码仅在全球唯一网站aiplat.com有效,对于全球其他地方或网站出现的均是假冒的。',
    dnarr: [
      {
        name: '微信收款',
        img: require('@/assets/images/aiplat.com/donate_WX.png'),
      },
      {
        name: '支付宝收款',
        img: require('@/assets/images/aiplat.com/donate_ZFB.png'),
      },
    ],
  };

  get dnid() {
    return this.$store.getters.getDnid;
  }

  private tsDnid(k: number) {
    this.$store.dispatch('setDnid', k);
  }

  private created() {
    const t: any = this;
    t.iswx = window.H5.app.iswx;
  }

  private mounted() {
    // console.log("mounted");
  }

  private activated() {
    const t: any = this;
    t.title = t.$route.name;
    console.log('t.$store.getters.getDnid === ', t.$store.getters.getDnid);
  }
}
</script>