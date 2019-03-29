<template>
    <div class="cm_main2">
        <div class="cm_main cm_pr">
            <Header1 :title="title"/>
            <div class="cm_pc_12 cm_mt3 cm_mb8">
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
                            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05"><a v-bind:href="indexData.gitUrl2" target="_blank"
                                                                        class="cm_c1c">{{indexData.gitUrl}}</a></div>
                        </div>
                        <div class="cm_pc_12 cm_pd05 cm_tc cm_be">
                            <div class="cm_pc_12 cm_lh3 cm_br02 cm_bf cm_bb1ce" v-for="(v,k) in indexData.gitList"
                                 v-bind:key="k">
                                <a :href='v.url' target="_blank">
                                    <div class="cmtou"><span class="cm_c1c cm_fwb">{{v.name}}</span>:<span
                                            class="cm_fs08">{{v.desc}}</span></div>
                                </a>
                            </div>
                        </div>
                    </li>
                    <li class="cm_pc_12 cm_prl05 cm_tc">
                        <div class="cm_pc_12 cm_bb1ce">
                            <div class="cm_fl cm_prl05 cm_be cm_hl2 cm_mtb05 cm_br02">{{indexData.cooperation}}</div>
                            <div class="cm_pa cm_tr0 cm_hl3 cm_mr05"><a v-bind:href="toEmail()" target="_blank"
                                                                        class="cm_c1c">{{indexData.email}}</a></div>
                        </div>
                    </li>
                </ul>
                <Footer1/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Header1 from '@/components/aiplat/Header1.vue';
    import Footer1 from '@/components/aiplat/Footer1.vue';

    @Component({
        components: {
            Header1,
            Footer1,
        },
    })
    export default class Index extends Vue {
        private title: string = 'AI智能空间';
        private indexData: any = {
            description: 'AI智能空间,拥抱人工智能,明天会更好。个人项目：跨平台app~《亲信地铁》、小程序~《娱乐计分器》。技术研究潜心使用各种框架开发h5app：同时兼容wap、web、微信浏览器、微信百度支付宝头条小程序、android和ios,各个平台界面统一,功能一致。详见应用展示。',
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
                    name: 'vueapp',
                    desc: '改写vue-cli的跨平台框架',
                    url: 'https://github.com/aiplat/vueapp',
                },
                {
                    name: 'uniapp',
                    desc: '改写uni-app的跨平台框架',
                    url: 'https://github.com/aiplat/uniapp',
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
                    name: 'wepy-app',
                    desc: '改写wepy的小程序框架',
                    url: 'https://github.com/aiplat/wepy-app',
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
                    name: 'reactNative',
                    desc: '改写reactNative的APP框架',
                    url: 'https://github.com/aiplat/reactNative',
                },
            ],
            cooperation: '商业合作',
            email: 'womendi@qq.com',
        };

        private toEmail() {
            return 'mailto:' + this.indexData.email;
        }

        private created() {
            console.log('created');
        }

        private mounted() {
            // console.log(this.$conf);
            // console.log(this.$apis);
        }

        private activated() {
            // console.log(this.$cm);
        }
    }

</script>
