import { InjectionKey } from 'vue'
import { ActionContext, createStore, Store, useStore as baseUseStore } from 'vuex'
import { Todo } from '../types/todo'
import { AddTodoPayload, GetTodoListPayload, MarkCompletionPayload, RemoveTodoPayload, SetTodosPayload } from '../types/store'
import { saveList, getList } from '../api'
import { ACTIONS } from './actions'

export interface StoreStateType {
	todos: Todo[],
	todoListId: string
}

const store = createStore<StoreStateType>({
	state: {
		todos: [],
		todoListId: ''
	},

	mutations: {
		[ACTIONS.ADD_TODO] (state: StoreStateType, payload: AddTodoPayload): void {
			state.todos.push({
				id: Math.random().toString(16).substr(2, 8),
				todo: payload.todo,
				completed: false
			})
		},

		[ACTIONS.REMOVE_TODO] (state: StoreStateType, payload: RemoveTodoPayload): void {
			state.todos = state.todos.filter(todo => todo.id != payload.id)
		},

		[ACTIONS.MARK_COMPLETION] (state: StoreStateType, payload: MarkCompletionPayload): void {
			const todoToComplete = state.todos.find(todo => todo.id == payload.id)
			if (todoToComplete) {
				todoToComplete.completed = payload.completed ?? true
			}
		},

		[ACTIONS.SET_TODOS] (state: StoreStateType, payload: SetTodosPayload): void {
			state.todoListId = payload.todoListId
			state.todos = payload.todos
		}
	},

	actions: {
		async [ACTIONS.SAVE_TODO_LIST] (): Promise<void> {
			const todos = JSON.stringify({
				todo_list_id: this.state.todoListId,
				todos: this.state.todos
			})
			await saveList(todos)
			alert("Saved list! Access this URL anytime to view it again.")
		},

		async [ACTIONS.GET_TODO_LIST] (
			context: ActionContext<StoreStateType, StoreStateType>,
			payload: GetTodoListPayload
		): Promise<void> {
			const todos = await getList(payload.todoListId)
			console.log(todos)
			context.commit(ACTIONS.SET_TODOS, {
				todoListId: payload.todoListId,
				todos: todos
			} as SetTodosPayload)
		}
	}
})

export const key: InjectionKey<Store<StoreStateType>> = Symbol()

export const useStore = (): Store<StoreStateType> => {
	return baseUseStore(key)
}

export default store
