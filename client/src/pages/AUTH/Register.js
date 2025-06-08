import React ,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import { toast } from 'react-toastify'; // Import toast for notifications
import axios from 'axios'; // Import axios for making HTTP requests
import {useNavigate}  from 'react-router-dom'; // Import react-router for navigation


const Register = () => {
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[phone,setPhone]=useState("")
  const[address,setAddress]=useState("")
  const[password,setPassword]=useState("")
  const navigate = useNavigate(); // Initialize useNavigate hook for navigation


  // Form submit handler  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{name,email,phone,address,password});
      if(res.data.success){
        toast.success(res.data.message);
        navigate('/login'); // Navigate to login page on successful registration
      }else{
        toast.error(res.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error("Something went wrong, please try again later.");
    }
  }
  return (
    <Layout Title={"Register"}>
      <div className='register'>
        <h1> Register Page</h1>


          <form onSubmit={handleSubmit}>
       <div className="mb-3">
          <input 
          type="text"
          value={name} 
          onChange={(e)=>setName(e.target.value)}
          required
          className="form-control" 
          id="exampleInputName"
           placeholder=" Enter your Name" />
        </div>

        <div className="mb-3">
          <input 
          type="email" 
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          required
          className="form-control" 
          id="exampleInputEmail"  
          placeholder=" Enter your Email" />
        </div>

        <div className="mb-3">
          <input 
          type="text" 
          value={phone}
          onChange={(e)=>setPhone(e.target.value)}
          required
          className="form-control" 
          id="exampleInputPhone" 
          placeholder=" Enter phone no."  />
        </div>

         <div className="mb-3">
          <input 
          type="text" 
          value={address}
          onChange={(e)=>setAddress(e.target.value)}
          required
          className="form-control" 
          id="exampleInputAddress" 
          placeholder=" Enter your Address"  />
        </div>

        <div className="mb-3">
          <input 
          type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          className="form-control" 
          id="exampleInputPassword1" 
          placeholder=" Set Password" />
        </div>
        
        <button 
        type="submit" 
        className="btn btn-primary">
          Submit
        </button>
      </form>

      </div>
    </Layout>
  )
}

export default Register