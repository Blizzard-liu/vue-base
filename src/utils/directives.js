import Vue from 'vue'
import store from '@/store'
import {
  Message
} from 'element-ui'


// Observe the elements which have animations to fire.
//https://juejin.im/post/6844903874302574599
//https://www.shuzhiduo.com/A/MyJxp47XJn/
const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    // isIntersecting是一个Boolean值，判断目标元素当前是否可见
      if (entry.isIntersecting) {
          entry.target.classList.add("enter");
          observer.unobserve(item.target)
      }
  });
}, { rootMargin: "0px 0px -140px" });

//自定义可视区域执行动画 v-enter
Vue.directive('enter', { bind: function(el, binding, vnode) { 
  el.classList.add('before-enter');
  observer.observe(el);
 }})


// 自定义埋点指令
Vue.directive('track', {
  //钩子函数，只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
  /*
   * el:指令所绑定的元素，可以用来直接操作 DOM
   * binding：一个对象，包含以下 property:
   *   name：指令名，不包括 v- 前缀。
   *   value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
   *   expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
   *   arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
   *   modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
   * vnode：Vue 编译生成的虚拟节点
   * 
   * 
<div class="app-online-list" v-track="{triggerType:'click',currentUrl: $route.path,behavior:'点击xxx按钮',businessCode: 19,actionType:'xxx-click'}">
</div>
   */
  bind: (el, binding, vnode) => {
    if (binding.value) {
      //这里参数是根据自己业务可以自己定义
      let params = {
        currentUrl:binding.value.currentUrl,
        actionType:binding.value.actionType,
        frontTriggerType:binding.value.triggerType,
        businessCode:binding.value.businessCode,
        behavior:binding.value.behavior,
        service:'xxx',
      }
      //如果是浏览类型，直接保存
      if (binding.value.triggerType == 'browse'){
        //调用后台接口保存数据
        api.eventTrack.saveEventTrack(params);
      } else if (binding.value.triggerType == 'click'){
        //如果是click类型，监听click事件
        el.addEventListener('click', (event) => {
          //调用后台接口保存数据
          api.eventTrack.saveEventTrack(params);
        }, false)
      }
 
    }
  }
})


/**
 * // 指定延迟1000ms
<el-button  size="small" type="primary" @click="handleSave()" v-preventReClick="1000">保 存</el-button>

// 默认延迟时间3000
<el-button  size="small" type="primary" @click="handleSave()" v-preventReClick>保 存</el-button>

 */
 Vue.directive('preventReClick', {
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





