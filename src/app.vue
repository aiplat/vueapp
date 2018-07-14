<template>
  <div class="womendi@qq.com" id="appDIV">
    <div class="cm_dn" id="cm_author" style="display:none">2</div>
    <keep-alive><router-view name="default" class=""></router-view></keep-alive>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <router-view name="tsPage" class="cm_page"></router-view>
    </transition>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
        <keep-alive><router-view name="tsKeep" class="cm_page"></router-view></keep-alive>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'appDIV',
  data() {
    return {
      enterAnimate: '',
      leaveAnimate: ''
    };
  },
  methods: {},
  components: {},
  watch: {
    $route(to, from) {
      const toDepth = to.path.split('/').length;
      const fromDepth = from.path.split('/').length;
      this.enterAnimate = '';
      this.leaveAnimate = '';
      if (toDepth === fromDepth && toDepth == 2) {
        return;
      }
      this.enterAnimate =
        toDepth >= fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft';
      this.leaveAnimate = 'animated fadeOutRight';
    }
  }
};
</script>
<style>
@import "assets/css/lib/cmreset.css";
@import "assets/css/lib/cmstyle.css";
@import "assets/css/lib/aiplat.css";
</style>