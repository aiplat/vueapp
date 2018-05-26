<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
        <m-title :title="title"></m-title>
        <div class="cm_pc_12 cm_mt3 cm_mb6">
              <ul class="cm_pc_12">
                  <li class="cm_pc_12 cm_mtb1">
                    <div class="img_logo cm_wh7 cm_bs100 cm_br305 cm_fc"></div>
                  </li>
                  <li class="cm_pc_12 cm_be cm_mb05">
                    <div class="cm_pc_12 cm_pd05 cm_bf cm_lh105 cm_ti2 cm_mb05">{{indexData.description}}</div>
                  </li>
                  <li class="cm_pc_12 cm_prl05 cm_tc">
                      <div class="cm_w5 cm_prl05 cm_be cm_hl2">{{indexData.gitName}}</div>   
                  </li>
                  <li class="cm_pc_12 cm_prl05 cm_hl2 cm_ti2">
                      <a v-bind:href="indexData.gitUrl" target="_blank">{{indexData.gitUrl}}</a>
                  </li>
                  <li class="cm_pc_12 cm_prl05 cm_tc">
                      <div class="cm_w5 cm_prl05 cm_be cm_hl2">{{indexData.cooperation}}</div>   
                  </li>
                  <li class="cm_pc_12 cm_prl05 cm_hl2 cm_ti2">
                      <a v-bind:href="toEmail" target="_blank">{{indexData.email}}</a>
                  </li>
              </ul>
          </div>
          <m-footer></m-footer>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import mTitle from "components/aiplat/header1";
import mFooter from "components/aiplat/footer1";
export default {
  data() {
    return {
      title: thisPage.title,
      indexData: {
        description:"AI智能空间,拥抱人工智能,明天会更好。个人项目：跨平台app~《亲信地铁》，小程序~《娱乐计分器》。技术研究潜心使用vue.js开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致,只有app有独立功能。已通过vue-cli改为自己的vueapp,也很想这能够支持IE8。为了兼容IE8,更改了express和reactjs分别做了多页面应用和单页面应用,均可支持IE8。详见我的github开源代表作分别为vueapp、express-multipage、reactjs-ie8。",
        gitName: "我的git",
        gitUrl: "https://github.com/womendi",
        cooperation: "联系我们",
        email: "womendi@qq.com"
      }
    };
  },
  methods: {
    ...mapActions(["pushToBaidu", "getIndex"])
  },
  computed: {
    toEmail() {
      return "mailto:" + this.indexData.email;
    }
  },
  mounted() {
    var t = this;
    t.pushToBaidu();
    cm.setWXH();
  },
  components: { mTitle, mFooter },
  activated: function() {
    cm.sli2(0, 1);
  },
  deactivated: function() {}
};
</script>