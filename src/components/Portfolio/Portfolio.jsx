import React, { useState } from "react";
import style from "./Portfolio.module.css";
import ItemsPortfolio from "./ItemsPortfolio";

export default function Portfolio() {
  const [projects, setmyProjects] = useState([
    {
      id: 0,
      link: "https://github.com/MohammadHalaweh7/Ward-Restaurant-Website",
      image: "assets/images/project1.jpg",
      title: "Project 1",
      description: "Ward Restaurant Website",
    },
    {
      id: 1,
      link: "https://github.com/MohammadHalaweh7/OSAKA-Website",
      image: "assets/images/project2.jpg",
      title: "Project 2",
      description: "OSAKA Website",
    },
    {
      id: 2,
      link: "https://github.com/MohammadHalaweh7/Html5_Css3_Website",
      image: "assets/images/project3.jpg",
      title: "Project 3",
      description: "Mobile Store Website",
    },
    {
      id: 3,
      link: "https://github.com/MohammadHalaweh7/Driving-School-Website",
      image: "assets/images/project4.jpg",
      title: "Project 4",
      description: "Driving School Website",
    },
    {
      id: 4,
      link: "https://github.com/MohammadHalaweh7/Bootstrap-Website",
      image: "assets/images/project55.jpg",
      title: "Project 5",
      description: "Bootstrap Website",
    },
    {
      id: 5,
      link: "https://github.com/MohammadHalaweh7/Mobile-Market-Website",
      image: "assets/images/project6.jpg",
      title: "Project 6",
      description: "Store Website",
    },
  ]);

  return (
    <section
      className={`${style["portfolio-section"]}`}
      id="portfolio"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container">
        <div className="sectionTitleEditFlex">
          <h2 className="absoluteAndColor Bigsize">portfolio</h2>
          <h3 className="absoluteAndColor smallSize">portfolio</h3>
        </div>
        <p className="paraFont">Some of my most recent projects</p>
        <div className={`flexBox ${style["portfolio-section-nav"]}`}>
          <a href="#nav-all">All</a>
          <a href="#nav-profile">Details</a>
          <a href="#nav-contact">Mockups</a>
          <a href="#nav-design">Youtube Videos</a>
          <a href="#nav-design">Vimeo Videos</a>
        </div>
        <div className={`flexBox ${style["portfolio-items"]}`}>
          {projects.map((item) => (
            <ItemsPortfolio
              key={item.id}
              link={item.link}
              image={item.image}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
