import React from "react";
import style from "./Resume.module.css";

export default function SkillsItems({ title, className }) {
  return (
    <div className={`${style["skill"]}`}>
      <h4>{title}</h4>
      <div className="skill-range">
        <div className={`${style["outer-range"]} ${style[className]}`}></div>
        <div className={`${style["inner-range"]}`}></div>
      </div>
    </div>
  );
}
