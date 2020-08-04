<template>
  <div class="header">
    <img class="logo animate__animated animate__fadeInRight" alt="" />

    <div class="tab-view ">
      <!-- <a
        class="tab-item"
        :class="{ active: activeIndex == 0 }"
        @click="tabClick(0)"
        >首 页<span class="divider"></span
      ></a> -->

      <el-input
        v-model="inputData"
        placeholder="Please input"
        style="width:400px;max-width:100%;"
      />
      <el-button
        v-clipboard:copy="inputData"
        v-clipboard:success="clipboardSuccess"
        type="primary"
        icon="el-icon-document"
      >
        copy
      </el-button>
      <el-button v-waves type="primary">主要按钮</el-button>
      <el-switch v-model="switchv"> </el-switch>
    </div>

    <div
      role="switch"
      class="switch"
      :class="theme === true ? 'is-checked' : ''"
    >
      <input type="checkbox" class="switch-input" />
      <span class="switch-core" @click="changeTheme"></span>
    </div>

    <!-- <div class="btn-view">
      <el-button class="btn" type="text" @click="login">{{
        token ? userInfo.username : "登录"
      }}</el-button>
      <el-button class="btn" v-if="!token" type="text" @click="register"
        >注册</el-button
      >
      <el-button class="btn" v-if="token" type="text" @click="logout"
        >退出</el-button
      >
      <el-button class="btn" v-if="token" type="text" @click="cancellation"
        >注销</el-button
      >

    </div> -->
    <CommonDialog
      v-if="showLogOutDialog"
      @close="showLogOutDialog = false"
      @confirm="doLogout"
    >
      <p>确定退出登录？</p>
    </CommonDialog>

    <CommonDialog
      v-if="showCancelDialog"
      @close="showCancelDialog = false"
      @confirm="doCancel"
    >
      <p>确定注销当前账户？</p>
    </CommonDialog>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { initTheme } from "@utils/theme";
import waves from "@/directive/waves"; // waves directive
import clipboard from "@/directive/clipboard/index.js"; // use clipboard by v-directive
export default {
  components: {
    CommonDialog: () => import("@components/CommonDialog")
  },
  directives: { waves, clipboard },
  data() {
    return {
      activeIndex: 0,
      showLogOutDialog: false,
      showCancelDialog: false,
      theme: true, // false深色主题
      switchv: false,
      inputData: "https://github.com/PanJiaChen/vue-element-admin"
    };
  },
  computed: {
    ...mapGetters({
      userInfo: "userInfo",
      token: "token"
    })
  },
  watch: {
    "$route.path": {
      immediate: true,
      handler(to, from) {
        if (to.indexOf("/about/") !== -1) {
          this.activeIndex = 0;
        }
      }
    }
  },

  created() {
    this.activeIndex = 0;
    if (sessionStorage.getItem("active-tab")) {
      this.activeIndex = sessionStorage.getItem("active-tab");
    }
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("active-tab", this.activeIndex);
    });
  },
  mounted() {
    this.$bus.on("header-active-index", this.tabClick);
  },
  beforeDestroy() {
    this.$bus.off("header-active-index", this.tabClick);
  },
  methods: {
    changeTheme() {
      this.theme = !this.theme;
      initTheme(this.theme);
    },
    clipboardSuccess() {
      this.$message({
        message: "Copy successfully",
        type: "success",
        duration: 1500
      });
    },
    tabClick(index, data) {
      this.activeIndex = index;
      switch (index) {
        case 0:
          this.$router.push({ path: "/" });
          break;

        default:
          break;
      }
    },
    login() {
      if (this.token) {
        this.activeIndex = 0;
        // this.$router.push("/personal/user");
        return;
      }
      this.$router.push({ path: "/login" });
    },
    register() {
      this.$router.push({ path: "/register" });
    },
    logout() {
      this.showLogOutDialog = true;
    },
    doLogout() {
      this.$store
        .dispatch("user/LogOut")
        .then(res => {
          if (res) {
            this.showLogOutDialog = false;
            this.activeIndex = 0;
            this.$router.push("/");
            return;
          }
          this.$message.error("退出失败");
        })
        .catch(err => {
          this.showLogOutDialog = false;
        });
    },
    cancellation() {
      this.showCancelDialog = true;
    },
    doCancel() {
      let params = { userId: this.userInfo.userId, isLogout: 1 };
      let json = JSON.stringify(params);
      this.$api
        .userUpdate({ json })
        .then(res => {
          if (res.status === "SUCCESS") {
            this.$message.success(res.message);
            this.$store.dispatch("user/userState");
            return;
          }
          this.$message.error(res.message);
        })
        .catch(err => {});
    }
  }
};
</script>

<style lang="scss">
.el-dropdown-menu.header-drop-menu[x-placement^="bottom"] {
  background: rgba(0, 32, 75, 0.6);
  font-size: 16px;
  padding: 0;
  border: none;
  .el-dropdown-menu__item {
    color: #fff;
    line-height: 50px;
    padding: 0 25px;
    &:not(.is-disabled):hover,
    .el-dropdown-menu__item:focus {
      color: rgb(4, 223, 255);
      background: rgba(0, 32, 75, 0.8);
    }
  }
  .popper__arrow {
    border-bottom-color: transparent;
    &::after {
      border-bottom-color: rgba(0, 32, 75, 0.6);
    }
  }
}
</style>
<style lang="scss" scoped>
$red: white;
@mixin transition($in) {
  transition: $in;
  -webkit-transition: $in;
  -moz-transition: $in;
  -o-transition: $in;
  -ms-transition: $in;
}
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 30px;
  height: 70px;
  min-height: 70px;
  background-color: var(--bg);
  color: var(--text-2);
  .logo {
    position: absolute;
    left: 30px;
    width: 240px;
  }
  // Button wrap
  .tab-view {
    align-items: center;
    display: flex;
    justify-content: space-between;
    text-align: center;
    width: 700px;
    .tab-item {
      color: #fff;
      font-size: 18px;
      font-weight: 400;
      line-height: 45px;
      max-width: 160px;
      text-decoration: none;
      display: block;
      width: 100%;
      cursor: pointer;
      position: relative;
      @include transition(all 0.5s ease);
      .divider {
        position: absolute;
        right: 0;
        top: 15px;
        width: 1px;
        height: 20px;
        background: #5386ba;
      }

      // &:before {
      //   width: 0;
      //   height: 2px;
      //   content: " ";
      //   background-color: $red;
      //   position: absolute;
      //   top: 0;
      //   left: 50%;
      //   @include transition(all 0.3s ease);
      // }

      &:after {
        // @extend .tab-item:before;
        width: 0;
        height: 2px;
        content: " ";
        background-color: $red;
        position: absolute;
        left: 50%;
        top: 100%;
        @include transition(all 0.3s ease);
      }
      &.active {
        color: rgb(4, 223, 255);
      }
      &:hover {
        color: rgb(4, 223, 255);
        &:before {
          width: 70%;
          left: 15%;
          right: 15%;
        }
        &:after {
          width: 70%;
          left: 15%;
          right: 15%;
        }
      }
    }
  }

  .btn-view {
    position: absolute;
    right: 0px;
    display: flex;
    font-size: 12px;
    .btn {
      margin: 0 15px;
      position: relative;
      &:not(:last-child)::after {
        content: "/";
        position: absolute;
        right: -15px;
        top: 10px;
      }
    }
    ::v-deep.el-button--text {
      color: #ffffff;
      font-size: 12px;
    }
  }

  .switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .switch {
    margin-right: 20px;
    position: fixed;
    right: 0;
    &-input {
      position: absolute;
      width: 0;
      height: 0;
      opacity: 0;
      margin: 0;
    }
    &-core {
      margin: 0;
      display: inline-block;
      position: relative;
      width: 40px;
      height: 20px;
      border: 1px solid #dcdfe6;
      outline: none;
      border-radius: 10px;
      box-sizing: border-box;
      background: #dcdfe6;
      cursor: pointer;
      transition: border-color 0.3s, background-color 0.3s;
      vertical-align: middle;
      &:after {
        content: "";
        position: absolute;
        top: 1px;
        left: 1px;
        border-radius: 100%;
        transition: all 0.3s;
        width: 16px;
        height: 16px;
        background-color: #fff;
      }
    }
  }
  .switch.is-checked .switch-core:after {
    left: 100%;
    margin-left: -17px;
  }
  .switch .switch-core {
    width: 40px;
    border-color: #ffcd32;
    background-color: #ffcd32;
  }
  .switch.is-checked .switch-core {
    width: 40px;
    border-color: #dcdfe6;
    background-color: #dcdfe6;
  }
}
</style>
