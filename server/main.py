from datetime import datetime, timedelta
from fastapi import FastAPI, HTTPException, Body, responses, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
import sqlalchemy
from typing import List
from sqlalchemy.sql import text
import json




@app.get("/helloworld")
async def searchRecipes(searchval):
	ret = "hello world"
	return(ret)
