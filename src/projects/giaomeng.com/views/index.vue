<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <ul class="cm_pc_12 cm_mb8" :class="{'cm_mt3':!iswx}">
        <li class="cm_pc_12 cm_mt05">
          <div class="img_logo cm_wh7 cm_bs100 cm_br305 cm_fc cm_csp" @click="showWelcome"></div>
        </li>
        <li class="cm_pc_12 cm_be">
          <div class="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05">{{indexData.description}}</div>
        </li>
        <li class="cm_pc_12">
          <div class="cm_pc_12 cm_bb1ce">
            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.gitName}}</div>
            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
              <a v-bind:href="indexData.gitUrl2" target="_blank" class="cm_c1c">{{indexData.gitUrl}}</a>
            </div>
          </div>
        </li>
        <li class="cm_pc_12">
          <div class="cm_pc_12 cm_bb1ce">
            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.cooperation}}</div>
            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
              <a v-bind:href="toEmail()" target="_blank" class="cm_c1c cm_csp">{{indexData.email}}</a>
            </div>
          </div>
        </li>
      </ul>
      <Footer1 />
      <PopWin :popData="popData" :popIsShow="popIsShow"></PopWin>
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

  private popIsShow: string = 'no';
  private popData: object = {
    title: '温馨提示',
    content: '欢迎访问giaomeng.com',
  };

  private toEmail() {
    return 'mailto:' + this.indexData.email;
  }

  private showWelcome() {
    const t: any = this;
    t.popIsShow = 'yes';
    setTimeout(() => {
      t.popIsShow = 'no';
    }, 2000);
  }

  private created() {
    const t: any = this;
    t.iswx = window.H5.app.iswx;
    t.indexData.description = t.$conf.giaomeng.description;
  }

  private async activated() {
    const t: any = this;
    t.title = t.$route.name;
  }
}
</script>
