import { useEffect,useState } from "react";
import ListEmployeeService from "../services/ListEmployeeService";

const useEmployees=()=>{
    const [employees,setEmployees]=useState([]);

    useEffect(()=>{
        ListEmployeeService.fetchAllEmployees().then(res=>{
            setEmployees(res.data);
        });
    },[]);

    return {
        employees:employees
    };
}

export default useEmployees;