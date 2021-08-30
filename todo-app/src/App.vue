<template>
	<h1>vTodo List App</h1>
	<p>Get jazz done.</p>
    <img alt="cat typing" src="./assets/cat_typing.gif" width=150>
	<router-view/>
	<br><br>
	<button @click="createList">Create New List</button>
	<br><br>
	<a href='https://github.com/vivCoding/vtodo' target='_blank'>GitHub</a>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from './store';
import { ACTIONS } from './store/actions'
import { GetTodoListPayload } from './types/store';

export default defineComponent({
    name: 'App',

	setup() {
		const store = useStore()
		const route = useRoute()

		const todoListId = ref()

		watch(
			() => route.params.id,
			newTodoListId => {
				todoListId.value = newTodoListId
				store.dispatch(ACTIONS.GET_TODO_LIST, {
					todoListId: newTodoListId
				} as GetTodoListPayload)
			}
		)

		const createList = () => {
			window.open('/createlist', '_blank')?.focus()
		}

		return { createList }
	}
});
</script>

<style>
body {
	background-color: black;
	color: white;
	font-family: Verdana, Geneva, Tahoma, sans-serif;
	padding-left: 2em;
}
a {
	color: cyan;
}
</style>
