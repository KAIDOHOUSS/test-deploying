import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function ProtectedRoute({children,accessToken,refreshAccessToken}) {
const navigate = useNavigate()
//check Token 
useEffect(() =>{
    const checkToken = async () => {
 if (!accessToken) {
// try to refresh 
return     navigate('/login', { state: { from: window.location.pathname } });
const newToken = refreshAccessToken()
if (!newToken) {
    navigate('/login', { state: { from: window.location.pathname } });
} 
else{
    // verify from client side for expiration tiken 
   try {
              const payload = JSON.parse(atob(accessToken.split('.')[1]));
              const exp = payload.exp * 1000; // Convert to milliseconds
              if (Date.now() >= exp) {
                const newToken = await refreshAccessToken();
                if (!newToken) {
                  navigate('/login', { state: { from: window.location.pathname } });
                }
              }
            } catch (err) {
              navigate('/login', { state: { from: window.location.pathname } });
            }
}  
 }
    }
checkToken()
},[accessToken,navigate,refreshAccessToken])
  return accessToken ? children : null
}

export default ProtectedRoute