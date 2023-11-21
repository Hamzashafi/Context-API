/* eslint-disable react/prop-types */
import React from "react";

import UserContext from "./UserContext";

const UserContextProvider = ({children}) => {
    /* API Calling/Access */
    const[user, setUser] = React.useState(null)  
    return(
        /* Api Access throw in here */
        <UserContext.Provider value={{user, setUser}}>  
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;