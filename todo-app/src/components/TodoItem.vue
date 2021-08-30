<template>
	<li>
		<button @click="handleRemoveTodo">Remove</button>&nbsp;
		<button @click="handleCompletedTodo">{{ hasCompleted ? "Incomplete" : "Completed" }}</button>&nbsp;
		<span :class = "{ completed: hasCompleted}">{{ item.todo }}</span>
	</li>
</template>

<script lang="ts">
import { MarkCompletionPayload, RemoveTodoPayload } from '@/types/store'
import { defineComponent, PropType, ref } from 'vue'
import { useStore } from '../store'
import { ACTIONS } from '../store/actions'
import { Todo } from '../types/todo'

export default defineComponent({
	name: 'TodoItem',
	props: {
		todo: {
			type: Object as PropType<Todo>,
			required: true
		}
	},
	setup(props) {
		const store = useStore()
		const item = ref(props.todo)
		const todoId = item.value.id
		const handleRemoveTodo = () => {
			store.commit(
				ACTIONS.REMOVE_TODO,
				{ id: todoId } as RemoveTodoPayload
			)
		}

		const hasCompleted = ref(item.value.completed)
		const handleCompletedTodo = () => {
			hasCompleted.value = !hasCompleted.value
			store.commit(
				ACTIONS.MARK_COMPLETION,
				{ id: todoId, completed: hasCompleted.value } as MarkCompletionPayload
			)
		}
		return { item, handleRemoveTodo, hasCompleted, handleCompletedTodo }
	},
})
</script>

<style scoped>
.completed {
	text-decoration: line-through;
}
</style>