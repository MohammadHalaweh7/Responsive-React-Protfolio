import React from "react";
import style from "./Portfolio.module.css";

export default function ItemsPortfolio({ link, image, title, description }) {
  return (
    <a href={link} target="_blank">
      <div className={`${style["portfolio-item"]}`}>
        <img src={image} alt="OSAKA project" />
        <div className={`${style["overlay"]}`}>
          <div className={`centerDiv ${style["overlay-content"]}`}>
            <i className="fa fa-file-code" aria-hidden="true" />
            <h2 className={`${style["portfolio-main"]}`}>{title}</h2>
            <h3 className={`${style["portfolio-second"]}`}>{description}</h3>
          </div>
        </div>
      </div>
    </a>
  );
}
