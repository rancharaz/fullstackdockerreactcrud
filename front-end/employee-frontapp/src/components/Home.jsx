
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Home = () => {

    const [employees, setEmployees] = useState("");

    const[firstname, setFirstname] = useState("");
    const[lastname, setLastname] = useState("");
    const[dept, setDept] = useState("");
    const[title, setTitle] = useState("");
    const[email, setEmail] = useState("");
    const[salary, setSalary] = useState("");
    const[birthdate, setBirthdate] = useState("");
    const[joindate, setJoindate] = useState("");
    const navigate = useNavigate();
    const [validationError, setValidationError] = useState(false)


    //post employee
    const handleSubmit = (e) => {
        e.preventDefault();

        //put data in a variabel
        const employees = {firstname, lastname, dept, title,email, salary, birthdate, joindate };

        if( firstname.length === 0 || lastname.length === 0 || 
            dept.length === 0 || title.length === 0 || email.length === 0 || 
            salary.length === 0 || birthdate.length === 0 || joindate === 0){
            setValidationError(true)
        } else {
        //post data with fetch
        fetch('http://localhost:3001/api/employees/', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employees)
            }).then(() => {
                alert("Employee added");
                navigate('/gallery')
            }).catch(function(error) {
                console.log(error.message);
            })
           /*  console.log(employees); */
        }


    }


 
  return (

   


    <div className="mx-auto container items-center justify-center h-screen">
        <h1 className="text-4xl py-5">Add employee here</h1>
        
        <form className="w-full mt-16" onSubmit={handleSubmit}>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={firstname} onChange={(e) => setFirstname(e.target.value)} placeholder="Firstname"/>
      
      {
      validationError && firstname.length <= 0 ?
      <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        First Name should not be empty.
      </label> : "" 
      }

    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)} placeholder="Lastname"/>
      
      {validationError && lastname.length <= 0 ?<label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Last Name should not be empty.
      </label> : ""}

    </div>
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Dept:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={dept} onChange={(e) => setDept(e.target.value)} placeholder="Dept" />
      {validationError && dept.length <= 0 ? 
      <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Dept should not be empty.
      </label> : ""}

     
     </div>
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Title:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" value={title} onChange={(e) => setTitle(e.target.value)}  type="text" placeholder="Title"/>
      {validationError && title.length <= 0 ?
      <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Title should not be empty.
      </label> : ""}

     </div>
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Email:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email"/>
     {
      validationError && email.length <= 0  ?
      <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Email should not be empty.
      </label> : ""
     }

     
     </div>
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Salary: 
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Salary"/>
      {
        validationError  && salary.length <= 0  ?
        <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Salary should not be empty.
        </label> : ""
      }

     </div>
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Birthdate:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder="Birthdate"/>
      
      {
        validationError && birthdate.length <= 0  ?
        <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
        Birthdate should not be empty.
        </label> : ""
      }

     </div>
     <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
      Joindate:
      </label>
      <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" value={joindate} onChange={(e) => setJoindate(e.target.value)} placeholder="Joindate"/>
      
      {validationError && joindate.length <= 0  ?
              <label className="validation block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
              Joindate should not be empty.
              </label> :" "  
    }

     </div>
 
  </div>
 <button className="bg-black p-2 text-white rounded-md mr-2">Add Employee</button>
 <Link to={"/gallery"}><button className="bg-black p-2 text-white rounded-md">View employees</button></Link>

</form>
       
    </div>
  )
}

export default Home