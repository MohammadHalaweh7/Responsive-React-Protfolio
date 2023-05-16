import React from 'react'
import style from './Footer.module.css'
export default function Footer() {
  return (
<footer>
  <div className="container">
    <div className={`flexBox ${style['footer-content']}`}>
      <p> Copyright © 2023 <span>Halaweh</span>. All Rights Reserved.</p>
      <p>Designed by <span>Mohammad Halaweh</span></p>
    </div>
  </div>
</footer>

  )
}
