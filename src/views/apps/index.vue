<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <m-title :title="title"></m-title>
      <div class="cm_pc_12 cm_mt3 cm_mb6">
        <ul class="cm_pc_12">
          <li class="cm_pc_12 cm_mt05">
              <div class="metro_icon cm_wh7 cm_bs100 cm_fc"></div>
          </li>
          <li class="cm_pc_12">
            <ul class="cm_pc_12 cm_prl05" v-for="(item,k2) in indexData" v-bind:key="k2">
                <li class="cm_pc_12">
                      <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{k2+1}}、{{item.name}}</div>
                </li>
                <li class="cm_pc_12 cm_pd05 cm_tc cm_be">
                    <div class="cm_pc_12  cm_lh3 cm_br02 cm_bf cm_bb1ce" v-for="(v,k) in item.arr" v-bind:key="k" @click="toDown(v.url)">
                          <div class="cmtou" v-if="v.market">{{v.market+'-'+v.name}}</div>
                          <div class="cmtou" v-else>{{v.name}}</div>
                    </div>
                </li>
            </ul>
          </li>
        </ul>
      </div>
      <m-footer></m-footer>
    </div>
  </div>
</template>
<script>
import {  mapActions } from 'vuex';
import mTitle from 'components/aiplat/header1';
import mFooter from 'components/aiplat/footer1';
export default {
  data() {
    return {
      title: window.thisPage.title,
      indexData: [
        {
          name: '亲信地铁',
          arr: [
            {
              name: '跨平台网址-webApp',
              url: 'http://m.aiplat.com/metro',
              market: ''
            },
            {
              name: '安卓App下载',
              url:
                'http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5',
              market: '腾讯应用宝'
            },
            {
              name: '苹果App下载',
              url: 'https://itunes.apple.com/cn/app/id1254451008',
              market: 'appstore'
            }
          ]
        },
        {
          name: '娱乐计分器',
          arr: [
            {
              name: '微信小程序-搜索‘娱乐计分器’',
              url: 'weixin://',
              market: ''
            }
          ]
        }
      ]
    };
  },
  methods: {
    toDown(url) {
      if (!url) {
        return;
      }
      if (url == 'weixin://' && window.cm.isMob() == 0) {
        window.cm.upts('请在手机浏览器点击打开微信');
        return;
      }
      window.location = url;
    },
    ...mapActions(['pushToBaidu', 'getApps'])
  },
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