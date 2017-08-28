import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
	mode: "history",
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
    	path: "/params/:newsId(\\d+)/:newsTitle",
    	component: Params,
    	name: 'Params',
    	beforeEnter: (to,from,next)=>{
    		console.log(to);
    		console.log(from);
    		next();
    		console.log(next);
    	}
    },
    {
    	path: "/goHome",
    	redirect: "/"
    },
    {
    	path: "/goParams/:newsId(\\d+)/:newsTitle",
    	redirect: "/params/:newsId(\\d+)/:newsTitle"
    },
    {
    	path: "/hi1",
    	component: Hi1,
    	alias: "/wxj"
    },
    {
    	path: "*",
    	component: Error
    }
  ]
})
