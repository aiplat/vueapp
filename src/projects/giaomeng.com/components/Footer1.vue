<template>
  <footer class="cm_pf cm_w100 cm_z99 cm_bf" id="footerMain">
    <ul class="cm_main cm_pr cm_bf cm_tc">
      <li class="cm_pc_12 cm_mob_12 cm_hl2 cm_bb1ce cm_bf">
        {{site.copyright}}
        <a :href="site.url" target="_blank">{{site.name}}</a>
      </li>
      <li class="cm_pc_12 cm_mob_12 cm_hl2 cm_bb1ce cm_bf">
        <a class="cm_csp" :href="beian.url" :title="beian.title" target="_blank">
          <div class="cm_pc_12">{{beian.name}}</div>
        </a>
      </li>
    </ul>
  </footer>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer1 extends Vue {
  private site: object = {
    name: 'giaomeng.com',
    url: 'https://giaomeng.com',
    copyright: '©2016',
  };
  private beian: object = {
    name: '粤ICP备16011379号-3',
    url: 'https://beian.miit.gov.cn',
  };
}
</script>
<style lang="less" scope>
#footerMain {
  bottom: 0;
}
.active {
  color: rgb(253, 20, 20);
  background: rgba(105, 104, 103, 0.14);
}
</style>
