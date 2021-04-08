import React, { useState } from 'react'
import data from '../experience'
import { FaAngleDoubleRight } from 'react-icons/fa'

const Experience = () => {
  const [jobs] = useState(data)
  const [value, setValue] = useState(0)

  // getting first job in the array
  const { title, dates, duties, company } = jobs[value];
  return (
    <section className='experience container' id='experience'>
      <h1 className='header__text'>Experience</h1>
      <hr className='big big-experience' />
      <div className="jobs__center">
        <div className="btn-container">
          {
            jobs.map((item, index) => {
              return <button key={item.id}
                onClick={() => setValue(index)}
                //if my index of the btn clicked matches the value(which is will, add active class to the btn)
                className={`btn-company ${index === value && 'active-btn'}`}>
                {item.company}
              </button>
            })
          }
        </div>

        {/* job info */}
        <article className="job__info">
          <h4>{title}</h4>
          <p className='company'>{company}</p>
          <p className='dates'>{dates}</p>
          {/* iterating over duties array */}
          {duties.map((duty, index) => {
            return (
              <div key={index} className='flex'>
                <FaAngleDoubleRight className='arrow-icon' />
                <p className='duties'>{duty}</p>
              </div>
            )
          })}
          <div className="btn-container">
            <button className='btn btn-info'>More Info</button>
          </div>

        </article>
      </div>

    </section>
  )
}

export default Experience
