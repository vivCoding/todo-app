import os
from dotenv import load_dotenv
load_dotenv()

class Config:
	DB_URL = os.getenv("DB_URL")
	DB_NAME = os.getenv("DB_NAME")
	DB_COLLECTION = os.getenv("DB_COLLECTION")