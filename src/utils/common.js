/**
 * 存放一些全局方法，可直接调用
 */

const common = {
  install: function (Vue, options) {
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
