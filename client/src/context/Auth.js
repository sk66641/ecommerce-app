import { useState,useContext,createContext, useEffect, use} from "react";

const AuthContext = createContext();




const AuthProvider = ({ children }) => {
const [auth, setAuth] = useState({
    user: null,
    token: "",
    });
// useEffect(() => {
//     const storedAuth = localStorage.getItem("auth");
//     if (storedAuth) {
//         setAuth(JSON.parse(storedAuth));
//     }
// }, [auth]);
//there is some error in the above code, it should not depend on auth, it should be empty array

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider> 
);
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };
