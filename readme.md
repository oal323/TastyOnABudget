First install NodeJS (https://nodejs.org/en/download/) and Python3 then restart your computer  
clone the repo by running ```git clone https://github.com/michaelwomack2001/4155-TastyOnABudget.git```  
open the 4155-TastyOnABudget folder in vs code then type cd client  
then type ```npm install -g create-react-app```  
next type ```npm install react-scripts --save```  
next type ```npm install axios```  
Finally run ```npm start``` now the front end is working  
  
for the backend  
Make a new terminal and navigate to server with ```cd server```  
run ```pip install "fastapi[all]"```  
start api server ```python -m uvicorn main:app  --reload --host 0.0.0.0 --port 7200```  
