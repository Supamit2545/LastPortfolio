import React from 'react'
import '../../assets/css/Announce.css'

import DoraReal from './DoraReal.jpg'

const Announce = () => {
  function UnderStood(){
    const AC = document.getElementById('AC');
    const ACB = document.getElementById('ACB');
    setTimeout(()=>{
      AC.classList.add('hidden');
    },2500)
    ACB.classList.add('Hide');
  }
  return (
    <div id='AC' className='announce-container'>
      <div id='ACB' className="announce-Box">
        <p className='text-red-500 text-3xl text-center font-bold underline'>Annouce</p>
        <div className='flex justify-evenly gap-20'> 
          <div  className='announce-Box-Left'>
            <ul>
              <p className='font-bold text-4xl'>{`(In progress)`}</p>
              <li className='InprogressLI'>Login Systems</li>
              <li className='InprogressLI'>Gmail Sender</li>
              <li className='InprogressLI'>Responsive</li>
            </ul>
          </div>
          <div className='announce-Box-Right'>
            <img src={DoraReal} alt="" width={150} height={150}/>
          </div>
        </div>
        <div className='text-center mt-10'>
          <button className='Announce-Understood-BTN' onClick={(e)=>{e.preventDefault , UnderStood()}}>Understood</button>
        </div>
      </div>
    </div>
  )
}

export default Announce