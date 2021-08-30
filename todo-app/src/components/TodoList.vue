<template>
	<p><strong>My List ID:</strong> <i>{{ todoListId }}</i></p>
	<todo-input/>
	<ul>
		<todo-item v-for="todo in todos"
			:key="todo.id"
			:todo="todo"
		/>
		<p v-show="todos.length == 0">Nothing to do!</p>
	</ul>
	<button @click="saveList">Save list</button>&nbsp;
	<button @click="shareList">Share List</button>&nbsp;
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TodoItem from './TodoItem.vue'
import TodoInput from './TodoInput.vue'
import { useStore } from '../store'
import { ACTIONS } from '../store/actions'

export default defineComponent({
	name: 'TodoList',
	components: {
		TodoItem, TodoInput
	},
	setup() {
		const store = useStore()

		const saveList = () => {
			store.dispatch(ACTIONS.SAVE_TODO_LIST)
		}

		const shareList = () => {
			navigator.clipboard.writeText(window.location.href).then(() => {
				alert('Copied todo list URL to clipboard!')
			})
		}

		return {
			todos: computed(() => store.state.todos),
			todoListId: computed(() => store.state.todoListId),
			saveList, shareList
		}
	}
})
</script>