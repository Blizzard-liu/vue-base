/**
 * 存放一些全局方法，可直接调用
 */
import { Notification } from 'element-ui';
import {EventEmitter} from 'events';
import api from "@/api";
import filters from '@/utils/filters' // 全局过滤器
import '@utils/directives.js' //防多次点击，重复提交
import '@utils/permission'
import ElementUI from 'element-ui'
import '@assets/scss/elvariables.scss'
// import '@assets/font/iconfont.css'
import 'animate.css'

const common = {
  install: function (Vue, options) {
    
    Vue.use(ElementUI, {
      size: 'medium' // set element-ui default size
    });
    // 注册过滤器
    for (let key in filters) {
      Vue.filter(key, filters[key])
    }
    //
    Vue.prototype.$api = api;
    //
    Vue.prototype.$bus = new EventEmitter();

    //https://element.eleme.cn/#/zh-CN/component/notification
    Vue.prototype.$tip = function (option) {
      Notification({customClass:'custom-tip-box',title:'消息',offset:60,...option});
    }

    // 深copy
    Vue.prototype.$cloneDeep = function (Obj) {
      var buf
      if (Obj instanceof Array) {
        buf = []
        var i = Obj.length
        while (i--) {
          buf[i] = this.$cloneDeep(Obj[i])
        }
        return buf
      } else if (Obj instanceof Object) {
        buf = {}
        for (var k in Obj) {
          if (Obj.hasOwnProperty(k)) {
            buf[k] = this.$cloneDeep(Obj[k])
          }
        }
        return buf
      } else {
        return Obj
      }
    }
   
  }
}

export default common
