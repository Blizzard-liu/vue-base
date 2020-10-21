<template>
  <div>
   <el-dialog
    v-dialogDrag
    ref="xhzqDialog"
    class="xhzqDialog"
    :title="title"
    :fullscreen="isfullscreen"
    :visible.sync="dialogVisible"
    :append-to-body="true"
    :close-on-click-modal="false"
    :show-close="false"
    :width="width"
    :class="isminimize? 'isminimize': ''"
    center
  >
    <div v-show="!isminimize" slot="title" class="medium">
      <div></div>
      <div class="centers"><span>{{title}}</span></div>
      <div class="icons">
        <i class="el-icon-minus" style="font-size: 24px" @click="minimize"></i>
        <i :class="isfullscreen? 'el-icon-aim' : 'el-icon-full-screen' " style="font-size: 24px" @click="IsFullscreen"></i>
        <i class="el-icon-close" style="font-size: 24px" @click="closeDialog"></i>
      </div>
    </div>
    <div v-show="isminimize" slot="title"  class="horn">
      <div class="lefts"><span>{{title}}</span></div>
      <div class="centers"><i class="el-icon-full-screen" style="font-size: 24px" @click="minimize"></i></div>
      <div class="rights"><i class="el-icon-close" style="font-size: 24px" @click="closeDialog"></i></div>
    </div>
    <div v-show="!isminimize" class="dialogBody">
      <slot></slot>
    </div>
    <div v-show="!isminimize" v-if="isFooter" class="dialogFooter">
      <slot name="footer" solt="footer"></slot>
    </div>
  </el-dialog>
  </div>
</template>

<script>
import dialogDrag from "@/directive/el-drag-dialog/dialog.js"; // use clipboard by v-directive
export default {
  components: {},
  directives: { dialogDrag },
  props: {
    width: {
        type: String,
        default: '50%'
      },
      title: {
        type: String,
        default: ''
      },
      isFooter: { // 是否显示脚部
        type: Boolean,
        default: true
      }
  },
  data() {
    return {
       isfullscreen: false, // 全屏
        isminimize: false, // 最小化
        dialogVisible: true // 隐藏弹窗
    };
  },

  computed: {},
  created() {},
  mounted() {},
  methods: {
      // 最小化
      minimize() {
        this.isminimize = !this.isminimize
        if (this.isfullscreen) this.isfullscreen = !this.isfullscreen
      },
      // 关闭弹窗
      closeDialog() {
        // const el = this.$refs.xhzqDialog.$el.querySelector('.el-dialog')
        // el.style.left = 0
        // el.style.top = 0
        this.dialogVisible = false
      },
      // 打开弹窗
      openDialog() {
        this.dialogVisible = true
      },
      // 全屏
      IsFullscreen() {
        this.isfullscreen = !this.isfullscreen
        if (this.isfullscreen) this.$emit('isfullscreen')
      },
    onClose() {
      this.$emit("close");
    },
    submitForm() {
      this.dialogVisible = false;
      this.$emit("confirm");
    }
  }
};
</script>

<style lang="scss" scoped>
.el-dialog{
  margin-top: 10vh!important;
}
  .no_select{
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Chrome/Safari/Opera */
    -khtml-user-select: none; /* Konqueror */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently */
  }
  .isminimize{
    left: 20px;
    bottom: 20px;
    top: auto;
    right: auto;
    overflow:hidden;
 
    .el-dialog {
      margin: 0 !important;
      width: 240px !important;
      height: 40px;
      top: 0 !important;
      left: 0 !important;
    }
    .el-dialog__header{
      cursor: auto!important;
 
      .el-dialog__headerbtn {
        display: none;
      }
    }
    .dialogFooter{
      position: absolute;
      bottom: 0;
 
    }
  }
  .xhzqDialog {
    .is-fullscreen {
      width: 100% !important;
      left: 0 !important;
      top: 0 !important;
      margin-top: 0 !important;
      overflow:hidden;
      position: relative;
      .el-dialog__header{
      cursor: auto!important;
      }
      .el-dialog__body{
        height: 100%;
        .dialogBody{
          height:100%!important;
          max-height:none!important;
          padding-bottom:120px!important;
        }
      }
      .dialogFooter{
        position: absolute;
        bottom: 0;
        width: 100%;
        background: #fff;
      }
    }
    .el-dialog{
      .el-dialog__header{
        width: 100%;
        padding: 5px 20px 5px !important;
        display: flex;
        border-bottom: 1px solid #ccc;
        @extend .no_select;
        cursor: auto;
        .medium{
          width: 100%;
          height: 100%;
          display: flex;
          div{
            flex:1;
          }
          .centers{
            span{
              text-align: center;
              font-size:16px;
              color:#606266;
            }
          }
          .icons{
            display: flex;
            justify-content: flex-end;
            i{
              color:#5f6368;
              font-size: 18px!important;
              display: block;
              padding:0 7px;
            }
            i:hover{
              background: #dcdfe6;
              cursor: pointer;
            }
            .el-icon-close:hover{
              background: #f00;
              color:#fff;
            }
          }
        }
        .horn{
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: space-between;
          div{
            i{
              color:#5f6368;
              font-size:20px!important;
            }
          }
          .lefts{
            flex:4;
            margin-top: 3px;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            span{
              font-size: 16px;
              color:#606266;
            }
          }
          .centers{
            flex:1;
          }
          .rights{
            flex:1;
          }
          i:hover{
            cursor: pointer;
            color:#000;
          }
        }
        .el-dialog__headerbtn {
          top: 0;
          font-size: 24px;
        }
      }
      .el-dialog__body{
        padding: 1px !important;
        .dialogBody{
          max-height: calc(80vh - 50px);
          box-shadow: inset 0px -2px 10px 1px #b0b3b2;
          overflow: auto;
          padding: 20px 25px 20px;
          background: #f7f9fc;
          &::-webkit-scrollbar {
            width: 4px;
            height: 8px;
          }
          &::-webkit-scrollbar-thumb {
            background: transparent;
            border-radius: 4px;
          }
          &:hover::-webkit-scrollbar-thumb {
            background: hsla(0,0%,53%,.4)
          }
          &:hover::-webkit-scrollbar-track {
            background: hsla(0,0%,53%,.1)
          }
        }
        .dialogFooter{
          padding: 10px 15px;
          border-top: 1px solid #ccc;
          text-align: right;
          .el-button{
            padding:7px 15px;
          }
        }
      }
    }
    .xhzqDialog{
  // display: flex;
  // justify-content: center;
    .el-select{
      width: 100%;
    }
    .el-date-editor{
      width: 100%;
    }
  }
  }
</style>
