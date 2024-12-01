'use client'
import React, { useEffect, useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import '../../assets/css/Contacts.css';
import ContactData from './Contact.json'

const ContactsPage = () => {
    const [active, setActive] = useState(0);
    const [ConData, setConData] = useState(ContactData);
    const [RPFW, setRPFW] = useState([]);
    const [FNFW, setFNFW] = useState([]);
    const [isLogin, setIsLogin] = useState(1);
    const [username , setUsername] = useState('');
    const [PLusername , setPLUsername] = useState(username);

    function HoverLoginBTN(){
        const LoginBTN = document.getElementById('loginbtn');
        const bgLogBTN = document.getElementById('bgLogbtn');
        const textLogBTN = document.getElementById('textLogbtn');
        
        LoginBTN.addEventListener("mouseenter",()=>{
            bgLogBTN.classList.add('active');
            textLogBTN.classList.add('active');
        })
        LoginBTN.addEventListener("mouseleave",()=>{
            bgLogBTN.classList.remove('active');
            textLogBTN.classList.remove('active');
        });
    }
    function activeInputsender(){
        const inputSender = document.querySelectorAll('#email-sender-input');
        const TexttSender = document.querySelectorAll('#email-sender-text');

        inputSender.forEach((Is,index)=>{
            Is.addEventListener("focus",()=>{
                TexttSender[index].classList.add('active')
            })
        })

    }
    function CheckUsername(){
        if(!PLusername){
            setUsername('Empty');
        }else{
            setUsername(PLusername);
        }
    }
    function ChanngeBGColor(index , color){
        const socialCard = document.querySelectorAll('#S-Card');
        const CDText = document.querySelectorAll('#CDText');

        socialCard.forEach((sc,index)=>{
            sc.addEventListener("mouseenter",()=>{
                CDText[index].style.background = color
            })
            sc.addEventListener("mouseleave",()=>{
                CDText[index].style.background = 'black'
            })
        })
        
    }
    useEffect(()=>{
        if(!isLogin){
            HoverLoginBTN()
            activeInputsender()
        }
        CheckUsername()
    })
    return (
        <div className='Contact-Container'>
            <p className='Contact-Text'>CONTACT</p>
            <div className="Contact-Content">
                <div className="Contact-Content-left">
                    <button className={`Contact-Btn ${active == 1 ? "active" : ""}`} onClick={(e) => { setActive(1) }}>Social</button>
                    <button className={`Contact-Btn ${active == 2 ? "active" : ""}`} onClick={(e) => { setActive(2) }}>Fastwork</button>
                    <button className={`Contact-Btn ${active == 3 ? "active" : ""}`} onClick={(e) => { setActive(3) }}>SendEmail</button>
                </div>
                <div className='Contact-Content-right'>
                    <div className={`Contact-Info ${active == 0 ? "active" : ""}`}>
                        <div>
                            <img src="/" alt="" width={0} height={0}/>
                        </div>
                        <div>
                            <TypeAnimation
                                sequence={[
                                    'Thank you for visiting this website.',
                                    1000,
                                    'I hope you enjoy this website.',
                                    1000
                                ]}
                                wrapper="span"
                                speed={50}
                                style={{ fontSize: '2em', display: 'inline-block' }}
                                repeat={Infinity}
                            />
                        </div>
                    </div>
                    <div className={`Contact-Info ${active == 1 ? "active" : ""}`}>
                        <div className='social'>
                            {ConData.map((CD, index) => (
                                <div id='S-Card' className='Contact-info-card' key={index} onMouseEnter={(e)=>(ChanngeBGColor(index , CD.color))}>
                                    <a className='' href={CD.link}>
                                        <div className='Contact-Info-img'>
                                            <img src={CD.img} alt="" width={0} height={0}/>
                                        </div>
                                        <div id='CDText' className='Contact-Info-name'>
                                            <p>{CD.name}</p>
                                        </div>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={`Contact-Info ${active == 2 ? "active" : ""}`}>
                        <div className='fw-container'>
                            <div className='fw-profile-box'>
                                <div className="fw-profile">
                                    <img className='fw-profile-img' src="/Assets/Images/Aboutme/profile.jpg" alt="" width={200}  height={5}/>
                                    <div className='fw-profile-name'>
                                        <p className='text-black text-center font-bold text-3xl mt-5'>Supamit</p>
                                        <div className='text-center text-gray-500 text-3xl'>★ ★ ★ ★ ★</div>
                                        <p className='fw-profile-verify'>Verified FreeLance</p>
                                    </div>
                                    <div className='flex font-bold justify-between mt-5'>
                                        <p className='text-black'>เป็นสมาชิกเมื่อ</p>
                                        <p className='text-blue-700'>28 มกราคม 2024</p>
                                    </div>
                                    <div className='fw-profile-info'>
                                        <p>{`รับเขียนเว็บเบื้องต้น =>Html,Php,Python,Css Next.js เชื่อมต่อ Database => MySQL แชทบอท => สำหรับ FaceBook , Line Node.js ราคาขึ้นอยู่กับความยากของงาน  `}</p>
                                    </div>
                                    <p className='fw-gray-line'></p>
                                    <div className='fw-profile-info2 space-y-5'>
                                        <p className='text-blue-600 font-bold'>ทักษะความสามารถ</p>
                                        <div className='fw-profile-info2-box flex justify-between'>
                                            <p className='text-black'>Web App</p>
                                            <span className='px-2 py-0.5 bg-blue-400 text-blue-800 rounded-lg font-bold'>ระดับปานกลาง</span>
                                        </div>
                                        <div className='fw-profile-info2-box flex justify-between'>
                                            <p className='text-black'>Photoshop</p>
                                            <span className='px-2 py-0.5 bg-blue-400 text-blue-800 rounded-lg font-bold'>ระดับปานกลาง</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='fw-rightbox'>
                                <p className='text-center font-bold font-mono text-2xl underline'>Recents Projects</p>
                                <div className='fw-Recent'>
                                    <div className='fw-recent-list'>
                                        {RPFW.length > 0 ? (
                                            RPFW.map((rp, index) => (
                                                <div key={index} className='fw-recent-list-item'>
                                                    <p>{rp.name}</p>
                                                    <p>{rp.detail}</p>
                                                    <p>{rp.date}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className='fw-recent-list-item'>
                                                <p className=''>Empty</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <p className='text-center font-bold font-mono text-2xl underline'>Finished Projects</p>
                                <div className='fw-finish'>
                                    <div className='fw-finish-list'>
                                        {FNFW.length > 0 ? (
                                            FNFW.map((fn, index) => (
                                                <div key={index} className='fw-finish-list-item'>
                                                    <p>{fn.name}</p>
                                                    <p>{fn.detail}</p>
                                                    <p>{fn.date}</p>
                                                </div>
                                            ))
                                        ) : (
                                            <div className='fw-finish-list-item'>
                                                <p className='fw-finish-list-item'>Empty</p>

                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                    <div className={`Contact-Info ${active == 3 ? "active" : ""}`}>
                        {isLogin == true ? (
                            <div className="email-sender-container">
                                <p className='text-center font-bold text-4xl underline'>Email Sender</p>
                                <div className='email-sender-Subject'>
                                    <input  className='email-sender-input' type="text" name="" id="email-sender-input" value={username} readOnly valied/>
                                    <p id='email-sender-text' className='email-sender-input-text transition-all'>Name</p>
                                </div>
                                <div className='email-sender-Subject'>
                                    <input className='email-sender-input' type="text" name="" id="email-sender-input" required />
                                    <p id='email-sender-text' className='email-sender-input-text transition-all'>Subject</p>
                                </div>
                                <div className=''>
                                    <textarea className='email-sender-detailinput transition-all' name="" id="" placeholder='Type detail here . . .' required></textarea>
                                </div>
                                <div>
                                    <button className='email-submit-btn'>Submit</button>
                                </div>
                            </div>
                        ):(
                            <div className=' space-y-10'>
                                <p className='please-login-text'>Please Login to send Email!!</p>
                                <Link href={'../../Routes/Auth/Login'}><button id='loginbtn' className='Email-Login-BTN'><p className='bgEmail-Login-BTN' id='bgLogbtn'><span id='textLogbtn' className='Email-Login-BTNtext'>Login</span></p></button></Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactsPage