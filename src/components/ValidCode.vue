<template>
  <div
    class="ValidCode disabled-select"
    :style="`width:${width}; height:${height}`"
    @click="refreshCode"
  >
    <span
      v-for="(item, index) in codeList"
      :key="index"
      :style="getStyle(item)"
    >{{ item.code }}</span>
  </div>
</template>

<script>
export default {
  name: 'ValidCode',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    width: {
      type: String,
      default: '100px'
    },
    height: {
      type: String,
      default: '40px'
    },
    length: {
      type: Number,
      default: 4
    }
  
  },
  data () {
    return {
      codeList: []
    }
  },
  mounted () {
    this.createdCode()
  },
  methods: {
    refreshCode () {
      this.createdCode()
    },
    createdCode () {
      const len = this.length
      const codeList = []
      const chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789'
      const charsLen = chars.length
      // 生成
      for (let i = 0; i < len; i++) {
        const rgb = [Math.round(Math.random() * 220), Math.round(Math.random() * 240), Math.round(Math.random() * 200)]
        codeList.push({
          code: chars.charAt(Math.floor(Math.random() * charsLen)),
          color: `rgb(${rgb})`,
          fontSize: `${10 + (+[Math.floor(Math.random() * 10)] + 6)}px`,
          padding: `${[Math.floor(Math.random() * 10)]}px`,
          transform: `rotate(${Math.floor(Math.random() * 90) - Math.floor(Math.random() * 90)}deg)`
        })
      }
      // 指向
      this.codeList = codeList
      // 将当前数据派发出去  <valid-code :value.sync="identifyCode"></valid-code>
      this.$emit('update:value', codeList.map(item => item.code).join(''))
    },
    getStyle (data) {
      return `color: ${data.color}; font-size: ${data.fontSize}; padding: ${data.padding}; transform: ${data.transform}`
    }
  }
}
</script>

<style scoped lang="scss">
  .ValidCode{
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    -webkit-user-select: none;  /* 禁止 DIV 中的文本被鼠标选中 */
    -moz-user-select: none;     /* 禁止 DIV 中的文本被鼠标选中 */
    -ms-user-select: none;      /* 禁止 DIV 中的文本被鼠标选中 */
    user-select: none;             /* 禁止 DIV 中的文本被鼠标选中 */
    span{
      display: inline-block;
    }
  }
</style>