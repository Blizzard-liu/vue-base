<template>
  <div class="main" ref="body">
    <Header />
    <div class="content">
       <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
   
    <Footer v-if="showFooter"/>
  </div>
</template>

<script>


export default {
  components: {
    Header: () => import("@components/Header"),
    Footer: () => import("@components/Footer"),
  },
  data() {
    return {
      showFooter:true,
      pathArray:["/about/us"]
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      handler(to, from) {
        this.$refs.body && (this.$refs.body.scrollTop = 0);//路由变化时回到页面顶部
        if(this.pathArray.indexOf(to) !== -1) {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.main {
  height: 100%;
  overflow: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .content {
    flex: 1;
  }
}
</style>
