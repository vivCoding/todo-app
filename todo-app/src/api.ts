import { Todo, TodoList } from "./types/todo"

export const saveList = async (todos: string): Promise<void> => {
	await fetch('/api/savelist', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: todos
	}).then(response => {
		return response.json()
	}).then(data => {
		console.log(data)
	})
}

export const getList = async (todoListId: string): Promise<Todo[]> => {
	const data: TodoList = await fetch(`/api/${todoListId}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' },
	}).then(response => {
		if (response.status != 200) {
			// TODO: add some kind of error handling here.
			// Considering adding a state with artifact
			return { id: '', todos: [] }
		}
		return response.json()
	}).then(data => {
		return data
	})
	return data.todos
}