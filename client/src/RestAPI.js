import axios from "axios";

let server_url = "http://localhost:7200/"
console.log(window.location.hostname)
class restAPI {
    checkEnv() {
        const endpoint = ""
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint)
    }
    getToken(username,password) {
        const endpoint = "auth/login"
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password});
        let customConfig = {
            headers: {
            'Content-Type': 'application/json'
            }
        };
        
        return axios.post(restEndPoint,json,customConfig)
    }
    addUser(username,password,email,firstName){
        const endpoint = "addUser";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ username:username, password:password,email:email,firstName:firstName});
        return axios.put(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    getAllRecipies(){
        const endpoint = "recipies";
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }
    getNumRecipies(totalRecipes){
        const endpoint = "recipies/"+totalRecipes;
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    putUserData(calorie_goal,gender,height,weight,age,cooking_exp,num_days,num_meals,activity_level){
        const endpoint = "putUserData";
        let restEndPoint = server_url + endpoint;
        const json = JSON.stringify({ calorie_goal:calorie_goal, gender:gender,height:height,weight:weight,age:age,cooking_exp:cooking_exp,num_days:num_days,num_meals:num_meals,activity_level:activity_level});
        return axios.get(restEndPoint,json,{
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

}

export default new restAPI();