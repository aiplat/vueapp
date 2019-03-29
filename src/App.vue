<template>
    <div class="womendi@qq.com" id="app">
        <div class="cm_dn" id="cm_author" style="display:none">2</div>
        <keep-alive><router-view name="default" class=""></router-view></keep-alive>
    </div>
</template>
<script lang="ts">
    import {Vue} from 'vue-property-decorator';

    export default class App extends Vue {
        private enterAnimate: string = '';
        private leaveAnimate: string = '';
    }

</script>
<style>
    @import "assets/css/lib/cmreset.css";
    @import "assets/css/lib/cmstyle.css";
    @import "assets/css/lib/aiplat.css";
</style>
