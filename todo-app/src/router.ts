import TodoList from './components/TodoList.vue'
import { RouteRecordRaw, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/:id',
		component: TodoList,
	}
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

export default router