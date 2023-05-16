import React from 'react'
import style from "./Resume.module.css";
export default function ItemsEducation({ title, date, description }) {
  return (
    <div className={`${style['education-details']}`}>
    <h4>{title}</h4>
    <h5>{date}</h5>
    <p>{description}</p>
  </div>
  )
}
