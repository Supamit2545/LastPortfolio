import React, { useEffect, useState } from 'react'
import '../../assets/css/aboutme.css'
import StackData from "./Stack.json"

import MyFace from '../../assets/Images/Aboutme/MyFace.jpg'
import Progressbar from '../../Components/Progressbar/Progressbar'

const AboutMepage = () => {

  const [tabType, setTabtype] = useState(1);
  const [FrontEnd, setFrontEnd] = useState(StackData.front_end);
  const [BackEnd, setBackend] = useState(StackData.back_end);
  const [Database, setDatabase] = useState(StackData.database);
  const [UXUI, setUXUI] = useState(StackData.uxui);
  const [tools, setTools] = useState(StackData.tools);

  function ShowNameStack() {
    const StackCard = document.querySelectorAll('#StackCard');
    const StackImg = document.querySelectorAll('#StackImg');
    const StackName = document.querySelectorAll('#StackName');

    StackCard.forEach((sc, index) => {
      setTimeout(() => {
        sc.classList.add("showed");
      }, index * 500);
      sc.addEventListener("mouseenter", () => {
        StackImg[index].classList.add("active");
        StackName[index].classList.add("active");
      });
      sc.addEventListener("mouseleave", () => {
        StackImg[index].classList.remove("active");
        StackName[index].classList.remove("active");
      });
    });
  }


  useEffect(() => {
    ShowNameStack()
  }, [])

  return (
    <div className='Aboutme-Container'>
      <div className="Aboutme-Content">
        <div className="Aboutme-Left">
          <div className="Profile">
            <div className="Profile-img-box">
              <img className='Profile-img' src={MyFace} alt='MyProfileIMG' width={0} height={0}></img>
            </div>
            <div className="Profile-text flex justify-between">
              <div>
                <p className='text-xl font-bold font-mono text-green-400'>Hello, my name is Supamit you can call me Act.</p>
                <p className='text-xl font-bold font-mono text-green-400'>While I do not have a bachelor{`'`}s degree , I have some skills in Front-End web development.</p>
                <p className='text-xl font-bold font-mono text-green-400'>I have a basic understanding of how websites work and how to use APIs.</p>
                <p className='text-xl font-bold font-mono text-green-400'>I am keen on creating user-friendly web interfaces and am always open to learning and improving my skills.</p>
              </div>
              <button className='Contitext text-green-500 '>{`>`}</button>
            </div>
          </div>
        </div>
        <div className="Aboutme-Right">
          <p className='Aboutme-Right-Header'>MySkills.</p>
          <div className="Aboutme-Type-btnbox">
            <button className={`Aboutme-Type-Btn ${tabType == 1 ? "active" : ""}`} onClick={(e) => { setTabtype(1), ShowNameStack() }}>Front-End</button>
            <button className={`Aboutme-Type-Btn ${tabType == 2 ? "active" : ""}`} onClick={(e) => { setTabtype(2), ShowNameStack() }}>Back-End</button>
            <button className={`Aboutme-Type-Btn ${tabType == 3 ? "active" : ""}`} onClick={(e) => { setTabtype(3), ShowNameStack() }}>Database</button>
            <button className={`Aboutme-Type-Btn ${tabType == 4 ? "active" : ""}`} onClick={(e) => { setTabtype(4), ShowNameStack() }}>UX|UI</button>
            <button className={`Aboutme-Type-Btn ${tabType == 5 ? "active" : ""}`} onClick={(e) => { setTabtype(5), ShowNameStack() }}>Tools</button>
          </div>
          <div className='Aboutme-Contents-Skill'>
            <div className={`Aboutme-Content-Skill ${tabType == 1 ? "active" : ""}`}>
              <div className='Stack-Table'>
                {FrontEnd.map((FE, index) => (
                  <div key={index} id='StackCard' className='Stack-Card'>
                    <div id='StackImg' className='stack-img'><img src={FE.img} alt="" width={125} height={125}/></div>
                    <div id='StackName' className='stack-name'>{FE.name}</div>
                  </div>
                ))}
              </div>
              <div className='Stack-Info'>
                {FrontEnd.map((FE, index) => (
                  <div key={index} className='flex justify-evenly items-center text-3xl space-y-3'>
                    <div className='flex space-x-2'>
                      <p className='w-20'>{FE.name}</p>
                    </div>
                    <div className='w-80'>
                      <Progressbar ProgressWidth={FE.RateNum} />
                    </div>
                    <div>
                      <p className='w-20'>{FE.RateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`Aboutme-Content-Skill ${tabType == 2 ? "active" : ""}`}>
              <div className='Stack-Table'>
                {BackEnd.map((BE, index) => (
                  <div key={index} id='StackCard' className='Stack-Card'>
                    <div id='StackImg' className='stack-img'><img src={BE.img} alt="" width={125} height={125} /></div>
                    <div id='StackName' className='stack-name'>{BE.name}</div>
                  </div>
                ))}
              </div>
              <div className='Stack-Info'>
                {BackEnd.map((BE, index) => (
                  <div key={index} className='flex justify-evenly items-center text-3xl space-y-3'>
                    <div className='flex space-x-2'>
                      <p className='w-20'>{BE.name}</p>
                    </div>
                    <div className='w-80'>
                      <Progressbar ProgressWidth={BE.RateNum} />
                    </div>
                    <div>
                      <p className='w-20'>{BE.RateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`Aboutme-Content-Skill ${tabType == 3 ? "active" : ""}`}>
              <div className='Stack-Table'>
                {Database.map((DB, index) => (
                  <div key={index} id='StackCard' className='Stack-Card'>
                    <div id='StackImg' className='stack-img'><img className='Stack-DB-img-picture' src={DB.img} alt="" width={125} height={125} /></div>
                    <div id='StackName' className='stack-name'>{DB.name}</div>
                  </div>
                ))}
              </div>
              <div className='Stack-Info'>
                {Database.map((DB, index) => (
                  <div key={index} className='flex justify-evenly items-center text-3xl space-y-3'>
                    <div className='flex space-x-2'>
                      <p className='w-36'>{DB.name}</p>
                    </div>
                    <div className='w-80'>
                      <Progressbar ProgressWidth={DB.RateNum} />
                    </div>
                    <div>
                      <p className='w-20'>{DB.RateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`Aboutme-Content-Skill ${tabType == 4 ? "active" : ""}`}>
              <div className='Stack-Table'>
                {UXUI.map((uxui, index) => (
                  <div key={index} id='StackCard' className='Stack-Card'>
                    <div id='StackImg' className='stack-img'><img className='Stack-img-picture' src={uxui.img} alt="" width={125} height={125}/></div>
                    <div id='StackName' className='stack-name'>{uxui.name}</div>
                  </div>
                ))}
              </div>
              <div className='Stack-Info'>
                {UXUI.map((uxui, index) => (
                  <div key={index} className='flex justify-evenly items-center text-3xl space-y-3'>
                    <div className='flex space-x-2'>
                      <p className='w-36'>{uxui.name}</p>
                    </div>
                    <div className='w-80'>
                      <Progressbar ProgressWidth={uxui.RateNum} />
                    </div>
                    <div>
                      <p className='w-20'>{uxui.RateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={`Aboutme-Content-Skill ${tabType == 5 ? "active" : ""}`}>
              <div className='Stack-Table'>
                {tools.map((tool, index) => (
                  <div key={index} id='StackCard' className='Stack-Card'>
                    <div id='StackImg' className='stack-img'><img className='Stack-img-picture' src={tool.img} alt="" width={125} height={125}/></div>
                    <div id='StackName' className='stack-name'>{tool.name}</div>
                  </div>
                ))}
              </div>
              <div className='Stack-Info'>
                {tools.map((tool, index) => (
                  <div key={index} className='flex justify-evenly items-center text-3xl space-y-3'>
                    <div className='flex space-x-2'>
                      <p className='w-36'>{tool.name}</p>
                    </div>
                    <div className='w-80'>
                      <Progressbar ProgressWidth={tool.RateNum} />
                    </div>
                    <div>
                      <p className='w-20'>{tool.RateText}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMepage