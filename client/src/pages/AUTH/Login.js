
import React ,{useState} from 'react'
import Layout from '../../components/layout/Layout'
import toast from 'react-hot-toast'; // Import Toaster and toast for notifications
import axios from 'axios'; // Import axios for making HTTP requests
import {useNavigate, useLocation}  from 'react-router-dom'; // Import react-router for navigation
import { useAuth } from '../../context/Auth';

const Login = () => {
      const[email,setEmail]=useState("")
      const[password,setPassword]=useState("")
      const navigate = useNavigate(); // Initialize useNavigate hook for navigation
      const {auth, setAuth} = useAuth() // Access authentication context
      const location = useLocation(); // Get the current location

       // Form submit handler  
  const handleSubmit= async(e)=>{
    e.preventDefault();
    try{
        const res = await axios.post('/api/v1/auth/login',{
          email,
          password,
        });
      if(res && res.data.success){
        toast.success(res.data.message);
        setAuth({
          ...auth,
          user: res.data.user, // Set user data in auth context
          token: res.data.token // Set token in auth context
        });
        localStorage.setItem("auth", JSON.stringify(res.data)); // Store auth data in local storage
        navigate( location.state ||"/"); // Navigate to login page on successful registration
      }else{
        toast.error(res.data.message);
      }
    }catch(error){
      console.log(error);
      toast.error("Something went wrong");
    }
  }

  return (
   <Layout Title={"Register"}>
      <div className='form-container'>
        <h1>Login</h1>


          <form onSubmit={handleSubmit}>
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
          type="password" 
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          required
          className="form-control" 
          id="exampleInputPassword1" 
          placeholder=" Enter Password" />
        </div>
        
        <button 
        type="submit" 
        className="btn btn-primary">
          Login
        </button>

        <div className="mb-3" style={{marginTop: '10px'}}>
         <button 
        type="button" className="btn btn-primary"
        onClick={() => navigate('/forgot-password')} // Navigate to forgot password page 
        >
          Forgot Password
        </button>
        </div>

      </form>

      </div>
    </Layout>
  )
}

export default Login