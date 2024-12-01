import React, { useEffect, useState } from 'react'
import "../../assets/css/Progressbar.css"
const Progressbar = ({ProgressWidth}) => {

    const [progress , setProgress] = useState(0)
    
    useEffect(()=>{
        setProgress(ProgressWidth)
    },[ProgressWidth])

    function getColor(){
        if(progress < 33){
         return "#ff0000"   
        }else if(progress < 66 ){
            return "#e4ff00"
        }else{
            return "#1fff00"
        }
    }
  return (
    <div className='PGB-Container'>
        <div className='PGB-Bar'>
            <div id='PBG-Bar-fill' className='PGB-Bar-fill' style={{width:`${progress}%` , backgroundColor:getColor()}}>
            </div>
        </div>
    </div>
  )
}

export default Progressbar