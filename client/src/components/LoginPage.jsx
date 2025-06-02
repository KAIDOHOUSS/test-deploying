import React, { useContext, useState } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import Lazyload from 'react-lazyload';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Alert  from '../Styling/Alert';
import {AppContext} from './AppContextProvider';
function LoginPage() {
    const navigate = useNavigate()
    const [loginFormEt,setloginFormEt] = useState({username:'',password : ''})
    const [loginFormAd,setloginFormAd] = useState({username:'',password : ''})
    const {loading,setLoading,message,setMessage,showAlert,setShowAlert,error,setError,setAccessToken,showAlertError,setShowAlertError} = useContext(AppContext)
    const handleChangeEt = (e) =>{
    setloginFormEt({...loginFormEt,[e.target.name] : e.target.value})}
    const handleChangeAd = (e) =>{
    setloginFormAd({...loginFormAd,[e.target.name] : e.target.value})}

   const handleLogin =async (e) =>{
    e.preventDefault()
    setLoading(true)
    setError('')
    setMessage('')
    setShowAlertError(false)
    setShowAlert(false)
   try {
    const response = await axios.post('/login',loginFormEt,{withCredentials:true })
    const accessToken = response.data
    setAccessToken(accessToken)
    setMessage('you have logged in successfully')
    setShowAlert(true)
   if (window.history.length > 2) {
    navigate(-1);
  } else {
    navigate('/'); // fallback to home page
  }
  console.log(response.data);
   } catch (error) {
   if(error.status!==401){ 
    setError(' Something went Wrong')
  return  setShowAlertError(true)
  }
   setError('invalid user')
   setShowAlertError(true)
   }finally{
  setLoading(false)
  setloginFormEt(prev => ({...prev,password:''}))
  setTimeout(() => {
    setShowAlert(false)
    setShowAlertError(false)
  }, 4000);
  console.log(message);
   }
   }
    
  return (
    
    <main className='main-content'>
        <div className='container'>
            <div className="contact-grid ">
                <div className='login-main-pic-container'>
                  <Lazyload>
                    <img className='login-main-pic' src="/ph/login.jpg" alt="logi-main-page"/>
                  </Lazyload>
            </div>
          <div className="forms-container">
            {/* student form */}
               <div className="contact-form-container">
            <form className='contact-form' onSubmit={handleLogin}>
                <div className='teacher-image-placeholder'> <PiStudentBold/> </div>
                 <div className="form-group-log">
                 <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginFormEt.username}
                    onChange={handleChangeEt}
                    required
                  />
                </div>
                <div className="form-group-log">
                 <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginFormEt.password}
                    onChange={handleChangeEt}
                    required
                  />
                </div>
                 <button className="btn btn-primary" type='submit' disabled={loading}>
                    login
                </button>
                <p>Create New Account <strong className='sign-up-link'><u>Sign up</u></strong></p>
            </form>
           </div>
           { /*  admin form  */ }
            <div className="contact-form-container">
            <form action="" className='contact-form'>
               <div className='teacher-image-placeholder'> <RiAdminFill/> </div>
                 <div className="form-group-log">
                 <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginFormAd.username}
                    onChange={handleChangeAd}
                    required
                  />
                </div>
                <div className="form-group-log">
                 <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginFormAd.password}
                    onChange={handleChangeAd}
                    required
                  />
                </div>
                <button className="btn btn-primary" disabled>
                    login
                </button>
            </form>
           </div>
          </div>
           
            </div>
        </div>
        <div style={{height:'100px'}}></div>
    </main>
  )
}

export default LoginPage