import Vue from 'vue'
import VueRouter from 'vue-router'

import main from '@/components/main.vue'
import home from '@/components/home.vue'
import news from '@/components/news.vue'
import roles from '@/components/roles.vue'
import worlds from '@/components/worlds.vue'
import manhua from '@/components/manhua.vue'
import community from '@/components/community.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/main' },
    { path: '/main', component: main,
      redirect: '/main/home',
      children: [
        { path: 'home', component: home},
        { path: 'news', component: news },
        { path: 'roles', component: roles },
        { path: 'worlds', component: worlds },
        { path: 'manhua', component: manhua },
        { path: 'community', component: community },
      ]
    }
  ]
})


export default router