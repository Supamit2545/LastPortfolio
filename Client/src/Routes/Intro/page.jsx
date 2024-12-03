import React, { useEffect, useState } from 'react'
import '../../assets/css/Introduce.css'
import { TypeAnimation } from 'react-type-animation';

// Mui
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


// import icon
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

const IntroPage = () => {
    const [ToggleModal, setToggleModal] = useState(false)
    const [Cate, setCate] = useState('')

    function AcitveModal(toggle) {
        setToggleModal(!ToggleModal);
    }

    function AutoShowDownArrorw() {
        const DownAarBTN = document.getElementById('Intro-Scroll-Down');
        const DownArr = document.getElementById('Down-Arrow');

        DownAarBTN.addEventListener('mouseenter', () => {
            DownArr.classList.remove('hidden')
        });

        DownAarBTN.addEventListener('mouseleave', (e) => {
            DownArr.classList.add('hidden');
        });
    }
    function Scrolldown() {
        window.scrollTo(0, 911);
    }

    function ActiveFrontInp(index){
        const Hinp = document.querySelectorAll('#Hire-inp');
        const HBinp = document.querySelectorAll('#Hire-Binp');

        Hinp.forEach((HI, index) => {
            HI.addEventListener('focus', () => {
                HBinp[index].classList.add('active');
            });
            HI.addEventListener('blur', () => { // ใช้ blur เพื่อลบ class เมื่อ focus ถูกยกเลิก
                HBinp[index].classList.remove('active');
            });
        });
    }

    useEffect(() => {
        AutoShowDownArrorw()
    }, [])

    return (
        <div className='Introduce-Container'>
            <div className="Introduce-Content">
                <div className='Introduce-BG'></div>
                <div className='Introduce-Content-left'>
                    <div className=' space-y-10'>
                        <p className='Intro-Left-Text1'>WELCOME TO MY WEBSITE.</p>
                        <div className='flex space-x-2 justify-center text-3xl'>
                            <p className='Intro-Left-Text2'>I{`'`}m : </p>
                            <div id='TextType' className='text-green-500 font-bold text-center'>
                                <TypeAnimation
                                    sequence={[
                                        `Front-End Developer.`,
                                        1800,
                                        `Back-End Developer.`,
                                        2200,
                                    ]}
                                    wrapper='span'
                                    speed={50}
                                    repeat={Infinity}
                                    style={{ fontSize: '2em' }}
                                />
                            </div>
                        </div>
                        <p className='Intro-Left-Text3'> Hello ! , I combine beautiful design with seamless functionality to deliver exceptional user experiences. From building eye-catching websites to managing efficient back-end systems, I bring every project to life with precision.</p>
                    </div>
                    <div className=' flex mt-10 justify-center space-x-10'>
                        <button className='flex border-2 border-gray-700 px-5 py-4 rounded-2xl items-center text-4xl transition-all bg-red-700 hover:bg-red-900 hover:border-white' onClick={(e) => { setToggleModal(!ToggleModal), setCate('Web') }}>I need a website <span className='Intro-Btn-icon'><MdNavigateNext /></span></button>
                        <button className='flex border-2 border-gray-700 px-5 py-4 rounded-2xl items-center text-4xl transition-all bg-blue-700 hover:bg-blue-900 hover:border-white' onClick={(e) => { setToggleModal(!ToggleModal), setCate('Hire') }}>I{`'`}m Looking to hire <span className='Intro-Btn-icon'><MdNavigateNext /></span></button>
                    </div>
                    <div className='mt-40'>
                        <button id='Intro-Scroll-Down' className='Intro-Scroll-Down mt-auto' onClick={Scrolldown}>Scroll down to about me.<FaAngleDoubleDown id='Down-Arrow' className='mx-auto transition-all hidden' onClick={Scrolldown} /></button>
                    </div>
                </div>
                <div className="Introduce-Content-right">
                    <p></p>
                </div>
            </div>
            <div>
                {ToggleModal && (
                    <div>
                        <div className="modal-container">
                            <div className="modal-overlay">
                                <div className="modal-contect">
                                    <button className='Close-modal-btn' onClick={(e) => { setToggleModal(!ToggleModal) }}>X</button>
                                    <div className={`ModalCon ${Cate == 'Web' ? "active" : ""}`}>
                                        <div className='Modal-Web-Content'>
                                            <div className='flex'>
                                                <div className="Modal-Web-Left">
                                                    <form className='space-y-5'>
                                                        <div className='flex gap-5'>
                                                            <input className='Modal-web-inp' type="text" name="" id="" placeholder='First Name' />
                                                            <input className='Modal-web-inp' type="text" name="" id="" placeholder='Last Name' />
                                                        </div>
                                                        <div className='flex gap-5'>
                                                            <input className='Modal-web-inp' type="email" name="" id="" placeholder='Email' />
                                                            <input className='Modal-web-inp' type="tel" name="" id="" placeholder='Tel.' />
                                                        </div>
                                                        <div>
                                                            <select className='Modal-web-Cate' name="" id="">
                                                                <option value="Front">Front Only</option>
                                                                <option value="Back">Back Only</option>
                                                                <option value="Full">Full-Stack</option>
                                                            </select>
                                                        </div>
                                                        <div className='flex text-center font-bold space-x-10 items-center'>
                                                            <p>Already has Draft?</p>
                                                            <FormControl>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                >
                                                                    <FormControlLabel value="female" control={<Radio />} label="Yes" />
                                                                    <FormControlLabel value="No" control={<Radio />} label="No" />
                                                                </RadioGroup>
                                                            </FormControl>

                                                        </div>
                                                        <div>
                                                            <textarea className='Modal-web-textarea' name="" id="" placeholder='Type Detail ...'></textarea>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div className="Modal-Web-Right">
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                    <img src="" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`ModalCon ${Cate == 'Hire' ? "active" : ""}`}>
                                        <div className='Modal-Hire-Content'>
                                            <div className='Modal-Hire-Left'>
                                                <form className='flex flex-col space-y-5' action="">
                                                    <div className='flex items-center'>
                                                        <p id='Hire-Binp' className='ArrowBHI'><FaArrowAltCircleRight /> </p>
                                                        <input className='Modal-Hire-inp' type="text" name="" id="Hire-inp" placeholder='Enter Your Email'  onFocus={ActiveFrontInp}/>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p id='Hire-Binp' className='ArrowBHI'><FaArrowAltCircleRight /></p>
                                                        <input className='Modal-Hire-inp' type="tel" name="" id="Hire-inp"  placeholder='Tel.' onFocus={ActiveFrontInp}/>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p id='Hire-Binp' className='ArrowBHI'><FaArrowAltCircleRight /></p>
                                                        <input className='Modal-Hire-inp' type="text" name="" id="Hire-inp" placeholder='What Role ?' onFocus={ActiveFrontInp}/>
                                                    </div>
                                                    <div className='flex items-center'>
                                                        <p id='Hire-Binp' className='ArrowBHI'><FaArrowAltCircleRight /></p>
                                                        <input className='Modal-Hire-inp' type="number" name="" id="Hire-inp" placeholder='Salary' onFocus={ActiveFrontInp}/>
                                                    </div>
                                                    <div>
                                                        <p>How many days a week does the company work?</p>
                                                        <input className='Modal-Hire-inp' type="text" name="" id="" placeholder='Day'/>
                                                    </div>
                                                    <textarea className='Modal-Hire-textarea ml-10' name="" id="" placeholder='More Details...'></textarea>
                                                    <button className='Modal-Hire-submitBTN'>Submit form</button>
                                                </form>
                                            </div>
                                            <div className='Modal-Hire-Right'>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default IntroPage