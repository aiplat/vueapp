<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <Header1 :title="title" v-if="!iswx" />
      <ul class="cm_pc_12 cm_mb8" :class="{'cm_mt3':!iswx}">
        <li class="cm_pc_12 cm_mt05">
          <div class="img_logo cm_wh7 cm_bs100 cm_br305 cm_fc cm_csp" @click="showWelcome"></div>
        </li>
        <li class="cm_pc_12 cm_be">
          <div class="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05">{{indexData.description}}</div>
        </li>
        <li class="cm_pc_12 cm_prl05">
          <div class="cm_pc_12">
            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.gitName}}</div>
            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05">
              <a v-bind:href="indexData.gitUrl2" target="_blank" class="cm_c1c">{{indexData.gitUrl}}</a>
            </div>
          </div>
          <div class="cm_pc_12 cm_pd05 cm_tc cm_be">
            <div
              class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce"
              v-for="(v,k) in indexData.gitList"
              v-bind:key="k"
            >
              <a class="cm_csp" :href="v.url" target="_blank">
                <div>
                  <span class="cm_c1c cm_fwb">{{v.name}}</span>:
                  <span class="cm_fs08">{{v.desc}}</span>
                </div>
              </a>
            </div>
          </div>
        </li>
        <li class="cm_pc_12 cm_prl05 cm_tc">
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
    gitList: [
      {
        name: 'cmui',
        desc: '自己写的跨平台css3框架',
        url: 'https://github.com/aiplat/cmui',
      },
      {
        name: 'uniapp',
        desc: '改写uni-app的跨平台框架',
        url: 'https://github.com/aiplat/uniapp',
      },
      {
        name: 'vueapp',
        desc: '改写vue-cli的跨平台框架',
        url: 'https://github.com/aiplat/vueapp',
      },
      {
        name: 'react-app-ie8',
        desc: '改写react兼容IE8的跨平台框架',
        url: 'https://github.com/aiplat/react-app-ie8',
      },
      {
        name: 'angular-app',
        desc: '改写angular-cli的跨平台框架',
        url: 'https://github.com/aiplat/angular-app',
      },
      {
        name: 'express-multipage',
        desc: '改写express的多页面框架',
        url: 'https://github.com/aiplat/express-multipage',
      },
      {
        name: 'nervjs-ie8',
        desc: '改写nervjs兼容IE8的多页面框架',
        url: 'https://github.com/aiplat/nervjs-ie8',
      },
      {
        name: 'wepy-app',
        desc: '改写wepy的小程序框架',
        url: 'https://github.com/aiplat/wepy-app',
      },
      {
        name: 'reactNative',
        desc: '改写reactNative的APP框架',
        url: 'https://github.com/aiplat/reactNative',
      },
    ],
    cooperation: '邮箱联系',
    email: 'womendi@qq.com',
  };

  private popIsShow: string = 'no';
  private popData: object = {
    title: '温馨提示',
    content: '欢迎访问aiplat.com',
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
    t.indexData.description = t.$conf.aiplat.description;
  }

  private async activated() {
    const t: any = this;
    t.title = t.$route.name;
  }
}
</script>
