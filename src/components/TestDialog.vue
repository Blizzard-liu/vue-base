<template>
  <div>
    <Modal
      v-model="dialogVisible"
      title="Common Modal dialog box title"
      @on-ok="ok"
      @on-visible-change="change"
      @on-cancel="cancel"
    >
      <p>Content of dialog</p>
      <p>Content of dialog</p>
      <p>Content of dialog</p>
    </Modal>
  </div>
</template>

<script>
export default {
  components: {},

  props: {
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
    change(val) {
      debugger;
      if (!val) {
        this.$emit("close");
      }
    },

    ok() {
      this.$Message.info("Clicked ok");
      this.dialogVisible = false;
    },
    cancel() {
      this.$Message.info("Clicked cancel");
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="scss" scoped></style>
