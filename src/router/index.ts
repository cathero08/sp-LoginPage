import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: () => import('@/views/index.vue'),
		},
		{
			path: '/testpage',
			name: 'Testpage',
			component: () => import('@/views/test.vue'),
		},
	],
	scrollBehavior: () => ({ left: 0, top: 0 }),
});

export default router;
