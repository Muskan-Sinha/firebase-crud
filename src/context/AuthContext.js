import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer";


const getUserFromLocalStorage = () => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      return user ? user : null;
    } catch (error) {
      console.error("Failed to parse user from localStorage:", error);
      return null;
    }
  };
  
  const INITIAL_STATE = {
    currentUser: getUserFromLocalStorage(),
  };
  
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  useEffect (() => {
    localStorage.setItem("user", JSON.stringify(state.currentUser) )
  }, [state.currentUser])

  return (
    <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
