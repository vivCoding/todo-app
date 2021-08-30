export interface Todo {
	id: string,
	todo: string
	completed: boolean
}

export interface TodoList {
	_id: string,
	todos: Todo[]
}