import { Todo } from "./todo";

export interface AddTodoPayload {
	todo: string
}

export interface RemoveTodoPayload {
	id: string
}

export interface MarkCompletionPayload extends RemoveTodoPayload {
	completed?: boolean
}

export interface GetTodoListPayload {
	todoListId: string
}

export interface SetTodosPayload {
	todoListId: string,
	todos: Todo[]
}