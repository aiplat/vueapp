<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
        <m-title :title="title"></m-title>
        <div class="cm_pc_12 cm_mt3 cm_mb6">
              <ul class="cm_pc_12">
                  <li class="cm_pc_12 cm_mt05">
                    <div class="img_logo cm_wh7 cm_bs100 cm_br305 cm_fc"></div>
                  </li>
                  <li class="cm_pc_12 cm_be">
                    <div class="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05">{{indexData.description}}</div>
                  </li>
                  <li class="cm_pc_12 cm_prl05">
                      <div class="cm_pc_12">
                            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.gitName}}</div>
                            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05"><a v-bind:href="indexData.gitUrl2" target="_blank">{{indexData.gitUrl}}</a></div>
                      </div>
                      <div class="cm_pc_12 cm_pd05 cm_tc cm_be">
                          <div class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce" v-for="(v,k) in indexData.gitList" v-bind:key="k">
                                <a :href='v.url' target="_blank"><div class="cmtou"><span class="cm_c1c cm_fwb">{{v.name}}</span>:<span class="cm_fs08">{{v.desc}}</span></div></a>
                          </div>
                      </div>
                  </li>
                  <li class="cm_pc_12 cm_prl05 cm_tc">
                     <div class="cm_pc_12 cm_bb1ce">
                            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.cooperation}}</div>
                            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05"><a v-bind:href="toEmail()" target="_blank">{{indexData.email}}</a></div>
                      </div>
                  </li>
              </ul>
          </div>
          <m-footer></m-footer>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import mTitle from "components/aiplat/header1";
import mFooter from "components/aiplat/footer1";
export default {
  data() {
    return {
      title: window.thisPage.title,
      indexData: {
        description:
          "AI智能空间,拥抱人工智能,明天会更好。个人项目:跨平台app~《亲信地铁》、小程序~《娱乐计分器》。技术研究潜心使用各种框架开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致。详见应用展示。",
        gitName: "我的github",
        gitUrl: "github.com/womendi",
        gitUrl2: "https://github.com/womendi",
        gitList: [
          {
            name: "cmui",
            desc: "自己写的跨平台css3框架",
            url: "https://github.com/womendi/cmui"
          },
          {
            name: "vueapp",
            desc: "改写vue-cli的跨平台框架",
            url: "https://github.com/womendi/vueapp"
          },
          {
            name: "react-app-ie8",
            desc: "改写react兼容IE8的跨平台框架",
            url: "https://github.com/womendi/react-app-ie8"
          },
          {
            name: "angular-app",
            desc: "改写angular-cli的跨平台框架",
            url: "https://github.com/womendi/angular-app"
          },
          {
            name: "express-multipage",
            desc: "改写express的多页面框架",
            url: "https://github.com/womendi/express-multipage"
          },
          {
            name: "nervjs-ie8",
            desc: "改写nervjs兼容IE8的多页面框架",
            url: "https://github.com/womendi/nervjs-ie8"
          },
          {
            name: "reactNative",
            desc: "改写reactNative的APP框架",
            url: "https://github.com/womendi/reactNative"
          }
        ],
        cooperation: "联系我",
        email: "womendi@qq.com"
      }
    };
  },
  methods: {
    toEmail() {
      return "mailto:" + this.indexData.email;
    },
    ...mapActions(["pushToBaidu", "getIndex"])
  },
  computed: {},
  mounted() {
    var t = this;
    t.pushToBaidu();
    window.cm.setWXH();
  },
  components: { mTitle, mFooter },
  activated: function() {
    window.cm.sli2(0, 1);
  },
  deactivated: function() {}
};
</script>