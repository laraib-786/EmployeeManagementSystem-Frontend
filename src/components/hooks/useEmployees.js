import { useEffect,useState } from "react";
import EmployeeService from "../services/EmployeeService";

const useEmployees=()=>{
    const [employees,setEmployees]=useState([]);

    useEffect(()=>{
        EmployeeService.fetchAllEmployees().then(res=>{
            setEmployees(res.data);
        });
    },[]);

    return {
        employees:employees
    };
}

export default useEmployees;