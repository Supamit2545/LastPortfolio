'use client'
import React, { useEffect, useState , useCallback } from 'react'
import '../../../assets/css/Register.css'
import { Link } from 'react-router-dom'
import Progressbar from '../../../Components/Progressbar/Progressbar'

const RegisterPage = () => {
  const [CPLT, setCPLT] = useState([])
  const [PSCN, setPSCN] = useState(0)
  const [Password, setPassword] = useState();
  const [Conpassword, setConpassword] = useState();
  const [CheckPassList, setCheckPassList] = useState([{
    HaveNumber: false,
    HaveSymbols: false,
    HaveMoreEight: false,
    HaveCapL: false,
    HaveLwL: false
  }])


  function CheckPatternPassword() {
    const passcheck = document.getElementById('input-psw').value;

    const hasNumber = /\d/.test(passcheck)
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(passcheck)
    const isLongEnough = passcheck.length >= 8;
    const hasCapL = /[A-Z]/.test(passcheck)
    const hasLowL = /[a-z]/.test(passcheck)

    setCheckPassList((prevState) => [
      {
        ...prevState[0],
        HaveNumber: hasNumber,
        HaveSymbols: hasSymbols,
        HaveMoreEight: isLongEnough,
        HaveCapL: hasCapL,
        HaveLwL: hasLowL
      },
    ]);

  }

  const ChangePCSIMG = useCallback(() => {
    const pcsimg = document.getElementById('pcsimg');

    if (CPLT.length < 1) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/EmptyPass.png';
    } else if (CPLT.length === 1) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/Passbaby.gif';
    } else if (CPLT.length === 2) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/psw-checker-img.webp';
    } else if (CPLT.length === 3) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/Strong.jpg';
    } else if (CPLT.length === 4) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/PhuThoutao.gif';
    } else if (CPLT.length === 5) {
      pcsimg.src = '/Assets/Images/Auth/Register/PassCheck/Superman.gif';
    }
  }, [CPLT]);

  function CheckSamePassword() {
    if(!Password){
      alert('Please enter your password.');
    }else{
      if (Conpassword === Password) {
        alert('Password Matched');
      } else {
        alert('Password not Match');
      }
    }
  }

  useEffect(() => {
    CheckPatternPassword()
  },[Password])

  useEffect(() => {
    setCPLT(Object.keys(CheckPassList[0]).filter((key) => CheckPassList[0][key] === true))
  },[CheckPassList])

  useEffect(() => {
    setPSCN(20 * CPLT.length)
    ChangePCSIMG()
  }, [CPLT,ChangePCSIMG])

  return (
    <div className='Register-Container'>
      <div className="Register-Box">
        <p className='text-center text-5xl font-bold text-white underline pt-5'>Sign Up</p>
        <div className='flex justify-between gap-10' >
          <div className='Options'>
            <Link className='text-center' to={'/'}><button className='BTH-Button'>Back to Home</button></Link>
            <Link className='text-center' to={'/Login'}><button className='BTL-Button'>Back to Login</button></Link>
          </div>
          <form className='Show-Register-form space-y-10'>
            <div className='flex space-x-5 mt-10'>
              <div className="w-full relative text-center">
                <input className='Register-form-input' type="text" name="" id="input-email" required />
                <p className='Register-form-text'>Email</p>
              </div>
            </div>
            <div className='space-y-10'>
              <div className="passinpbox w-full relative text-center">
                <input className='Register-form-input' type="password" name="" id="input-psw" required onChange={(e) => { setPassword(e.target.value) }} />
                <p id="input-psw-TEXT" className='Register-form-text'>Password</p>
              </div>
              <div className="conpassinpbox w-full relative text-center">
                <input className='Register-form-input' type="password" name="" id="input-conpsw" required onChange={(e) => { setConpassword(e.target.value) }} />
                <p id='input-conpsw-text' className='Register-form-text'>Confirm Password</p>
              </div>
            </div>
            <div className='text-center'>
              <button className='Register-Submit-btn' onClick={(e) => { e.preventDefault(), CheckSamePassword() }}>Register</button>
            </div>
          </form>
          <div className='Password-Strong-Check pr-5'>
            <img className='mx-auto my-10' id='pcsimg' src="" alt="" width={150} height={150}/>
            <p className='text-white font-bold'>Password strength check</p>
            <Progressbar ProgressWidth={PSCN} className='' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage