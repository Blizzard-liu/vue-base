import router from "@/router";
import store from "@/store";
import NProgress from "nprogress"; // 进度条
// import 'nprogress/nprogress.css' // 进度条样式
import { Message } from "element-ui";

//https://www.jianshu.com/p/346c05d4d9d8
NProgress.configure({ showSpinner: false }); //进度环显示隐藏

const defaultTitle = '一拳超人';
const whiteList = ["/login", "/"]; // 不重定向白名单
router.beforeEach((to, from, next) => {
  NProgress.start();
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  if (to.matched.some(record => record.meta.requireAuth)) {
    // 判断该路由是否需要登录权限
    if (store.getters.token) {
      next();
    } else {
      store.dispatch('user/userState').then(res => {
        if (store.getters.token) {
          next();
        }else {
          next({
            path: "/login",
            query: { redirect: to.fullPath } // 将要跳转路由的path作为参数，传递到登录页面
          });
        }
      })
      .catch(err => {
        
      });
   
    }
  } else {
    next();
  }
});

router.afterEach(() => {
  NProgress.done(); // 结束Progress
});
