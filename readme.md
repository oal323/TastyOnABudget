
Client:
First install NodeJS (https://nodejs.org/en/download/) and Python3 then restart your computer  
clone the repo by running ```git clone https://github.com/michaelwomack2001/4155-TastyOnABudget.git```  
open the 4155-TastyOnABudget folder in vs code then type cd client  
then type ```npm install```    
Finally run ```npm start``` now the front end is working  
  
Server:  
Make a new powershell and navigate to server with ```cd server```  
run ```pip install "fastapi[all]"```  
start api server ```python -m uvicorn main:app  --reload --host 0.0.0.0 --port 7200```  

Database:
install mariadb 10.11
creat a user named dbuser with a password of gj=wvK?L5Ck9+L&K7zbaKz=
Navigate to 
```C:\Program Files\MariaDB 10.11\bin```
open a cmd prompt
```mariadb.exe -u dbuser -p tasty < ~pathto\4155-TastyOnABudget\RecipieDB-dump.sql\RecipieDB-dump.sql```