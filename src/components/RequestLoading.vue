<template>
  <transition name="fade-transform" mode="out-in">
    <div class="request-loading-component" v-show="requestLoading > 0" onselectstart="return false;" unselectable="on">
      <img class="loading" src="@imgs/icon/loading.svg" alt="">
    </div>
  </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RequestLoading',
  computed: {
    ...mapGetters([
      'requestLoading'
    ])
  }
}
</script>

<style lang='scss' scoped>
.request-loading-component {
  pointer-events: none;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  //background-color: rgba(48, 65, 86, 0.2);
  background-color: transparent;
  font-size: 150px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  .loading {
    width: 150px;
  }
}
</style>
