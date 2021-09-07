<template>
  <div id="lottie" class="lottie"></div>
</template>

<script>
import lottie from "lottie-web";
import datajson from './test.json'
export default {
  name: "lottie",
  props:{
      url:{
          type:String,
          require:true
      }
  },
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
        renderer: "html", // 渲染出来的是什么格式 渲染方式，svg、canvas、html（轻量版仅svg渲染）
        loop: true, // 循环播放
        autoplay: true, // 自动播放
        animationData: datajson // 动画json的路径
      });
    },
    getData() {
      this.$api
        .lottie(this.url)
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
