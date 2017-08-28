import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/hi'
import Hi1 from '@/components/hi1'
import Hi2 from '@/components/hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/Hi',
      component: Hi,
      children: [
      {path: '/',name: 'Hello/Hi',component: Hi},
      {path: 'hi1',name: 'hi1',component: Hi1},
      {path: 'hi2',name: 'hi2',component: Hi2}
      ]
    }
  ]
})
