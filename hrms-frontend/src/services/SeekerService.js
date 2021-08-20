import axios from 'axios'

export default class SeekerService{

    getSeekers() {

        return axios.get("http://localhost:8080/api/jobseekers/getall")




    }





}