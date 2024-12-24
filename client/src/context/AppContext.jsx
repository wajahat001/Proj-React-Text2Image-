import { createContext } from "react";
import { useState } from "react";
export const AppContext = createContext()


const AppContextProvider = (props) =>{
    const [user, setUser] = useState(null); //useStste is null because the user is not login yet
    const [showLogin, setShowLogin] = useState(false);

    const value = {
        user, setUser , showLogin , setShowLogin
    }
    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider