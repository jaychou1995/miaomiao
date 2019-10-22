import Vue from 'vue'
import VueRouter from 'vue-router'

// import Movie from '../views/Movie'
// import Mine from '../views/Mine'
// import Cinema from '../views/Cinema'

Vue.use(VueRouter)

const routes = [
  {
    path: '/movie',
    name: 'movie',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Movie'),
	children:[
		{
			path:'city',
			component: () => import('@/components/City')
		},
		{
			path:'nowPlaying',
			component: () => import('@/components/NowPlaying')
		},
		{
			path:'comingSoon',
			component: () => import('@/components/ComingSoon')
		},
		{
			path:'search',
			component: () => import('@/components/Search')
		}
	]
  },
  {
    path: '/cinema',
    name: 'cinema',
    component: () => import(/* webpackChunkName: "about" */ '../views/Cinema')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "about" */ '../views/Mine')
  },
  {
	  path:'/*',
	  redirect:'/movie/nowPlaying'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
