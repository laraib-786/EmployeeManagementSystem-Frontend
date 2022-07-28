import axios from 'axios';

const EMPLOYESS_API_BASE_URL="http://localhost:8080/api/v1/employees";

export default{
    fetchAllEmployees: ()=>{ return axios.get(EMPLOYESS_API_BASE_URL);
    }


}