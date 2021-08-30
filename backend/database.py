from pymongo import MongoClient
from models import *
from config import Config

class TodoDatabase:
	def __init__(self) -> None:
		self._client = MongoClient(Config.DB_URL)
		self._database = self._client[Config.DB_NAME]
		self._collection = self._database[Config.DB_COLLECTION]
	
	def create_todo_list(self, todo_list_id: str) -> None:
		self._collection.insert_one({ "_id": todo_list_id, "todos": [] })

	def get_todos(self, todo_list_id: str) -> dict or None:
		todo_list = self._collection.find_one({ "_id": todo_list_id })
		return todo_list

	def save_todos(self, todo_list: TodoList) -> None:
		try:
			self._collection.update_one(
				{ "_id": todo_list.todo_list_id }, 
				{ "$set": {
					"_id": todo_list.todo_list_id,
					"todos": [dict(todo) for todo in todo_list.todos]
				}}
			)
		except: pass


# test_database: list[TodoList] = [
# 	TodoList(
# 		todos=[
# 			Todo(todo='niiiiiice', completed=True),
# 			Todo(todo='hyyyyyy', completed=False)
# 		],
# 		todo_list_id='bf79791019eb46a3990cada63f6fdc01'
# 	),
# 	TodoList(
# 		todos=[
# 			Todo(todo='wowee', completed=False),
# 			Todo(todo='hmmm', completed=False),
# 			Todo(todo='cool', completed=True),
# 		],
# 		todo_list_id='ba2ccc957c724496b59925175e10800d'
# 	),
# ]
# database: list[TodoList] = test_database