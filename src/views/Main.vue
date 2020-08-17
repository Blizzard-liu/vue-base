<template>
  <main class="main" ref="body">
    <Header />
    <main class="content">
      <back-top>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
         <Footer v-if="showFooter" />
      </back-top>
    </main>

   
  </main>
</template>

<script>
export default {
  components: {
    Header: () => import("@components/Header"),
    Footer: () => import("@components/Footer")
  },
  data() {
    return {
      showFooter: true,
      pathArray: ["/about/us"]
    };
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(to, from) {
        this.$refs.body && (this.$refs.body.scrollTop = 0); //路由变化时回到页面顶部
        if (this.pathArray.indexOf(to) !== -1) {
          this.showFooter = false;
        } else {
          this.showFooter = true;
        }
      }
    }
  }
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
    position: relative;
    flex: 1;
  }
}
</style>
