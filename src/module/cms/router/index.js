import Home from '@/module/home/page/home.vue';
import page_list from "@/module/cms/page/page_list.vue";
import page_add from "@/module/cms/page/page_add";
export default [{
    path: '/',
    component: Home,
    name: 'CMS',
    hidden: false,
    redirect: '/home',
    children: [
      {
        path: '/cms/page/list',
        component: page_list,
        name: '页面列表',
        hidden: false
      },
      {
        path: '/cms/page/add',
        component: page_add,
        name: '新增页面',
        hidden: true
      }
    ]
  },

]
