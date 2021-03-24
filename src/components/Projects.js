import React from 'react'
import projects from '../projects'
import {FaGit, FaGithub} from 'react-icons/fa'

const Projects = () => {
  return (
    <section className='projects'>
      <div className="container projects__container">
      <h1 className='header__text'>Featured Projects</h1>
        <hr className="big"/>
      
        {projects.map((project) => {
          const {id, img, title, text, button1, button2} = project;
          return (
            <article className="projects__card">
            <div key={id}>
            <img src={img} style={{ width:'288px', height: '300px'}} alt=""/>
            <p className='project__number'>{`0${id}.`}</p>
            <h1 className='project__title'>{title}</h1>
            <p className='project__text'>{text}</p>
            <button className='btn2'>{button1}</button>
            <button className='btn2'>{button2}</button><br></br>
            <FaGithub/>
            </div>
          </article>
          )
        })}
      </div>
      <div className="btn-container">
      <button className='btn btn-projects'>Projects</button>
      </div>
    </section>
  )
}

export default Projects
