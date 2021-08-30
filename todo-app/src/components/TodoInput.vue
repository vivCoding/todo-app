<template>
	<input v-model="todoToAdd"/>&nbsp;
	<button @click="handleAddTodo">Add Todo</button>
</template>

<script lang="ts">
import { AddTodoPayload } from '@/types/store'
import { defineComponent, ref } from 'vue'
import { useStore } from '../store'
import { ACTIONS } from '../store/actions'

export default defineComponent({
	name: 'TodoInput',

	setup() {
		const store = useStore()
		const todoToAdd = ref('')
		const handleAddTodo = () => {
			store.commit(ACTIONS.ADD_TODO, { todo: todoToAdd.value } as AddTodoPayload)
			todoToAdd.value = ''
		}
		return {
			todoToAdd, handleAddTodo
		}
	},
})
</script>
