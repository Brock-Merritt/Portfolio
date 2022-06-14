import React from 'react'
import coverImage from '../../Assets/Screenshot 2022-01-16 190211.jpg'
import './index.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';

function About() {
  
  return (
    <div className="container" >
        <div className='bio'>
          My name is Brock Merritt, and I am a Fresh front-end web developer, utilizing background in communication to find and solve problems across the internet and in groups with lackluster cohesion. Recently certified in full stack development work from the UCF coding bootcamp, with knowledge and skills in JS,CSS, React, and various database languages. Specializing in back-end and overall project flow, as well as being able to present any new project/idea with less than a day of preparation, to any number of viewers. I worked with a team of 3 other people to create a single page MERN app that helps users relax, an out-of-the-box idea that shows the innovation and different thinking that my skills and mindset could bring to any web-development team. I have much experience with coaching and mentoring younger generations as well, being able to connect with people of different backgrounds and upbringings is a vital part of that role. I am excited to utilize my skill set in a progress driven industry.
          
        </div>
        <div className='links'>
          <a href="https://github.com/Brock-Merritt">
            <GitHubIcon style={{fontSize: 55 }}></GitHubIcon>
          </a>
          <a href="https://www.linkedin.com/in/brockmerritt/">
            <LinkedInIcon style={{fontSize: 55 }}></LinkedInIcon>
          </a>
          <a href="https://docs.google.com/document/d/1Z6oMehuoRsdIS8Tiu6D_gKl2YKis99pT2M_U48A7jWk/edit">
            <ArticleIcon style={{fontSize: 55 }}></ArticleIcon>
          </a>
        </div>
      

    </div>
  )
}

export default About