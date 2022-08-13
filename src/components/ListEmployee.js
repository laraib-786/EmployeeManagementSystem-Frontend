
import React from "react";

import useEmployees from "./hooks/useEmployees";
import {useNavigate} from "react-router-dom";

export default ()=>{
 //   const classes=styles();
    
   const {employees}=useEmployees();
   const navigate=useNavigate();
   const handleClick=(event)=>{
        navigate('/add-employee');

   }

    return(
        <div>
            <h2 className="text-center">Employees List</h2>
                
            <div className="row-1">
                <button  className="btn btn-primary" onClick={handleClick}> Add</button>
            </div>
            <div className="row">
                <table className="table table-striped table-bordered">
                    <thead>
                        <tr>
                            <th>Employee First Name </th>
                            <th>Employee Last Name</th>
                            <th>Employee Email Id</th>
                            <th> Actions </th>
                        </tr>
                    </thead>
                    <tbody>{
                        employees.map(
                            employee=>
                            <tr key={employee.id}>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                            </tr>
                            
                        )
}
                    </tbody>
                </table>
            </div>

        
        </div>
    );
};