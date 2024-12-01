import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/Navbar.css'

const Topbar = () => {
    function ToggleDarkmode(){
        const DMBTN = document.getElementById('LightDarkModeBTN');
        const Nav = document.getElementById('nav');
        Nav.classList.toggle("dark-mode");
        if(Nav.classList.contains('dark-mode')){
            DMBTN.textContent = 'Dark mode'
        }else{
            DMBTN.textContent = 'Light mode'
        }
    }
    
    
    function HideNav(){
        const Nav = document.getElementById('nav');
        const navcontainer = document.getElementById('nav-container');
        let lastScroll = 0;
        
        window.addEventListener('scroll',()=>{
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if(scrollTop > lastScroll){
                navcontainer.classList.add('sticky');
                Nav.style.height = "0px";
            }else{
                Nav.style.height = "70px";
                navcontainer.classList.remove('sticky');
            }
            lastScroll = scrollTop;
        })
    }
    useEffect(()=>{
        HideNav()
    },[])
    

    const [Tabacitve , setTabactive] = useState(0);

    function AutoSetTab(){
        setTabactive();
    }
  return (
    <div id='nav-container' className='nav-container'>
        <nav id='nav' className=''>
            <Link to={'/'}><div className='nav-left'>SupamitProfile</div></Link>
            <div className='nav-center'>
                <ul className='flex space-x-10'>
                    <li className='hover:text-4xl transition-all font-bold hover:cursor-pointer' onClick={(e)=>{window.scrollTo(0 , 911)}}>Aboutme</li>
                    <li className='hover:text-4xl transition-all font-bold hover:cursor-pointer' onClick={(e)=>{window.scrollTo(0 , 1822)}}>Projects</li>
                    <li className='hover:text-4xl transition-all font-bold hover:cursor-pointer' onClick={(e)=>{window.scrollTo(0 , 3644)}}>Contact Me</li>
                </ul>
            </div>
            <div className='nav-right space-x-5'>
                <Link to={'/login'}><button className='border-2 border-gray-700 px-5 rounded-xl transition-all bg-blue-500 hover:bg-blue-900' onClick={(e)=>{setTabactive(4)}}>Login</button></Link>
                {/* <button id='LightDarkModeBTN' className='LightDarkModeBTN' onClick={()=>{ToggleDarkmode()}}>Light mode</button> */}
            </div>
        </nav>     
    </div>
  )
}

export default Topbar