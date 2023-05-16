import React from "react";
import style from "./Navbar.module.css";
export default function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className={` ${style["row"]} flexBox`}>
          <div className={`${style["logo"]}`}>
            <a href="#">mohammad halaweh</a>
          </div>
          <ul className={`${style["list-item"]} flexBox`}>
            <li className={`${style["item"]}`}>
              <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
              <a href="#">home</a>
            </li>
            <li className={`${style["item"]}`}>
              <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
              <a href="#about">about</a>
            </li>
            <li className={`${style["item"]}`}>
              <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
              <a href="#what-i-do">service</a>
            </li>
            <li className={`${style["item"]}`}>
              <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
              <a href="#resume">resume</a>
            </li>
            <li className={`contact ${style["item"]}`}>
              <i className="fa fa-chevron-right" aria-hidden="true" />{" "}
              <a href="#contact">contact</a>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
