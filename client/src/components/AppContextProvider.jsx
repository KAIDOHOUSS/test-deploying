import axios from 'axios'
import React, { createContext, useState } from 'react'
export const AppContext = createContext(null)
function AppContextProvider({children}) {
const [message,setMessage] = useState('')
const [loading,setLoading] = useState(false)
const [showAlertError,setShowAlertError] = useState(false)
const [showAlert,setShowAlert] = useState(false)
const [accessToken,setAccessToken] = useState('')
const [error,setError] = useState('')
  return <AppContext.Provider value={{loading,setLoading,message,
  setMessage,showAlert,setShowAlert,error,setError,
  accessToken,setAccessToken,showAlertError,setShowAlertError}}>
    {children}
  </AppContext.Provider>
}
export default AppContextProvider