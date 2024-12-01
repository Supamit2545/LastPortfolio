'use client'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../../../assets/css/LoginPage.css"

const LoginPage = () => {
    function ActiveUnderline(){
        const ResetPass = document.getElementById('forgot-pass');
        const undertab = document.getElementById('underline-c');

        ResetPass.addEventListener('mouseenter',()=>{
            undertab.classList.add('active');
        })
        
        ResetPass.addEventListener('mouseleave',()=>{
            undertab.classList.remove('active');
        })
    }
    useEffect(()=>{
        ActiveUnderline()
    },[])
  return (
    <div className='Login-Container'>
        <div className="Login-box">
            <p className='text-center text-5xl font-bold font-mono pt-5 underline'>Sign In</p>
            <img className='LoginIcon' src="/Assets/Images/Auth/Login/LoginIcon.png" alt="" width={150} height={150}/>
            <div className='space-y-5'>
                <div className=' relative'>
                    <input className='Login-form-input' type="email" name="" id="" required/>
                    <p className='Login-form-text'>Email</p>
                </div>
                <div className=' relative'>
                    <input className='Login-form-input' type="password" name="" id="password" required/>
                    <p className='Login-form-text'>Password</p>
                </div>
                <div className='forgot-pass-box'>
                    <Link to={'#'}><p id='forgot-pass' className='forgot-pass'>Forgot Password?</p><p id='underline-c' className='underline-c'></p></Link>
                </div>
                <div className='Other-Login-Options'>
                    <button className='Gmail-Login-BTN'><img className='rounded-full' src="/Assets/Images/Auth/Login/GmailLoginBTN.png" alt=""  width={50} height={50}/><p>Gmail</p></button>
                </div>
            </div>
            <div className='AuthOptions'>
                <Link to={'/'}><button className='CancleBTN'>Back to Home</button></Link>
                <button className='LoginBTN'>Login</button>
                <Link to={'/register'}><button className='RegisterBTN'>Go to Register</button></Link>
            </div>
        </div>
    </div>
  )
}

export default LoginPage