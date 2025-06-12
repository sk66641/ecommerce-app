import { useState,useContext,createContext, useEffect, use} from "react";

const AuthContext = createContext();




const AuthProvider = ({ children }) => {
const [auth, setAuth] = useState({
    user: null,
    token: "",
    });
useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    if (storedUser && storedToken) {
        setAuth({
            user: JSON.parse(storedUser),
            token: storedToken,
        });
    }
}
, [auth]);    
// Save auth state to localStorage whenever it changes
useEffect(() => {
    localStorage.setItem("user", JSON.stringify(auth.user));
    localStorage.setItem("token", auth.token);
}
, [auth]);      
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
        {children}
    </AuthContext.Provider> 
);
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth };
