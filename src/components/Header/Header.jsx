import React from 'react'
import style from './Header.module.css'
export default function Header() {
  return (
<header>
<div className="container">
  <div className={`${style['header-content']} flexBox centerDiv`}>
    <div className={`${style['header-details']}`}>
      <h2>welcome!</h2>
      <h1 data-text="I'm Front-End Developer">I'm Front-End Developer</h1>
      <h4>I'm computer Engineering student at 5th year. My expertise is to create and
        Websites design, graphic design and more...</h4>
      <ul className={`${style['header-icon']} flexBox`}>
        <li className={`${style['icon']}`}><a href="https://github.com/MohammadHalaweh7"><i className="fab fa-github" aria-hidden="true" /></a></li>
        <li className={`${style['icon']}`}><a href="https://www.linkedin.com/in/mohammad-halaweh-851110231/"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
        <li className={`${style['icon']}`}><a href="https://www.facebook.com/mohammad.halaweh.526"><i className="fab fa-facebook" aria-hidden="true" /></a></li>
        <li className={`${style['icon']}`}><a href="https://www.youtube.com/channel/UC3gf4o1mZEBIuLFCLPDGRYQ"><i className="fab fa-youtube" aria-hidden="true" /></a></li>
        <li className={`${style['icon']}`}><a href="#"><i className="fab fa-google" aria-hidden="true" /></a></li>
        <li className={`${style['icon']}`}><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
      </ul>
    </div>
    <div className={`${style['header-image']} flexBox`}>
      <div className={`${style['image']}`}>
        <div className={`${style['coption']} flexBox`}>
          <h2>mohammad halaweh</h2>
          <p>front-end developer</p>
        </div>
      </div>
    </div>
  </div>
</div>
</header>

 

  )
}
