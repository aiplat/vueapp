<template>
    <div class="cm_main2">
        <div class="cm_main cm_pr">
            <Header1 :title="title"/>
            <div class="cm_pc_12 cm_mt3 cm_mb8">
                <ul class="cm_pc_12">
                    <li class="cm_pc_12 cm_prl05 cm_lh105 cm_ti2 cm_mtb05">
                        <span class="">{{indexData.desc}}</span>
                    </li>
                    <li class="cm_pc_12 cm_prl05 cm_tc cm_mb05">
                        <div class="cm_pc_6 cm_hl2" :class="{'cm_c1b cm_cf':dnid==k,'cm_be':dnid!=k}" @click="tsDnid(k)"
                             v-for="(v,k) in indexData.dnarr" v-bind:key="k">{{v.name}}
                        </div>
                    </li>
                    <li class="cm_pc_12 cm_mb05" v-for="(v2,k2) in indexData.dnarr" v-bind:key="k2">
                        <img class="cm_h17 cm_bs100 cm_fc" :src="v2.img" v-if="dnid==k2"/>
                    </li>
                    <li class="cm_pc_12 cm_prl05 cm_lh1 cm_ti2 cm_mb05">
                        <span class="cm_fs08 cm_c1c">{{indexData.about}}</span>
                    </li>
                </ul>
            </div>
            <Footer1/>
        </div>
    </div>
</template>
<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import Header1 from '@/components/aiplat.com/Header1.vue';
import Footer1 from '@/components/aiplat.com/Footer1.vue';

@Component({
    components: {
        Header1,
        Footer1,
    },
})
export default class Donate extends Vue {
    private title: string = '捐赠我们';
    private indexData: object = {
        desc: '非常感谢各位对ai智能空间的无偿捐赠,ai智能空间将会持续开发更多更好的应用。',
        about: '特别说明:以下收款二维码仅在全球唯一网站aiplat.com有效,对于全球其他地方或网站出现的均是假冒的。',
        dnarr: [
            {
                name: '微信收款',
                img: require('../../../assets/images/aiplat.com/donate_WX.png'),
            },
            {
                name: '支付宝收款',
                img: require('../../../assets/images/aiplat.com/donate_ZFB.png'),
            },
        ],
    };

    get dnid() {
        return this.$store.getters.getDnid;
    }

    private tsDnid(k: number) {
        this.$store.dispatch('setDnid', k);
    }

    private mounted(): void {
        this.title = this.$route.meta.title;
    }

    private activated(): void {
        console.log('this.$store.getters.getDnid === ', this.$store.getters.getDnid);
    }

}
</script>