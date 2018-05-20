<template>
  <div class="cm_main2">
    <div class="cm_main cm_pr">
          <div class="cm_pc_12">
                <m-title :title="title"></m-title>
                <div class="cm_pc_12 cm_mtb6 cm_Wb2t">
                    <div class="cm_pc_12 cm_prl05 cm_tc cm_hl3 cm_mtb1">{{message}}</div>
                </div>
          </div>
          <copyright2 isb0="1"></copyright2>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import mTitle from "components/aiplat/header2";
import copyright2 from "components/copyright";

export default {
  data() {
    return {
      title: "ai智能空间-404",
      message: "404 Not Found！"
    };
  },
  mounted() {},
  activated: function() {},
  components: { mTitle,copyright2}
};
</script>