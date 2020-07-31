<template>
  <div class="title-bar">
    <span class="animate__animated animate__fadeInRight title">{{
      title
    }}</span>
    <el-input
    v-if="showSearch"
    class="search-view"
      placeholder="请输入内容"
      prefix-icon="el-icon-search"
      @input="search"
      clearable
      v-model.trim="keyword"
    >
    </el-input>
  </div>
</template>

<script>
import { debounce } from "@utils";
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    showSearch: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return { keyword: "" };
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    search() {
      debounce(() => {
        this.$bus.emit('search-change',this.keyword);
      }, 300);
    }
  }
};
</script>

<style lang="scss" scoped>
.title-bar {
  height: 60px;
  position: relative;
  border-bottom: solid 1px rgba(217, 217, 217, 1);

  .title {
    font-size: 18px;
    font-weight: bold;
    color: rgba(23, 109, 199, 1);
    height: 60px;
    line-height: 60px;
    position: relative;
    display: inline-block;
    &::after {
      content: "";
      position: absolute;
      height: 100%;
      width: 100%;
      left: 0;
      bottom: 0;
      border-bottom: solid 2px rgba(23, 109, 199, 1);
    }
  }
  .search-view {
    position: absolute;
    width: 220px;
    right: 0;
    top:12px;
    ::v-deep.el-input__inner {
      border-radius: 20px;
    }
    
  }
}
</style>
