<template>
    <div class="cm_main2">
        <div class="cm_main cm_pr">
            <div class="cm_pc_12">
                <Header2 :title="title"/>
                <div class="cm_pc_12 cm_mtb6 cm_Wb2t">
                    <div class="cm_pc_12 cm_prl05 cm_tc cm_hl3 cm_mtb1">{{message}}</div>
                </div>
            </div>
            <Copyright1 isbz="1"/>
        </div>
    </div>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import Header2 from '@/components/aiplat/Header2.vue';
    import Copyright1 from '@/components/aiplat/Copyright1.vue';

    @Component({
        components: {
            Header2,
            Copyright1,
        },
    })
    export default class NotFound extends Vue {
        private title: string = '404';
        private message: string = '404 Not Found！';

        private mounted(): void {
            this.title = this.$route.meta.title;
        }

    }

</script>