<template>
  <div>
    <el-dialog
    v-el-drag-dialog
    :modal="false"
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      :width="width"
      :title="title"
      @close="onClose"
     
    >
    <div class="slot-view">
      <slot />
    </div>
      
      <span slot="footer" class="dialog-footer">
        <el-button size="medium" @click="dialogVisible = false">取 消</el-button>
        <el-button size="medium" type="primary" @click="submitForm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import elDragDialog from "@/directive/el-drag-dialog/index.js"; // use clipboard by v-directive
export default {
  components: {},
  directives: { elDragDialog },
  props: {
    width: {
      default: "400px",
      type: String
    },
    title: {
      default: "提示",
      type: String
    }
  },
  data() {
    return {
      dialogVisible: true
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    onClose() {
      this.$emit("close");
    },
    submitForm() {
      // this.dialogVisible = false;
      this.$emit("confirm");
    }
  }
};
</script>

<style lang="scss" scoped>
.slot-view{
  font-size: 16px;
}
</style>
