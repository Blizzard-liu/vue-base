<template>
  <div class="login">
   
    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Footer: () => import("@components/Footer")
  },
  data() {
    return {
      
    };
  },
  mounted() {
   
  },
  methods: {
  
  }
};
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  position: relative;
  overflow: auto;
  
}
</style>
