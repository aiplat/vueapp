<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
      <div class="cm_pc_12">
        <Header :title="title" />
        <div class="cm_pc_12 cm_mtb6 cm_Wb2t">
          <div class="cm_pc_12 cm_prl05 cm_tc cm_hl3 cm_mtb1">{{message}}</div>
          <div class="cm_pc_12 cm_prl05 cm_tc cm_hl3 cm_mb1" v-if="nowTime">{{nowTime}}</div>
        </div>
      </div>
      <Copyright isbz="1" />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class NotFound extends Vue {
  private title: string = '';
  private iswx: number = 0;
  private message: string = '404';
  private nowTime: string = '';

  private runTime() {
    const t: any = this;
    return new Promise((resolve) => {
      resolve();
    });
  }

  private created() {
    const t: any = this;
    t.iswx = window.H5.app.iswx;
    t.nowTime = cmapp.nowTime(1, '', 1);
  }

  private mounted() {
    // console.log("mounted");
  }

  private activated() {
    const t: any = this;
    t.title = t.$route.name;
    setInterval(() => {
      t.runTime().then(() => {
        t.nowTime = cmapp.nowTime(1, '', 1);
      });
    }, 1000);
  }
}
</script>