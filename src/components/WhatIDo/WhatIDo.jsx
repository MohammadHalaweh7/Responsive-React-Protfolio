import React, { useState } from "react";
import style from "./WhatIDo.module.css";
import Items from "./Items";

export default function WhatIDo() {
    const [myExperiences, setmyExperiences] = useState([
        { id: 0, icon: "fas fa-palette", title: "Graphic Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
        { id: 1, icon: "fas fa-desktop", title: "Web Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
        { id: 2, icon: "fas fa-pencil-ruler", title: "Business Analysis", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
        { id: 3, icon: "fas fa-paint-brush", title: "UI/UX Design", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
        { id: 4, icon: "fas fa-chart-area", title: "App Design & Develop", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
        { id: 5, icon: "fas fa-bullhorn", title: "SEO Marketing", description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text." },
      ]);

  return (
<section className={`${style['what-i-do-section']}`} id="what-i-do" data-aos="fade-up" data-aos-duration={1000}>
  <div className="container">
    <div className="sectionTitleEditFlex">
      <h2 className='absoluteAndColor Bigsize'>what i do</h2>
      <h3 className='absoluteAndColor smallSize'>what i do</h3>
    </div>
    <p className="paraFont">How I can help your next project</p>
    <div className={`flexBox ${style['what-i-do-section-items']}`}>

    {myExperiences.map((experience,id) => (
            <Items
              key={experience.id}
              icon={experience.icon}
              title={experience.title}
              description={experience.description}
            />
          ))}

    </div>
  </div>
</section>
    )
}
