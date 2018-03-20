<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
        <m-title :title="title"></m-title>
        <div class="cm_pc_12 cm_mtb3">
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
import { mapState, mapActions } from 'vuex';
import mTitle from 'components/aiplat/header1';
import mFooter from 'components/aiplat/footer1';
import axios from 'axios';
export default {
  data() {
    return {
      title: thisPage.title,
      indexData:{
        "description":"ai智能空间,拥抱人工智能,明天会更好。目前潜心使用vue.js开发h5app:同时兼容wap、web、微信浏览器、微信小程序、android和ios,六个平台界面统一,功能一致,只有app有独立功能。",
        "gitName":"我的git",
        "gitUrl":"https://github.com/womendi",
        "cooperation": "商业合作",
        "email": "womendi@qq.com",
      }
    };
  },
  methods: {
    ...mapActions(['pushToBaidu','getIndex'])
  },
  computed: {
    toEmail() {
      return 'mailto:' + this.indexData.email;
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