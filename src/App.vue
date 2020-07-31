<template>
  <div class="app" id="app">
    <router-view/>
    <request-loding></request-loding>
  </div>
</template>

<script>
import RequestLoding from "@/components/RequestLoading.vue";

export default {
  components: {
    RequestLoding
  },
  created() {
    // //在页面加载时读取sessionStorage里的状态信息
    // if (sessionStorage.getItem("store")) {
    //   this.$store.replaceState(
    //     Object.assign(
    //       {},
    //       this.$store.state,
    //       JSON.parse(sessionStorage.getItem("store"))
    //     )
    //   );
    // }

    // //在页面刷新时将vuex里的信息保存到sessionStorage里
    // window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    // });

    this.$store.dispatch('user/userState');
  }
};
</script>

<style lang="scss" scoped>
.app {
 
}
</style>
