module.exports = {
  root: true,
  env: {
    node: true,
    browser: true //预定义的全局变量，这里是浏览器环境
  },
  parserOptions: {
    parser: "babel-eslint" //解析器，这里我们使用babel-eslint
  },
  extends: [
    "plugin:vue/essential"
    // '@vue/standard'
  ],
  rules: {
    //"off"或者0，不启用这个规则。
    // "warn"或者1，出现问题会有警告。
    // "error"或者2，出现问题会报错
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "space-before-function-paren": 0,
    "vue/no-use-v-if-with-v-for": [
      "error",
      {
        allowUsingIterationVar: true
      }
    ],
    "no-dupe-args": 2, //函数定义的时候不允许出现重复的参数
    "no-dupe-keys": 2, //对象中不允许出现重复的键
    "no-duplicate-case": 2, //switch语句中不允许出现重复的case标签
    "no-empty": 2, //不允许出现空的代码块
    "no-var": 0 //使用let和const代替var
  }
 
};
