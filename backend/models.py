from enum import Enum
import uuid
from pydantic import BaseModel
from typing import Optional

class Todo(BaseModel):
	id: str
	todo: str
	completed: bool

class TodoList(BaseModel):
	todos: list[Todo]
	todo_list_id: Optional[str] = None