import React from 'react'
import projects from '../projects'

const Projects = () => {
  return (
    <section className='projects'>
      <h1>Featured Projects</h1>
        <hr className="big"/>
      <article className="projects__card">
        {projects.map((project) => {
          const {id, img, title, text, button1, button2} = project;
          return (
            <div key={id}>
            <img src={img} style={{ width:'400px'}}alt=""/>
            <h1>{title}</h1>
            <p>{text}</p>
            <button>{button1}</button>
            <button>{button2}</button>
            </div>
          )
        })}
      </article>
    </section>
  )
}

export default Projects
