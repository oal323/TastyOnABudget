import axios from "axios";

let server_url = "http://localhost:7200/"

class restAPI {
    getHelloWorld(){
        const endpoint = "helloworld";
        let restEndPoint = server_url + endpoint;

        return axios.get(restEndPoint,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }

}

export default new restAPI();
