import React from "react";

import useEmployees from "./hooks/useEmployees";

export default ()=>{
 //   const classes=styles();
    
   const {employees}=useEmployees();
  
    return(
        <>
        <div className="">
            <h2 className="text-center">Employees List</h2>
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
        </>
    );
};