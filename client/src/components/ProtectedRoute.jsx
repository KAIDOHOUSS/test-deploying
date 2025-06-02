import  { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children,accessToken,refreshAccessToken}) {
const navigate = useNavigate()
//check Token 
useEffect(() =>{
    const checkToken =  () => {
 if (!accessToken) {
// try to refresh 
const newToken = refreshAccessToken()
if (!newToken) {
    navigate('/login', { state: { from: window.location.pathname } });
} 

 }
    }
checkToken()
},[accessToken,navigate,refreshAccessToken])
  return accessToken ? children : null
}

export default ProtectedRoute