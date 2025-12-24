import {useState, createContext} from 'react'
//create the context
const AuthContext=createContext();

const AuthProvider = ({children}) => {

    const [isLoggedIn, setIsLoggedIn]=useState(
    !!localStorage.getItem('accessToken')) //check login or not using get the access token.
  return (
    <AuthContext.Provider value={{isLoggedIn,setIsLoggedIn}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
export {AuthContext};