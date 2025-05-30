import React, { useState } from 'react'
import { PiStudentBold } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
function LoginPage() {
     const [loginForm,setLoginForm] = useState({username:'',password : ''})
    const handleChange = (e) =>{
    setLoginForm({...loginForm,[e.target.name] : e.target.value})
    }
  return (
    <main className='main-content'>
        <div className='container'>
            <div className="contact-grid ">
                <div className='login-main-pic-container'>
                <img className='login-main-pic' src="/ph/login.jpg" alt="" />
            </div>
          <div className="forms-container">
               <div className="contact-form-container">
            <form action="" className='contact-form'>
                <div className='teacher-image-placeholder'> <PiStudentBold/> </div>
                 <div className="form-group-log">
                 <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-log">
                 <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                 <button className="btn btn-primary">
                    login
                </button>
                <p>Create New Account <strong className='sign-up-link'><u>Sign up</u></strong></p>
            </form>
           </div>
            <div className="contact-form-container">
            <form action="" className='contact-form'>
               <div className='teacher-image-placeholder'> <RiAdminFill/> </div>
                 <div className="form-group-log">
                 <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={loginForm.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group-log">
                 <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={loginForm.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button className="btn btn-primary">
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