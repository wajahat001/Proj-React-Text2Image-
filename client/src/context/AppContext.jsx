<<<<<<< HEAD
import { createContext, useState, useEffect } from "react";

// Create the context for the app
export const AppContext = createContext();

const AppContextProvider = (props) => {
  // States
  const [user, setUser] = useState(null); // Initially, no user is logged in
  const [showLogin, setShowLogin] = useState(false);
  const [token, setToken] = useState(localStorage.getItem('token') || null); // Persist token or default to null
  const [credit, setCredit] = useState(false); // Example state for additional context
  const backendURL = import.meta.env.VITE_BACKEND_URL; // Backend URL from environment

  // Optional: Effect to handle token persistence changes (if you need to update the context token on localStorage changes)
  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token); // Update localStorage when token changes
    } else {
      localStorage.removeItem('token'); // Remove token if it's null
    }
  }, [token]);

  // The context value object that will be shared with children
=======
import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [user, setUser] = useState(null); //useStste is null because the user is not login yet
  const [showLogin, setShowLogin] = useState(false);

>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
  const value = {
    user,
    setUser,
    showLogin,
    setShowLogin,
<<<<<<< HEAD
    token,
    setToken,
    credit,
    setCredit,
    backendURL, // Environment variable with the backend URL
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
=======
  };
  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
>>>>>>> e03e37ca09562ba34e4f0708344523042d178c0e
  );
};

export default AppContextProvider;
