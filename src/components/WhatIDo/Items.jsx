import React from "react";
import style from "./WhatIDo.module.css";

export default function Items({ icon, title, description }) {
  return (
    <div className={`${style["what-i-do-section-item"]}`}>
      <i className={icon} aria-hidden="true" />
      <p className={`${style["title-para"]}`}>{title}</p>
      <p className={`${style["description-para"]}`}>{description}</p>
    </div>
  );
}