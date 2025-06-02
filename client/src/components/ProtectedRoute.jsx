import { useContext } from 'react'
import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from './AppContextProvider'
import axios from 'axios'

function ProtectedRoute({children}) {
  const {accessToken,setAccessToken,setError,setShowAlertError} = useContext(AppContext)
  const refreshAccessToken = async () =>{
     try {
      const response = await axios.post('/refresh',{},{withCredentials:true})
      console.log('trying to set new token ')
      setAccessToken(response.data)
      return response.data.accessToken     
       } catch (error) { 
        setError('session Expired pls login again')
        setShowAlertError(true)
        return null
     }
     finally{
      setTimeout(() => {
        setShowAlertError(false)
        setError('')
      }, 4000);
     }
    }
const navigate = useNavigate()
//check Token 
useEffect(() =>{
    const checkToken =async  () => {
 if (!accessToken) {
  console.log('no acess token')
// try to refresh 
const newToken =await  refreshAccessToken()
console.log('here after trying t refresh new token ')
if (!newToken) {
    navigate('/login', { state: { from: window.location.pathname } });
}
 }}
checkToken()
},[accessToken,navigate,refreshAccessToken])
  return accessToken ? children : null
}

export default ProtectedRoute