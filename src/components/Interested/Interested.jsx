import React from 'react'
import style from './Interested.module.css'
export default function Interested() {
  return (
<section className={`${style['intersted-section']}`} id="intersted" data-aos="top-top" data-aos-duration={1000}>
  <div className="container">
    <div className={`flexBox ${style['overlay']}`}>
      <div className={`${style['intersted-content']}`}>
        <h2 className={`${style['intersted-title']}`}>Interested in working with me?</h2>
        <a href>Hire Me!</a>
      </div>
    </div>
  </div>
</section>

  )
}
