<template>
  <div class="footer">
    <div class="tab-view">
      <div
        class="tab-item"
        :class="{ active: activeIndex == 0 }"
        @click="tabClick('/about/us')"
      >
        关于我们
      </div>
      <div
        class="tab-item"
        :class="{ active: activeIndex == 1 }"
        @click="tabClick('/about/terms')"
      >
        服务条款
      </div>
      <div
        class="tab-item"
        :class="{ active: activeIndex == 2 }"
        @click="tabClick('/about/copyright')"
      >
        版权声明
      </div>

      <div
        class="tab-item"
        :class="{ active: activeIndex == 3 }"
        @click="tabClick('/about/contact')"
      >
        联系我们
      </div>
    </div>
    <div class="copyright">
      Copyright © 
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: -1
    };
  },
  created() {},
  methods: {
    tabClick(path) {
      // this.$bus.emit("active-tab",index);
      this.$router.push({path});
    }
  }
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 20px;

  .tab-view {
    display: flex;
    font-size: 16px;
    .tab-item {
      display: flex;
      margin: 0 10px;
      position: relative;
      cursor: pointer;
      &.active {
        color: #0d4693;
      }
      &:hover {
        color: #0d4693;
      }
      &:not(:last-child)::after {
        content: "";
        position: absolute;
        right: -10px;
        top:4px;
        width: 1px;
        height: 16px;
        background: #555555;
      }
    }
  }
  .copyright {
    margin-top: 10px;
    font-size: 12px;
  }
}
</style>
