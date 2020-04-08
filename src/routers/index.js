/**
 * Created by F1231657 on 2018/1/4.
 */
// 1.引入vue和vue-router并赋值给相应的Vue和Router
import Vue from 'vue';
import Router from 'vue-router';

// 2.通过Vue的use方法注入Router
Vue.use(Router)
import Main from '@/components/layout/index'
// 解决重复点击导航路由报错

// 3.创建 router 实例，然后传 `routes` 配置
const router = new Router({
  // 指定路由选中时的样式类名
  linkActiveClass: 'active',
  hashbang: true, // 将路径格式化为#!开头
  history: true, // 启用HTML5 history模式，可以使用pushState和replaceState来管理记录
  /**
   * 4.@desc 路由配置配置具体的路径
   */
  routes: [
    {
      path: '/',
      component: resolve => (require(["@/views/login/login"], resolve))
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录',
      },
      component: resolve => (require(["@/views/login/login"], resolve))
    },
    {
      path: '/_home',
      name: '_home',
      redirect: '/home',
      component: Main,
      meta: {
        keepAlive: true, //是否缓存
        requireAuth: true,
      },
      children: [
        {
          path: '/home',
          name: 'home',
          meta: {
            title: "系统首页",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/home/index"], resolve)),
        }
      ],
    },
    {
      path: '/information',
      name: 'information',
      meta: {
        title: "信息发布",
        keepAlive: true, //是否缓存
        requireAuth: true,
      },
      component: Main,
      children: [
        {
          path: 'banner',
          name: 'banner',
          meta: {
            title: "banner管理",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/information/banner"], resolve)),
        },
        {
          path: 'introduce',
          name: 'introduce',
          meta: {
            title: "平台介绍",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/information/introduce"], resolve)),
        },
        {
          path: 'partner',
          name: 'partner',
          meta: {
            title: "合作伙伴",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/information/partner"], resolve)),
        },
      ]
    },
    {
      path: '/solution',
      name: 'solution',
      meta: {
        title: "解决方案",
        keepAlive: true, //是否缓存
        requireAuth: true,
      },
      component: Main,
      children: [
        {
          path: 'programmelist',
          name: 'programmelist',
          meta: {
            title: "方案列表",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/programme/programme_list"], resolve)),

        },
        {
          path: 'customerlist',
          name: 'customerlist',
          meta: {
            title: "客户案例",
            keepAlive: true, //是否缓存
            requireAuth: true,
          },
          component: resolve => (require(["@/views/programme/customer_list"], resolve)),

        },
      ]
    }
  ]
})
const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
}
/**
 * @desc 全局监听路由变化
 */
// router.beforeEach((to, from, next) => {
//     store.dispatch('updateHistoryLength') // 变化时更新路由切换长度
//     next()
// })
// 5.导出路由
export default router
