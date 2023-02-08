import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";



const Aboutus = () => {

  const {id} = useParams()

  const [data, setData]=useState([]); //data in input
  //get 
  const[firstname, setFirstname] = useState("");
  const[lastname, setLastname] = useState("");
  const[dept, setDept] = useState("");
  const[title, setTitle] = useState("");
  const[email, setEmail] = useState("");
  const[salary, setSalary] = useState("");
  const[birthdate, setBirthdate] = useState("");
  const[joindate, setJoindate] = useState("");
  //navigate
  const navigate = useNavigate();

    //get employee by id to show in the fields
    const getEmployee = async () => {
      let result = await fetch('http://localhost:3001/api/employees/' + id);
      result = await result.json();
      setData(result);
      setFirstname(result.firstname);
      setLastname(result.lastname);
      setDept(result.dept);
      setTitle(result.title);
      setEmail(result.email);
      setSalary(result.salary);
      setBirthdate(result.birthdate)
      setJoindate(result.joindate)
    }
    //add get employee into useEffect
    useEffect(() => {
      getEmployee();
    },[])
    
    //update employee using fetch and put method
    const updateEmployee = async () => {
      const employees = {firstname, lastname, dept, title,email, salary, birthdate, joindate };
      //fetch by id
      let result = await fetch('http://localhost:3001/api/employees/' + id, {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json"
      },
          body: JSON.stringify(employees) //convert data to json string
      }).then(() => {
            alert(`Employee ${id} Updated`);
            navigate(-1) // redirect to show page
      })
        result = await result.json();
    } 
 

  return (
    <div className="mx-auto container items-center justify-center h-screen">

    <form className="w-full mt-16 " onSubmit={updateEmployee}>
<div className="flex flex-wrap -mx-3 mb-6">
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
    First Name
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text"   value={firstname} onChange={(e) => setFirstname(e.target.value)}  placeholder="Firstname" />
 </div>
<div className="w-full md:w-1/2 px-3">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
    Last Name
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={lastname} onChange={(e) => setLastname(e.target.value)}  placeholder="Lastname" />
</div>
<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
  Dept:
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={dept} onChange={(e) => setDept(e.target.value)}  placeholder="Dept" />
 </div>
 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
  Title:
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" value={title} onChange={(e) => setTitle(e.target.value)}   type="text" placeholder="Title" />
 </div>
 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
  Email:
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder="Email" />
 </div>
 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
    Salary: 
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" value={salary} onChange={(e) => setSalary(e.target.value)}  placeholder="Salary" />
 </div>
 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
  Birthdate:
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" value={birthdate} onChange={(e) => setBirthdate(e.target.value)}  placeholder="Birthdate" />
 </div>
 <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
  Joindate:
  </label>
  <input className="appearance-none block w-full bg-gray-200 text-gray-700 border   rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="date" value={joindate} onChange={(e) => setJoindate(e.target.value)}  placeholder="Joindate" />
 </div>

</div>
<button type='submit' className='bg-black p-2 text-white rounded-md' >Update</button>

</form>
   
</div>
  )
}

export default Aboutus