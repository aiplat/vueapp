<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <ul class="cm_pc_12 cm_be cm_mt05 cm_mb8">
        <li class="cm_pc_12 cm_bf cm_prl05">
          <div class="img_logo cm_wh7 cm_bs100 cm_br305 cm_fc"></div>
        </li>
        <li class="cm_pc_12 cm_bf cm_prl05 cm_mb05">
          <div class="cm_pc_12 cm_ptb05 cm_bf cm_lh105 cm_ti2">{{indexData.description}}</div>
        </li>
        <li class="cm_pc_12 cm_bf cm_prl05 cm_bb1ce">
          <div class="cm_pc_12">
            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.gitName}}</div>
            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
              <a v-bind:href="indexData.gitUrl2" target="_blank" class="cm_c1c">{{indexData.gitUrl}}</a>
            </div>
          </div>
        </li>
        <li class="cm_pc_12 cm_bf cm_prl05 cm_bb1ce">
          <div class="cm_pc_12">
            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.cooperation}}</div>
            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
              <a v-bind:href="toEmail()" target="_blank" class="cm_c1c">{{indexData.email}}</a>
            </div>
          </div>
        </li>
      </ul>
      <ul class="cm_pf cm_w100 cm_z99 cm_bf cm_tc" id="beianFoot">
        <li class="cm_pc_12 cm_hl2 cm_bb1ce cm_bf">
          {{site.copyright}}
          <a class="cm_csp" :href="site.url" target="_blank">{{site.name}}</a>
        </li>
        <li class="cm_pc_12 cm_hl2 cm_bf">
          <a class="cm_csp" :href="beian.url" :title="beian.title" target="_blank">
            <div class="cm_pc_12">{{beian.name}}</div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Index extends Vue {
  private title: string = '';
  private iswx: number = 0;
  private indexData: any = {
    description: '',
    gitName: '我的github',
    gitUrl: 'github.com/aiplat',
    gitUrl2: 'https://github.com/aiplat',
    cooperation: '我的邮箱',
    email: 'womendi@qq.com',
  };
  private site: object = {
    name: 'aiplat.com',
    url: 'https://aiplat.com',
    copyright: '©2016',
  };
  private beian: object = {
    name: '粤ICP备16011379号-2',
    url: 'http://www.miibeian.gov.cn',
  };

  private toEmail() {
    return 'mailto:' + this.indexData.email;
  }

  private created() {
    const t: any = this;
    t.iswx = window.H5.app.iswx;
    console.log('iswx = ', t.iswx);
  }

  private mounted() {
    console.log('mounted');
  }

  private async activated() {
    const t: any = this;
    t.title = t.$route.name;
    t.indexData.description = t.$conf.aiplat.description;
  }
}
</script>
<style lang="less" scope>
#beianFoot {
  bottom: 0;
}
</style>
