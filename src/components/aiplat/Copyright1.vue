<template>
    <div class="cm_pf cm_pc_12 cm_hl3 cm_tc" :class="{'cm_b3e':isbz!=='1','cm_bl0':isbz==='1'}">
        &copy;2016 <a :href="app.url" target="_blank">{{app.site}}</a>
    </div>
</template>
<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';

    @Component
    export default class Copyright1 extends Vue {
        @Prop() private isbz!: string;
        private app: object = {
            site: 'aiplat.com',
            url: 'https://aiplat.com',
        };
    }

</script>