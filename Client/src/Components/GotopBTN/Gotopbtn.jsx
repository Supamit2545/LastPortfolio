import React, { useEffect, useState } from 'react'
import '../../assets/css/Gotopbtn.css'

const Gotopbtn = () => {

    function GTop() {
        window.scrollTo(0, 0);
    }

    useEffect(()=>{
        const ShowBTN = () => {
            const GotopBTN = document.getElementById('GotopBTN');
            const top = window.pageYOffset;
    
            if (top > 150) {
                GotopBTN.classList.remove('hidden');
            } else {
                GotopBTN.classList.add('hidden');
            }
        };
    
        window.onscroll = ShowBTN;    
    },[])
    return (
        <div>
            <button id='GotopBTN' className='gotopbtn hidden' onClick={GTop}>Go Top</button>
        </div>
    )
}

export default Gotopbtn