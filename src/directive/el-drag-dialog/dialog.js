export default {
  bind(el, binding, vnode, oldVnode) {
    const dialogHeaderEl = el.querySelector('.el-dialog__header')
    const dragDom = el.querySelector('.el-dialog')
    dialogHeaderEl.style.cursor = 'move'
    // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null)
    // const fixedX =
    // const fixedY =
    dialogHeaderEl.onmousedown = (e) => {
      // 判断当前是否为全屏状态
      const path = event.path || (event.composedPath && event.composedPath())
      const isFull = path.find(s => {
        if (s.className === undefined) {
          return false
        } else {
          return s.className.indexOf('is-fullscreen') > -1
        }
      })
      if (isFull !== undefined) {
        return
      }
      const isMinix = path.find(s => {
        if (s.className === undefined) {
          return false
        } else {
          return s.className.indexOf('isminimize') > -1
        }
      })
      if (isMinix !== undefined) {
        return
      }
      // 鼠标按下，计算当前元素距离可视区的距离
      const disX = e.clientX - dialogHeaderEl.offsetLeft
      const disY = e.clientY - dialogHeaderEl.offsetTop

      // 获取到的值带px 正则匹配替换
      let styL, styT

      // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100)
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100)
      } else {
        styL = +sty.left.replace('px', '')
        styT = +sty.top.replace('px', '')
      }

      document.onmousemove = function(e) {
        // 通过事件委托，计算移动的距离
        const l = e.clientX - disX
        const t = e.clientY - disY
        // 移动当前元素
        dragDom.style.left = `${l + styL}px`
        dragDom.style.top = `${t + styT}px`
        // const dom = e.path.find(s => s.querySelector('.el-dialog')).children[0]
        //
        // if (dom.offsetTop < 0) {
        //   dragDom.style.top = `0px`
        // }
        // if (dom.offsetLeft < 0) {
        //   dragDom.style.left = `0px`
        // }

      // 将此时的位置传出去
      // binding.value({x:e.pageX,y:e.pageY})
      }

      document.onmouseup = function(e) {
        const dragDom = el.querySelector('.el-dialog')
        const offsetLeft = dragDom.offsetLeft
        const offsetTop = dragDom.offsetTop
        const left = Number(dragDom.style.left.replace('px', ''))
        const top = Number(dragDom.style.top.replace('px', ''))
        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight - 50
        const offsetRight = offsetLeft + dragDom.offsetWidth - windowWidth
        const offsetBottom = offsetTop + dragDom.offsetHeight - windowHeight
        if (offsetLeft < 0) {
          dragDom.style.left = (left - offsetLeft) + 'px'
        }
        if (offsetTop < 0) {
          dragDom.style.top = (top - offsetTop) + 'px'
        }
        if (offsetRight > 0) {
          dragDom.style.left = (left - offsetRight) + 'px'
        }
        if (offsetBottom > 0) {
          dragDom.style.top = (top - offsetBottom) + 'px'
        }
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}
