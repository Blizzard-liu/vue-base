import Vue from 'vue'
import store from '@/store'
import {
  Message
} from 'element-ui'


/**
 * // 指定延迟1000ms
<el-button  size="small" type="primary" @click="handleSave()" v-preventReClick="1000">保 存</el-button>

// 默认延迟时间3000
<el-button  size="small" type="primary" @click="handleSave()" v-preventReClick>保 存</el-button>

 */
const preventReClick = Vue.directive('preventReClick', {
  inserted: function(el, binding) {
    el.addEventListener('click', () => {
      if (!el.disabled) {
        el.disabled = true
        setTimeout(() => {
          el.disabled = false
        }, binding.value || 3000) // 传入绑定值就使用，默认3000毫秒内不可重复触发
      }
    })
  }
})

// <el-input v-model.trim="item.additional_fee" v-numberInt:2="item.additional_fee"></el-input>

const numberInt = Vue.directive('numberInt', { bind: function(el, binding, vnode) { 
  const element = el.getElementsByTagName('input')[0] 
  const len = binding.arg  // 初始化设置 
  element.value = Number(element.value ).toFixed(len)  // 失焦时候格式化
  element.addEventListener('blur', function() { 
  if (isNaN(element.value)) {   
    vnode.data.model.callback(0)  
   } else {   
    vnode.data.model.callback(Number(element.value).toFixed(len)) 
   }  
   }) 
 }})

 
 Vue.directive('token', {
  inserted: function(el, binding,vNode) {
    // console.log(vNode);
    if (!store.getters.token && vNode.componentInstance) {
      let v = vNode.componentInstance;
      v.$off('click');
      el.onclick = () => {
        Message.info("请先登录!");
      }
    }
  }
})
function cancelEvent(event){
  if(event && event.preventDefault){
      event.preventDefault();
  }else{
      window.event.returnValue = false;
  }
}

export { preventReClick,numberInt }



