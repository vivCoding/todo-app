<template>
	<h1>vTodo List App</h1>
	<p>Get jazz done.</p>
    <img alt="cat typing" src="./assets/cat_typing.gif" width=150>
	<router-view/>
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
</style>
