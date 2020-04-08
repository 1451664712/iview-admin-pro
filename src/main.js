import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import router from './routers'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import './theme/index.less' //自定义主题
import './assets/css/normalize.scss' // 初始化样式
import './assets/iconfont/iconfont.css'
import store from './store/index'
import {getToken, removeToken} from "./utils/auth";

import $ from "jquery";
import jsPlumb from 'jsplumb'
Vue.prototype.$jsPlumb = jsPlumb.jsPlumb




Vue.config.productionTip = false

Vue.directive('resize', {
  bind(el, binding) {
    let width = '',
      height = '';

    function get() {
      const style = document.defaultView.getComputedStyle(el);
      if (width !== style.width || height !== style.height) {
        binding.value({
          width,
          height
        });
      }
      width = style.width;
      height = style.height;
    }

    el.__vueReize__ = setInterval(get, 300);
  },
  unbind(el) {
    clearInterval(el.__vueReize__);
  },
});

// 阻止按钮重复提交
Vue.directive("button", {
  bind: function (el, binding, vnode) { // 每当指令绑定到元素上的时候，会立即执行这个bind函数，只执行一次
    function clickHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        $(el).attr("disabled", true);
        setTimeout(() => {
          $(el).attr("disabled", false);
        }, 1500)
        return false;
      }
      // 判断指令中是否绑定了函数    // 如果绑定了函数 则调用那个函数，此处binding.value就是handleClose方法
      if (binding.expression) {
        binding.value(e);
      }
    }
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    el.__vueClickOutside__ = clickHandler;
    document.addEventListener('click', clickHandler);
  },
  unbind(el, binding) {   // 解除事件监听
    document.removeEventListener('click', el.__vueClickOutside__);
    delete el.__vueClickOutside__;
  },
})

// 路由判断登录 根据路由配置文件的参数
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) { // 判断该路由是否需要登录权限
    if (getToken()) { // 判断当前的token是否存在 ； 登录存入的token
      if (to.path === '/login') {
        removeToken()
        window.location.reload()
      } else {
        // ViewUI.LoadingBar.start();
        next()
      }
    } else {
      // ViewUI.LoadingBar.start();
      next({
        path: '/',
        query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  } else {
    // ViewUI.LoadingBar.start();
    next()
  }
})

router.afterEach(route => {
  // ViewUI.LoadingBar.finish();
});

Vue.use(VueRouter);
Vue.use(ViewUI);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
