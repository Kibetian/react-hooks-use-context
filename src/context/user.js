import React, { useState } from "react";
const UserContext =React.createContext()

function UserProvider({children}) {
const [user, setuser] = useState(null)
    
    return (
    <UserContext.Provider value={{user, setuser}}>{children}</UserContext.Provider>)
}

export {UserContext, UserProvider};