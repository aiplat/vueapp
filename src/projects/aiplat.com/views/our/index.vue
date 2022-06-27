<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <Header1 :title="title" v-if="!iswx" />
      <ul class="cm_pc_12 cm_mb8" :class="{'cm_mt3':!iswx}">
        <li class="cm_pc_12 cm_prl05 cm_lh105 cm_ti2 cm_mtb05">
          <span class>{{indexData.desc}}</span>
        </li>
      </ul>
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
      '技术研究潜心使用各种框架开发h5app：同时兼容wap、web、微信浏览器、微信百度支付宝头条小程序、android和ios,各个平台界面统一,功能一致,ai智能空间将会持续开发更多更好的应用。',
  };

  private created() {
    const t: any = this;
    t.iswx = window.H5.app.iswx;
  }

  private activated() {
    const t: any = this;
    t.title = t.$route.name;
  }
}
</script>
