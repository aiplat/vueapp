<template>
    <footer class="foot-fixed cm_bf">
        <ul class="cm_main cm_pr cm_bf cm_tc">
            <li class="cm_pc_12 cm_mob_12 cm_hl2 cm_bb1ce cm_bf">{{site.copyright}} <a :href="site.url" target="_blank">{{site.name}}</a>
            </li>
            <li class="cm_pc_12 cm_mob_12 cm_hl2 cm_bb1ce cm_bf">
                <a :href="beian.url" :title="beian.title" target="_blank">
                    <div class="cm_pc_12 cmtou">{{beian.name}}</div>
                </a>
            </li>
            <router-link tag="li" :to="vv.url" v-for="(vv,kk) in items" class="cmt2 cm_bl1ce "
                         v-bind:class="{'active':$route.path==vv.url,'cm_br1ce':kk==items.length-1,'cm_c4c':$route.path!=vv.url,'cm_pc_3':items.length==4,'cm_pc_4':items.length==3,'cm_pc_6':items.length==2}"
                         v-bind:key="kk">
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
                <a :href="v.url" :title="v.name" target="_blank">
                    <div class="cm_pc_12 cmtou">{{v.name}}</div>
                </a>
            </li>
            <li class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1e">
                <a :href="beian.url" :title="beian.title" target="_blank">
                    <div class="cm_pc_12 cmtou">{{beian.name}}</div>
                </a>
            </li>
        </ul>
    </footer>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component export default class Footer1 extends Vue {
        private items: object[] = [
            {
                name: '首页',
                url: '/index.html',
                img: require('../../assets/images/aiplat.com/sy_01.png'),
                imgon: require('../../assets/images/aiplat.com/sy_01on.png'),
            },
            {
                name: '应用展示',
                url: '/apps.html',
                img: require('../../assets/images/aiplat.com/sy_03.png'),
                imgon: require('../../assets/images/aiplat.com/sy_03on.png'),
            },
            {
                name: '捐赠我们',
                url: '/donate.html',
                img: require('../../assets/images/aiplat.com/sy_04.png'),
                imgon: require('../../assets/images/aiplat.com/sy_04on.png'),
            },
        ];
        private arr: object[] = [
            {name: 'web app', url: 'http://m.aiplat.com/metro'},
            {
                name: '亲信地铁android版下载',
                url: 'http://a.app.qq.com/o/simple.jsp?pkgname=io.dcloud.H5093BCE5',
            },
            {
                name: '亲信地铁ios版下载',
                url:
                    'https://itunes.apple.com/cn/app/id1254451008',
            },
            {name: '微信小程序-搜索‘娱乐计分器’', url: 'weixin://'},
        ];
        private site: object = {
            name: 'aiplat.com',
            url: 'https://aiplat.com',
            copyright: '©2016',
        };
        private beian: object = {
            name: '粤ICP备16011379号-2',
            url: 'http://www.miibeian.gov.cn',
        };
    }

</script>