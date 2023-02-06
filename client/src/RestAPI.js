import axios from "axios";

let server_url = "http://192.168.2.2:8000/"
console.log(window.location.hostname)
class restAPI {
    checkEnv() {
        const endpoint = ""
        let restEndPoint = server_url + endpoint;
        return axios.get(restEndPoint)
    }

}

export default new restAPI();