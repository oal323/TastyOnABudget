from datetime import datetime, timedelta
from fastapi import FastAPI, HTTPException, Body, responses, status, Depends
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext
from pydantic import BaseModel
import sqlalchemy
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Table, Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import aliased
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship
from typing import List
from sqlalchemy.sql import text
import json


engine = sqlalchemy.create_engine("mariadb+mariadbconnector://dbuser:gj=wvK?L5Ck9+L&K7zbaKz=@localhost:3306/tasty")
Base = declarative_base()
Session = sqlalchemy.orm.sessionmaker()
Session.configure(bind=engine)
session = Session()

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    username: str | None = None


class User(Base):
    __tablename__ = 'users'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True,autoincrement='ignore_fk')
    children: Mapped[List["UserSurveyDataSQL"]] = relationship(back_populates="parent")
    username = sqlalchemy.Column(sqlalchemy.String(length=100))
    password = sqlalchemy.Column(sqlalchemy.String(length=100), nullable=False)
    email = sqlalchemy.Column(sqlalchemy.String(length=100), nullable=False)
    firstName = sqlalchemy.Column(sqlalchemy.String(length=100), nullable=False)

class UserLoginData(BaseModel):
    username: str
    password: str
    email: str
    firstName: str

class LoginModel(BaseModel):
    username: str
    password: str

class Recipe(Base):
    __tablename__ = 'recipe'
    id = sqlalchemy.Column(sqlalchemy.String(length=100), primary_key=True)
    title = sqlalchemy.Column(sqlalchemy.String(length=100))
    steps = sqlalchemy.Column(sqlalchemy.String(length=100))
    nutrition = sqlalchemy.Column(sqlalchemy.String(length=100))
    description = sqlalchemy.Column(sqlalchemy.String(length=100))
    servings = sqlalchemy.Column(sqlalchemy.String(length=100))
    thumbnail = sqlalchemy.Column(sqlalchemy.String(length=100))
    ingredients = sqlalchemy.Column(sqlalchemy.String(length=100))
    tags = sqlalchemy.Column(sqlalchemy.String(length=100))

class UserSurveyDataSQL(Base):
    __tablename__ = 'userData'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    users_id = mapped_column(ForeignKey("users.id"))
    parent = relationship("User", back_populates="children")
    calorie_goal = sqlalchemy.Column(sqlalchemy.String(length=100))
    gender = sqlalchemy.Column(sqlalchemy.String(length=100))
    height = sqlalchemy.Column(sqlalchemy.String(length=100))
    weight = sqlalchemy.Column(sqlalchemy.String(length=100))
    age = sqlalchemy.Column(sqlalchemy.String(length=100))
    cooking_exp = sqlalchemy.Column(sqlalchemy.String(length=100))
    num_days = sqlalchemy.Column(sqlalchemy.String(length=100))
    num_meals = sqlalchemy.Column(sqlalchemy.String(length=100))
    activity_level = sqlalchemy.Column(sqlalchemy.String(length=100))

class UserSurveyData(BaseModel):
    userID:int
    calorie_goal: str
    gender: str
    height: str
    weight: str
    age: str
    cooking_exp: str
    num_days: str
    num_meals: str
    activity_level: str
Base.metadata.create_all(engine)

class likeRecipies():
    __tablename__ = 'likedRecipies'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    userId = sqlalchemy.Column(ForeignKey("users.id"))
    recipieId = sqlalchemy.Column(ForeignKey("recipe.id"))

class dislikedRecipies():
    __tablename__ = 'dislikedRecipies'
    id = sqlalchemy.Column(sqlalchemy.Integer, primary_key=True, autoincrement=True)
    userId = sqlalchemy.Column(ForeignKey("users.id"))
    recipieId = sqlalchemy.Column(ForeignKey("recipe.id"))

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

app = FastAPI()


origins = [
    "http://localhost:3000",
    "localhost:3000"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


SECRET_KEY = "c43421ccc0b4a9bd1905ef5facd2bf8a4e70ffb0445a6da31d4b0ef3e246d1fb"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)


def get_user(username: str):
    user = (session.query(User).filter(User.username == username).first())
    return(user)


def authenticate_user(username: str, password: str):
    user = get_user(username)
    if not user:
        return False
    if verify_password(password, user.password):
        return user
    return False


def create_access_token(user: UserLoginData, expires_delta: timedelta | None = None):
    to_encode = user.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt

def get_user_data(username: str):
	User = (session.query(User).filter(User.username == username).first())
	usersurveydata = (session.query(UserSurveyData).filter(User.id == UserSurveyDataSQL.id).first())
	return(usersurveydata)

def get_user_recipes(userdata: UserSurveyData):
    calories = userdata.calorie_goal / 3
    caloriesupper = calories + 100
    calorieslower = calories - 100
    recipes = []

    if 'dinner' in userdata.num_meals:
        query = text("SELECT Limit (:userdata.num_days) * FROM recipes WHERE tags LIKE '%dinner%' AND calories BETWEEN :calorieslower AND :caloriesupper AND id NOT IN (SELECT recipieId FROM dislikedRecipies WHERE userId = :user_id)ORDER BY NEWID()")
        result = session.execute(query, {'user_id': userdata.user_id, 'calorieslower': calorieslower, 'caloriesupper': caloriesupper, 'num_days': userdata.num_days})
        rows = result.mappings().all()
        recipes = [dict(row) for row in rows]

    if 'lunch' in userdata.num_meals:
        query = text("SELECT Limit (:userdata.num_days) * FROM recipes WHERE tags LIKE '%lunch%' AND calories BETWEEN :calorieslower AND :caloriesupper AND id NOT IN (SELECT recipieId FROM dislikedRecipies WHERE userId = :user_id)ORDER BY NEWID()")
        result = session.execute(query, {'user_id': userdata.user_id, 'calorieslower': calorieslower, 'caloriesupper': caloriesupper, 'num_days': userdata.num_days})
        rows = result.mappings().all()
        recipes += [dict(row) for row in rows]

    if 'breakfast' in userdata.num_meals:
        query = text("SELECT Limit (:userdata.num_days) * FROM recipes WHERE tags LIKE '%breakfast%' AND calories BETWEEN :calorieslower AND :caloriesupper AND id NOT IN (SELECT recipieId FROM dislikedRecipies WHERE userId = :user_id)ORDER BY NEWID()")
        result = session.execute(query, {'user_id': userdata.user_id, 'calorieslower': calorieslower, 'caloriesupper': caloriesupper, 'num_days': userdata.num_days})
        rows = result.mappings().all()
        recipes += [dict(row) for row in rows]

    return(recipes)


async def get_current_user(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=status.HTTP_401_UNAUTHORIZED,
        detail="Could not validate credentials",
        headers={"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("sub")
        if username is None:
            raise credentials_exception
        token_data = TokenData(username=username)
    except JWTError:
        raise credentials_exception
    user = get_user(username=token_data.username)
    if user is None:
        raise credentials_exception
    return user


async def get_current_active_user(current_user: User = Depends(get_current_user)):
    if current_user.disabled:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user

tags=["Auth"]
@app.post("/auth/login")
def login(login: LoginModel):
    user = authenticate_user(login.username, login.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = create_access_token(
        {"username": user.username,"email": user.email,"fname": user.firstName}, expires_delta=access_token_expires
    )
    return {"access_token": access_token, "token_type": "bearer","login_status": "success"}


""" @app.get("/users/me/", response_model=User)
async def read_users_me(current_user: User = Depends(get_current_active_user)):
    return current_user """

@app.put("/addUser")
async def addUser(user: UserLoginData):
    user.password = get_password_hash(user.password)
    newUser = User(username = user.username, password = user.password, email = user.email, firstName = user.firstName)
    if (len(session.query(User).filter(User.username == user.username).all())!=0):
        raise HTTPException(status_code=400, detail="double user")
    if (len(session.query(User).filter(User.email == user.email).all())!=0):
        raise HTTPException(status_code=400, detail="double email")
    session.add(newUser)
    session.commit()
    raise HTTPException(status_code=200, detail="Succ")

@app.put("likeRecpipe")
async def like_recipie(userId: int, recipieid: int):
    new_like  = dislikedRecipies(userId = userId, recipieId = recipieid)
    session.add(new_like)
    session.commit()

@app.put("dilikeRecpipe")
async def dislike_recipie(userId: int, recipieid: int):
    new_dislike  = dislikedRecipies(userId = userId, recipieId = recipieid)
    session.add(new_dislike)
    session.commit()

@app.get("/users/me/items/")
async def read_own_items(current_user: User = Depends(get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]

@app.get("/recipes")
async def getRecipes():
    return(session.query(Recipe).all())


@app.get("/recipes/{id}")
async def getRecpies(id):
    return(session.query(Recipe).filter(Recipe.id == id).first())
    
@app.get("/recipes/{tags}")
async def getRecipes(tags):
    return(session.query(Recipe).all().filter(Recipe.tags.like(tags)))

@app.get("/recipes/{num}")
async def getRecipes(num):
    return(session.query(Recipe).limit(num).all())

@app.get("/recipes/searchtitle/{searchval}")
async def searchRecipes(searchval):
    if (searchval == ""):
        raise HTTPException(status_code=400, detail="Empty Search")
    sqlText = text('SELECT * from recipe where title like :searchval')
    res = session.execute(sqlText, {'searchval':'%'+searchval+'%'})
    ret = res.mappings().all()
    return(ret)

@app.get("/recipes/searchtags/{searchval}")
async def searchRecipes(searchval):
    if (searchval == ""):
        raise HTTPException(status_code=400, detail="Empty Search")
    sqlText = text('SELECT * from recipe where tags like :searchval')
    res = session.execute(sqlText, {'searchval':'%'+searchval+'%'})
    ret = res.mappings().all()
    return(ret)

@app.put("/userSurveyData")
async def putUserSurveyData(user: UserSurveyData):
    
    newUserSurveyData = UserSurveyDataSQL(users_id=user.userID,gender = user.gender,height = user.height,weight=user.weight,age=user.age,cooking_exp=user.cooking_exp,num_days=user.num_days,num_meals=user.num_meals,activity_level=user.activity_level)
    session.add(newUserSurveyData)
    session.commit()
    

