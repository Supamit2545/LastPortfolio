import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../assets/css/Project.css'
import ProjectsData from './ProjectsData.json'

const ProjectPage = () => {

  const [Projects , setProjects] = useState(ProjectsData);

  function ShowInfo(){
    const ProjectsCard = document.querySelectorAll('#Projects-Cards');
    const ProjectsInfo = document.querySelectorAll('.Projects-Card-info');
    const ProjectsIMG = document.querySelectorAll('.Project-Image');
    
    ProjectsCard.forEach((pc , index)=>{
      pc.addEventListener('mouseenter',()=>{
        ProjectsInfo[index].classList.add('active');
        ProjectsIMG[index].classList.add('blur-sm');
      })
      pc.addEventListener('mouseleave',()=>{
        ProjectsInfo[index].classList.remove('active')
        ProjectsIMG[index].classList.remove('blur-sm')
      })
    })

  }
  useEffect(()=>{
    ShowInfo()
  })
  
  return (
    <div className='Project-Container'>
      <div className="Project-Header">
        <p className='Project-Header-TopicText'>Projects</p>
      </div>
      <div className="Project-Body">
        <div className="Project-Contents">
          {Projects.map((pj,index)=>(
            <div id='Projects-Cards' key={index} className="Projects-Cards">
              <div className="Projects-Card-img"><img className='Project-Image transition-all' src={pj.image} alt="" width={0} height={0} property=''/></div>
              <div className="Projects-Card-info">
                <p className='Projects-Card-name'>{pj.name}</p>
                <div className='Projects-Card-details'>
                  <p>{pj.details}</p>
                  <Link to={pj.link}><button className='Project-Link-btn' >Live!</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectPage