import React, { useEffect, useState } from 'react'
import '../../assets/css/Introduce.css'
import { TypeAnimation } from 'react-type-animation';

// import icon
import { MdNavigateNext } from "react-icons/md";
import { FaAngleDoubleDown } from "react-icons/fa";

const IntroPage = () => {
    const [ToggleModal, setToggleModal] = useState(false)
    const [Cate , setCate] = useState('')

    useEffect(()=>{
        console.log(Cate)
    },[Cate])

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
                        <button className='flex border-2 border-gray-700 px-5 py-4 rounded-2xl items-center text-4xl transition-all bg-red-700 hover:bg-red-900 hover:border-white' onClick={(e)=>{setToggleModal(!ToggleModal),setCate('Web')}}>I need a website <span className='Intro-Btn-icon'><MdNavigateNext /></span></button>
                        <button className='flex border-2 border-gray-700 px-5 py-4 rounded-2xl items-center text-4xl transition-all bg-blue-700 hover:bg-blue-900 hover:border-white' onClick={(e)=>{setToggleModal(!ToggleModal),setCate('Hire')}}>I{`'`}m Looking to hire <span className='Intro-Btn-icon'><MdNavigateNext /></span></button>
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
                                    <button className='Close-modal-btn' onClick={(e)=>{setToggleModal(!ToggleModal)}}>X</button>
                                    <div className={`${Cate == 'web' }`}>
                                        
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