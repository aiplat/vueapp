<template>
   <footer class="foot-fixed"> 
    <ul class="cm_main cm_pr cm_bf cm_tc">
          <li class="cm_pc_12 cm_hl2 cm_bb1ce cm_bf"><a :href="beian.url" target="_blank">{{beian.name}}</a></li>
          <router-link tag="li" :to="vv.url" v-for="(vv,kk) in items" class="cmt2" v-bind:class="{'active':$route.path==vv.url,'cm_c4c':$route.path!=vv.url,'cm_pc_3':items.length==4,'cm_pc_4':items.length==3,'cm_pc_6':items.length==2}" v-bind:key="kk">
              <div class="cm_wh105 cm_bs100 cm_fc cm_pr atimg">
                 <img :src="vv.imgon" class="cm_wh100 cm_bs100" v-if="$route.path==vv.url"/>
                 <img :src="vv.img" class="cm_wh100 cm_bs100" v-if="$route.path!=vv.url"/>
              </div>
              <div class="cm_hl105 atxt">
                <span class="cm_fs08">{{vv.name}}</span>
              </div>
          </router-link>
      </ul> 
     <ul class="cm_pf cm_blhide cm_w100 cm_pd05 cm_tc cm_be" id="seo">
          <li class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1e" v-for="(v,k) in arr" v-bind:key="k">
              <a :href="v.url" :title="v.name" target="_blank"><div class="cm_pc_12 cmtou">{{v.name}}</div></a>
          </li>
          <li class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1e">
              <a :href="beian.url" :title="beian.title" target="_blank"><div class="cm_pc_12 cmtou">{{beian.name}}</div></a>
          </li>
      </ul>
 </footer>
</template>

<script>
var app2 = {
  data() {
    return {
      items: [
        {
          name: "首页",
          url: "/",
          img: require("../../assets/images/aiplat/footer/sy_01.png"),
          imgon: require("../../assets/images/aiplat/footer/sy_01on.png")
        },
        {
          name: "APP下载",
          url: "/apps.html",
          img: require("../../assets/images/aiplat/footer/sy_03.png"),
          imgon: require("../../assets/images/aiplat/footer/sy_03on.png")
        },
        {
          name: "捐赠我们",
          url: "/donate.html",
          img: require("../../assets/images/aiplat/footer/sy_04.png"),
          imgon: require("../../assets/images/aiplat/footer/sy_04on.png")
        }
      ],
      arr: [
        { name: "web app", url: "http://m.aiplat.com/metro" },
        {
          name: "亲信地铁android版下载",
          url: "http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5"
        },
        {
          name: "亲信地铁ios版下载",
          url:
            "https://itunes.apple.com/us/app/%E4%BA%B2%E4%BF%A1%E5%9C%B0%E9%93%81/id1254451008?l=zh&ls=1&mt=8#"
        }
      ],
      beian: {
        name: "粤ICP备16011379号-2",
        url: "http://www.miibeian.gov.cn",
        title: "ai智能空间备案号"
      }
    };
  },
  mounted() {
    cm.lei2();
  }
};
export default app2;
</script>