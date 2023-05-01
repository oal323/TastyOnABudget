from main import *
from fastapi.testclient import TestClient
from main import app
import json

client = TestClient(app)

newUser = User(username = "testuser", password = "Testpass", email = "TestEmail", firstName = "TestFname")
if (len(session.query(User).filter(User.username == newUser.username).all())==0):
        session.add(newUser)
        session.commit()


def test_add_user():
    data = UserLoginData(username = "Testusermain", password = "Testpass", email = "TestEmailmain", firstName = "TestFname")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 200
    assert response.json() == {"detail": "Succ"}

         
def test_overlapping_email():
    data = UserLoginData(username = "Testusermain1", password = "Testpass1", email = "TestEmailmain", firstName = "TestFname1")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 400
    assert response.json() == {"detail": "double email"}

def test_overlapping_user():
    data = UserLoginData(username = "Testusermain", password = "Testpass1", email = "TestEmail1", firstName = "TestFname1")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 400
    assert response.json() == {"detail": "double user"}

def test_username_case_duplicate_handling():
    data = UserLoginData(username = "tEsTuSeR", password = "Testpass2", email = "TestEmail2", firstName = "TestFname2")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 400
    assert response.json() == {"detail": "double user"}

def test_password_duplicate():
    data = UserLoginData(username = "testuser3", password = "Testpass", email = "TestEmail3", firstName = "TestFname3")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 200
    assert response.json() == {"detail": "Succ"}

def test_firstName_duplicate():
    data = UserLoginData(username = "testuser4", password = "Testpass4", email = "TestEmail4", firstName = "TestFname")
    response = client.put("/addUser", json=data.__dict__)
    assert response.status_code == 200
    assert response.json() == {"detail": "Succ"}

def test_putUserSurveyData():
    data = UserSurveyData(
    userID= 1,
    calorie_goal= "300",
    gender= "male",
    height= "3",
    weight= "230",
    age= "21",
    cooking_exp= "moderate",
    num_days= "1",
    num_meals= "3",
    activity_level= "moderate")
    response = client.put("/userSurveyData", json=data.__dict__)
    assert response.status_code == 200




