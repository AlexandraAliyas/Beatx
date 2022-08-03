import React, { useContext, useState, useEffect, createContext } from "react"
import { auth,signInWithEmail,createUserWithEmail,onAuthStateChange,onResetPassword} from "../firebase"

const AuthContext = createContext()
// const [children,setChildren] = useState()
export function useAuth() {
  // setChildren(child)
  return useContext(AuthContext)
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  const signup = (email, password) => 
    createUserWithEmail(auth,email, password)
  

  const login = (email, password) => 
    signInWithEmail(auth, email, password)
  

  // function logout() {
  //   return signOut(auth)
  // }

   function resetPassword(email) {
    return onResetPassword(auth, email)
  }

  // function updateEmail(email) {
  //   return currentUser.updateEmail(email)
  // }

  // function updatePassword(password) {
  //   return currentUser.updatePassword(password)
  // }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(auth,user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    // logout,
    resetPassword,
    //updateEmail,
    //updatePassword
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
