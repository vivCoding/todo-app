from fastapi import FastAPI, Request, Response
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from starlette.responses import HTMLResponse, RedirectResponse
from models import *
from database import *
from uuid import uuid4

app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")
templates = Jinja2Templates(directory="templates")
todo_db = TodoDatabase()

@app.get("/")
async def index(request: Request):
	print (request)
	todo_list_id = uuid4().hex
	todo_db.create_todo_list(todo_list_id)
	return RedirectResponse(f'/{todo_list_id}')

@app.get("/{todo_list_id}", response_class=HTMLResponse)
async def get_list(request: Request):
	return templates.TemplateResponse("index.html", context={"request": request})

@app.post("/api/savelist")
async def save_list(todo_list: TodoList):
	if todo_list.todo_list_id is None:
		todo_list.todo_list_id = uuid4().hex
	todo_db.save_todos(todo_list)
	return todo_list.todo_list_id

@app.get("/api/{todo_list_id}")
async def api_get_list(todo_list_id: str):
	todo_list = todo_db.get_todos(todo_list_id)
	if todo_list is None:
		return Response(
			content=f'uh oh bad oh!\ncould not find todo list with id "{todo_list_id}"',
			status_code=404
		)
	return todo_list
