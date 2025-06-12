import React ,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

const Spinners = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

    useEffect(() => {
      const interval = setInterval(() => {
        setCount((preValue) => --preValue);
      }, 1000);
      count === 0 && navigate('/Login');
      return () => clearInterval(interval);
    },[count,navigate]);
     
  return (
    <>
       <div className="d-flex justify-content-center align-items-center"
        style={{height: "100vh"}}>
          <h1 className='text-center'>
          Redirecting to Login Page in {count}  seconds
          </h1>
       <div className="spinner-border" role="status">
       <span className="visually-hidden">Loading...</span>
       </div>
       </div>

    </>
  )
}

export default Spinners