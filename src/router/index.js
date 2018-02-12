import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test01 from '@/components/Test01'
import Test02 from '@/components/Test02'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'HelloWorld', component: HelloWorld },
    { path: '/Test01', name: 'Test01', component: Test01 },
    { path: '/Test01/userid/:uid', name: 'Test01', component: Test01 },
    { path: '/test02', component: Test02 },
    { path: '/Test02/userid/:uid', component: Test02 }
  ]
})
