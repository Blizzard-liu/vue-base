<template>
  <div id="lottie" class="lottie"></div>
</template>

<script>
import lottie from "lottie-web";
export default {
  name: "lottie",
  data() {
    return {
      datajson: ""
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    init() {
      //lottie.play()  lottie.stop()
      const icon = document.getElementById("lottie");
      lottie.loadAnimation({
        container: icon, // 包含动画的dom元素
        renderer: "svg", // 渲染出来的是什么格式
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: this.datajson // 动画json的路径
      });
    },
    getData() {
      this.$api
        .lottie()
        .then(res => {
          this.datajson = res;
          this.init();
        })
        .catch(err => {});
    }
  }
};
</script>

<style>
.lottie {
}
</style>
