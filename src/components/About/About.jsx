import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
<section className={`${style['about-section']}`} id="about" data-aos="fade-up" data-aos-duration={1000}>
  <div className="container">
    <div className='sectionTitleEditFlex'>
      <h2 className='absoluteAndColor Bigsize'>about me</h2>
      <h3 className='absoluteAndColor smallSize'>about me</h3>
    </div>
    <p className="paraFont">know me more</p>
    <div className={`flexBox ${style['about-content']}`}>
      <div className={`${style['about-content-para']}`}>
        <p className={`${style['first-para']}`}>hi i'm <span className={`${style['first-para-span']}`}>mohammad halaweh</span></p>
        <p className={`${style['second-para']}`}>I'm a designer &amp; developer with a passion for web design. I enjoy developing
          simple, clean and slick websites that provide real value to the end user. Thousands of clients
          have procured exceptional results while working with me. Delivering work within time and budget
          which meets client’s requirements is our moto.</p>
      </div>
      <div className={`${style['about-content-logo']}`}>
        <div className={`${style['about-content-logo-number']}`}>
        </div>
        <div className={`${style['about-content-logo-number-para']}`}>
          <p>years of <b>experiance</b></p>
        </div>
      </div>
    </div>
    <div className={`flexBox ${style['about-informations']}`}>
      <div>
        <p className={`${style['title']}`}>name:</p>
        <p className={`${style['info']}`}>mohammad halaweh</p>
      </div>
      <div>
        <p className={`${style['title']}`}>email:</p>
        <p className={`${style['info']}`}><a href="mailto:mohammad.halaweh11@gmail.com">cr7@gmail.com</a></p>
      </div>
      <div>
        <p className={`${style['title']}`}>date of birth:</p>
        <p className={`${style['info']}`}>11 november, 1987</p>
      </div>
      <div>
        <p className={`${style['title']}`}>from:</p>
        <p className={`${style['info']}`}>nablus, palestine</p>
      </div>
    </div>
  </div>
</section>

  )
}
