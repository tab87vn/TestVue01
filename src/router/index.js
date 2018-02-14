import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Test01 from '@/components/Test01'
import Test02 from '@/components/Test02'
import Test03 from '@/components/Test03'
import Test030 from '@/components/Test03.0'
import Test031 from '@/components/Test03.1'
import Test032 from '@/components/Test03.2'
import Test04 from '@/components/Test04'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: Home, alias: ['/default', '/', '/xxx'] },
    { path: '/Test01', name: 'Test01', component: Test01 },
    { path: '/Test01/userid/:uid', name: 'test01-with-uid', component: Test01 },
    { path: '/test02', component: Test02 },
    { path: '/test02', name: 'Test02', component: Test02 },
    { path: '/Test02/userid/:uid', component: Test02 },
    { path: '/Test02/:uid', component: Test02 },
    {
      path: '/t03/:id',
      component: Test03,
      children: [
        {path: '', component: Test030},
        {path: 'three-one', component: Test031},
        {path: 'three-two', component: Test032}
      ]
    },
    { path: '/test04/uid/:uid', component: Test04, props: true }
  ]
})
