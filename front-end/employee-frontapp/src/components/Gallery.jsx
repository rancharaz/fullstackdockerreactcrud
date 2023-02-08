import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import Aboutus from "./Aboutus";
const Gallery = () => {

  const [employees, setEmployees] = useState("");
  const navigate = useNavigate();

  //fetch employees
  useEffect(() => {
    axios.get('http://localhost:3001/api/employees/')
        .then(function(response) {
            let alllData = response.data;
            setEmployees(alllData);
        }).catch(function(error){
            console.log(error.message);
        })
    },[employees])

    //delete employee by id
    async function deleteEmployee(id) {
     
      let result = await fetch('http://localhost:3001/api/employees/' + id, {
        method: "DELETE"
      })
      result = await result.json()
      console.log(result)
    }
    //navigate to homepage
    const addEmployee = () => {
        navigate('/')
    }

    //view section
 

  return (
    <div className="mx-auto container mt-16 items-center justify-center h-screen">
    <table>
    <tbody>
        <tr>
        <th>Id</th>
        <th>Firstname</th>
        <th>Last name</th>
        <th>Department</th>
        <th>Title</th>
        <th>Email</th>
        <th>Salary</th>
        <th>Birthdate</th>
        <th>Joindate</th>
        <th>Actions</th>
</tr>

 {
   employees && employees.map(employee => {
         return(
              
             <tr key={employee.id}>
              <td>{employee.id}</td>

             <td>{employee.firstname}</td>
             <td>{employee.lastname}</td>
             <td>{employee.dept}</td>
             <td>{employee.title}</td>
             <td>{employee.email}</td>
             <td>{employee.salary}</td>
             <td>{employee.birthdate}</td>
             <td>{employee.joindate}</td>
             <td>
              <Link to={"/contactus/" + employee.id}>
              <button className="bg-black p-2 text-white rounded-md mr-2">View</button>
              </Link>
               <button onClick={() => deleteEmployee(employee.id)} className="bg-black p-2 text-white rounded-md mr-2">Delete</button>
              <Link to={"/aboutus/" + employee.id}><button className="bg-black p-2 text-white rounded-md">Update</button></Link>
              </td>

             </tr>
             

         )
     })
 }

</tbody>
</table>
<Link to={"/"}>
<button className="bg-black p-2 text-white rounded-md mt-6">back</button>

</Link>
</div>
  )
}

export default Gallery