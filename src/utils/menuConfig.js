export const menuList = [
  {
    title: '系统首页', // 菜单标题名称
    name: 'home',
    key: 'home', // 对应的path
    icon: 'icon-chart'
  },
  {
    title: '信息发布',
    name: 'information',
    key: '/information',
    icon: 'icon-component',
    children: [ // 子菜单列表
      {
        title: 'Banner管理',
        name: 'banner',
        key: 'banner',
      },
      {
        title: '平台介绍',
        name: 'introduce',
        key: 'introduce',
      },
      {
        title: '合作伙伴',
        name: 'partner',
        key: 'partner',
      },
    ]
  },
  {
    title: '解决方案',
    name: 'solution',
    key: '/solution',
    icon: 'icon-international',
    children: [ // 子菜单列表
      {
        title: '方案列表',
        name: 'programmelist',
        key: 'programmelist',
      },
      {
        title: '客户案例',
        name: 'customerlist',
        key: 'customerlist'
      }
    ]
  },
  // {
  //   title: '新闻管理',
  //   name: 'news',
  //   key: '/news',
  //   icon: 'icon-wechat',
  //   children: [ // 子菜单列表
  //     {
  //       title: '新闻列表',
  //       key: 'newslist',
  //     },
  //     {
  //       title: '分类管理',
  //       key: 'classmanagement',
  //     }
  //   ]
  // },
  // {
  //   title: '产品管理',
  //   name: 'product',
  //   key: '/product',
  //   icon: 'icon-zip',
  //   children: [
  //     {
  //       title: '产品列表',
  //       key: 'producelist',
  //     }
  //   ]
  // },
  // {
  //   title: '帮助中心',
  //   key: '/Help',
  //   icon: 'icon-zip',
  //   children: [
  //     {
  //       title: '问题列表',
  //       key: '/helplist',
  //     },
  //     {
  //       title: '分类管理',
  //       key: '/helpclass',
  //     }
  //   ]
  // },
  // {
  //   title: '关于我们',
  //   key: '/About',
  //   icon: 'icon-example',
  //   children: [
  //     {
  //       title: '关于我们',
  //       key: '/aboutus',
  //     }
  //   ]
  // },
  // {
  //   title: '服务管理',
  //   key: '/serviceManage',
  //   icon: 'icon-guide',
  //   children: [
  //     {
  //       title: '服务详情-待处理',
  //       key: '/detail'
  //     },
  //     {
  //       title: '服务详情-退回修改',
  //       key: '/retrack'
  //     }
  //   ]
  // }
];
