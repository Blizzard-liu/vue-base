const path = require('path')
const resolve = dir => path.join(__dirname, dir);
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const webpack = require("webpack");


// cdn预加载使用
const externals = {
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'vuex': 'Vuex',
    'axios': 'axios',
    'element-ui': 'ELEMENT',
    'js-cookie': 'Cookies',
    'nprogress': 'NProgress'
  }
  
  const cdn = {
    // 开发环境
    dev: {
      css: [
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css",
        'https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css'
      ],
      js: []
    },
    // 生产环境
    build: {
      css: [
        'https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/theme-chalk/index.css',
        'https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.css'
      ],
      js: [
        "https://cdn.bootcdn.net/ajax/libs/vue/2.6.11/vue.min.js", 
        "https://cdn.bootcdn.net/ajax/libs/vue-router/3.4.0/vue-router.min.js",
        "https://cdn.bootcdn.net/ajax/libs/vuex/3.5.1/vuex.min.js",
        "https://cdn.bootcdn.net/ajax/libs/axios/0.19.2/axios.min.js",
        "https://cdn.bootcdn.net/ajax/libs/element-ui/2.13.2/index.js",
        'https://cdn.bootcdn.net/ajax/libs/js-cookie/2.2.1/js.cookie.min.js',
        'https://cdn.bootcdn.net/ajax/libs/nprogress/0.2.0/nprogress.min.js'
  
        
      ]
    }
  }
  


// 是否使用gzip
const productionGzip = true;
// 需要gzip压缩的文件后缀
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;

module.exports = {
  devServer: {
    host:'0.0.0.0',
    port:8000,
    open: true,
    proxy: {
    '/api': {
      target: 'http://api',
      changeOrigin: true,
      // ws: true,        //如果要代理 websockets，配置这个参数
      // secure: false,  // 如果是https接口，需要配置这个参数
      pathRewrite: {
          '^/api': ''
          }
      },
      '/lottie': {
        target: 'https://assets6.lottiefiles.com',
        changeOrigin: true,
        pathRewrite: {
          '^/lottie': ''
          }
      }
    },
  },
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  runtimeCompiler: true, // 是否使用包含运行时编译器的 Vue 构建版本
  productionSourceMap: process.env.NODE_ENV!== 'production', // 生产环境的 source map
  //用于放置生成的静态资源 (js、css、img、fonts) 的；（项目打包之后，静态资源会放在这个文件夹下）
  assetsDir: "static",
  outputDir:'dist',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/scss/common.scss";`
      }
    }
  },

  chainWebpack: config => {
  
   // 添加别名
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", resolve("src"))
      .set("@assets", resolve("src/assets"))
      .set("@js", resolve("src/assets/js"))
      .set("@scss", resolve("src/assets/scss"))
      .set("@imgs", resolve("src/assets/imgs"))
      .set("@components", resolve("src/components"))
      .set("@views", resolve("src/views"))
      .set("@router", resolve("src/router"))
      .set("@store", resolve("src/store"))
      .set("@api", resolve("src/api"))
      .set("@utils", resolve("src/utils"));
   /**
    * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
    */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })

    //压缩图片
    // 需要 npm i -D image-webpack-loader
    // config.module
    // .rule("images")
    // .use("image-webpack-loader")
    // .loader("image-webpack-loader")
    // .options({
    //   mozjpeg: { progressive: true, quality: 65 },
    //   optipng: { enabled: false },
    //   pngquant: { quality: [0.65, 0.9], speed: 4 },
    //   gifsicle: { interlaced: false }
    //   // webp: { quality: 75 }
    // });
  

    return config;
  },
// 修改webpack config, 使其不打包externals下的资源
  configureWebpack: config => {
    
    const plugins = [];
    plugins.push( 
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    );

    if (process.env.NODE_ENV === 'production') {
      // 生产环境npm包转CDN
      config.externals = externals;
      productionGzip && plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240,
          minRatio: 0.8
        })
      );
    }
    config.plugins = [...config.plugins, ...plugins];

    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭host check，方便使用ngrok之类的内网转发工具
       */
      config.devServer = {
        disableHostCheck: true
      }
    }

  }
}
