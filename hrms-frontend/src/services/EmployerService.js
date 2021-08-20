import axios from 'axios'

export default class EmployerService{

    getEmployers() {

        return axios.get("http://localhost:8080/api/employers/getall")

    


    }
    createEmployer(val) {
debugger;
        return  axios.post('http://localhost:8080/api/employers/createemployer', val);

    }





}