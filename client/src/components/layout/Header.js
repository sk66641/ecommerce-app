import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useAuth } from '../../context/Auth'  
import toast from 'react-hot-toast' // Importing toast for notifications

const Header = () => {
  const {auth,setAuth} = useAuth(); // Accessing authentication state from context
  const handleLogout= ()=>{
    setAuth({
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");  // Clear auth data from local storag
    toast.success("Logout Successfully"); // Show success notification
  }
  return (
    <>
  <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <Link to="/" className="navbar-brand" >
       🛒ECOMMERCE-APP
      </Link>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/"  className="nav-link">
          Home
          </NavLink>
          </li>
           <li className="nav-item">
          <NavLink to="/ Category" className="nav-link" >
          Category
          </NavLink>
        </li>
       {
        !auth.user ?(<>
         <li className="nav-item">
          <NavLink to="/Register" className="nav-link" href="#">
          Register
          </NavLink>
        </li>
         <li className="nav-item">
          <NavLink to="/Login" className="nav-link" href="#">
          Login
          </NavLink>
        </li>
        </>) :(<>
         <li className="nav-item">
          <NavLink onClick={handleLogout} to="/Login" className="nav-link" href="#">
          LogOut
          </NavLink>
        </li>
        </>)
       }
         <li className="nav-item">
          <NavLink to="/Cart" className="nav-link" href="#">
          Cart(0)
          </NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>

    </>
  )
}

export default Header