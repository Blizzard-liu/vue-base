<template>
  <div>
    <el-dialog
      :visible.sync="dialogVisible"
      :width="width"
      :title="title"
      :fullscreen="fullscreen"
      @close="onClose"
      top="30px"
      append-to-body
    >
      <div class="slot-view" :class="{'full-style': fullscreen}">
         <iframe id="iframe" width="100%" :height="iframeHeight"  frameborder=0  :scrolling='scrolling' :src="url"></iframe>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    width: {
      default: "1000px",
      type: String
    },
    title: {
      default: "",
      type: String
    },
    url: {
      type: String,
      required: true
    },
    fullscreen: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      dialogVisible: true
    };
  },
  computed: {
    iframeHeight() {
      return this.fullscreen ? '100%' : 600;
    },
    scrolling() {
      return 'auto';
      // return this.fullscreen ? 'no' : 'auto';
    }
  },
  created() {
  },
  mounted() {},
  methods: {
    onClose() {
      this.$emit("close");
    }
  }
};
</script>

<style lang="scss" scoped>
::v-deep.el-dialog__wrapper {
  .el-dialog__body {
    padding: 0 !important;
  }
}
.full-style {
  height: 100%;
}
.slot-view {
  // font-size: 16px;
}
</style>
