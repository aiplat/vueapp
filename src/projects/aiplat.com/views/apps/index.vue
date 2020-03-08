<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <Header1 :title="title" v-if="!iswx" />
      <ul class="cm_pc_12 cm_mb8" :class="{'cm_mt3':!iswx}">
        <li class="cm_pc_12 cm_mt05">
          <div class="metro_icon cm_wh7 cm_bs100 cm_fc"></div>
        </li>
        <li class="cm_pc_12">
          <ul class="cm_pc_12 cm_prl05" v-for="(item,k2) in indexData" v-bind:key="k2">
            <li class="cm_pc_12">
              <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{k2+1}}、{{item.name}}</div>
            </li>
            <li class="cm_pc_12 cm_pd05 cm_tc cm_be">
              <div
                class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce cm_csp"
                v-for="(v,k) in item.arr"
                v-bind:key="k"
                @click="toWin(v.url)"
              >
                <div v-if="v.market">{{v.market+'-'+v.name}}</div>
                <div v-else>{{v.name}}</div>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <Footer1 />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Apps extends Vue {
  private title: string = "";
  private iswx: number = 0;
  private indexData: object[] = [
    {
      name: "亲信地铁",
      arr: [
        {
          name: "跨平台网址-webApp",
          url: "http://m.aiplat.com/metro",
          market: ""
        },
        {
          name: "安卓App下载",
          url: "http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5",
          market: "腾讯应用宝"
        },
        {
          name: "苹果App下载",
          url: "https://itunes.apple.com/cn/app/id1254451008",
          market: "appstore"
        }
      ]
    },
    {
      name: "娱乐计分器",
      arr: [
        {
          name: "微信小程序-搜索‘娱乐计分器’",
          url: "weixin://",
          market: ""
        },
        {
          name: "头条小程序-搜索‘娱乐计分器’",
          url: "",
          market: ""
        },
        {
          name: "支付宝小程序-搜索‘娱乐计分器’",
          url: "",
          market: ""
        }
      ]
    },
    {
      name: "AI智能空间",
      arr: [
        {
          name: "单页面vue版",
          url: "https://aiplat.com",
          market: ""
        },
        {
          name: "单页面react版",
          url: "http://react.aiplat.com",
          market: ""
        },
        {
          name: "单页面angular版",
          url: "http://ajs.aiplat.com",
          market: ""
        },
        {
          name: "多页面nervjs版",
          url: "http://nerv.aiplat.com",
          market: ""
        },
        {
          name: "单页面uniapp版",
          url: "http://uniapp.aiplat.com",
          market: ""
        }
      ]
    }
  ];

  private toWin(url: any) {
    if (!url) {
      return;
    }
    if (url === "weixin://") {
      return;
    }
    window.location = url;
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
  }
}
</script>
