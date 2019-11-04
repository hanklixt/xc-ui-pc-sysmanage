import Home from '@/module/home/page/home.vue';
import page_list from "@/module/cms/page/page_list.vue";
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
      }
    ]
  },

]
