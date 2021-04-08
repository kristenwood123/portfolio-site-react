import React, { useState } from 'react'
import data from '../projects'
import { FaGithubSquare, FaShareSquare } from 'react-icons/fa'

const Projects = () => {

  const [projects, setProjects] = useState({
    data: data,
    show: true
  })

  const handleProjects = () => {
    setProjects({
      data: [],
      show: !projects.show
    })
  }

  return (
    <section className='projects' id='projects'>
      <div className="container projects__container">
        <h1 className='header__text'>Featured Projects</h1>
        <hr className="big" />

        {projects.data.map((project) => {
          const { id, img, title, text, button1, button2 } = project;
          return (
            <article className="projects__card" key={id}>
              <div className="project__overlay">
                <img src={img} className='project__img' alt="" />
              </div>
              <div className="project2__container">
                <p className='project__number'>{`0${id}.`}</p>
                <h1 className='project__title'>{title}</h1>
                <p className='project__text'>{text}</p>
                <div className="project__button__container">
                  <button className='btn2'>{button1}</button>
                  <button className='btn2'>{button2}</button><br></br>
                </div>
                <div className="project__icon-container">
                  <FaGithubSquare className='project__icon' />
                  <FaShareSquare className='project__icon' />
                </div>
              </div>
            </article>
          )
        })}
      </div>
      <div className="btn-container">
        <button className='btn btn-projects' onClick={handleProjects}> {projects.show ? 'Clear Projects' : 'Show Projects'}</button>
      </div>
    </section>
  )
}

export default Projects
