import React from 'react'

const Services = () => {
  return (
    <section className='services'>
      <h1 className='header__text'>Services</h1>
        <hr className='big big-services'/>
    <div className="container services-container">
      <article className="card">
        <img class='service-icons' src='./images/developer.png' alt="mobile phone"/>
        <h4>Web Development</h4>
        <hr className="small"/>
        <p>I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.</p>
      </article>

      <article className="card">
        <img class='service-icons' src='./images/diamond.png' alt="diamond"/>
        <h4>Web Design</h4>
        <hr className="small"/>
        <p>I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.</p>
      </article>

      <article className="card">
        <img class='service-icons' src='./images/developer.png' alt="mobile phone"/>
        <h4>App Design</h4>
        <hr className="small"/>
        <p>I'm baby meditation tofu chillwave, distillery messenger bag thundercats chicharrones kale chips gochujang. Banh mi direct trade marfa salvia.</p>
    </article>
      </div>
    </section>
  )
}

export default Services
