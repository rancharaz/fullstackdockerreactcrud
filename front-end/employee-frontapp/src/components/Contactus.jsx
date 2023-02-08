import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Contactus = () => {
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
    
 
  return (
    <div className="mx-auto container items-center justify-center h-screen">
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
      </tr>
      <tr>
 
      <td>{id}</td>
      <td>{firstname}</td>
      <td>{lastname}</td>
      <td>{dept}</td>
      <td>{title}</td>
      <td>{email}</td>
      <td>{salary}</td>
      <td>{birthdate}</td>
      <td>{joindate}</td>
      </tr>
        </tbody>
      </table>
     
      <Link to={"/gallery"}>
<button className="bg-black p-2 text-white rounded-md mt-6">back</button>

</Link>
</div>
  )
}

export default Contactus