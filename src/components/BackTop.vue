<template>
  <div class="page-component__scroll">
      <el-backtop target=".page-component__scroll"></el-backtop>
      <slot></slot>
  </div>
</template>

<script>
export default {
    name:"BackTop"

}
</script>

<style>
.page-component__scroll {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow-x: hidden;
}
</style>