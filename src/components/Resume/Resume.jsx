import React, { useState } from "react";
import style from "./Resume.module.css";
import ItemsExperience from "./ItemsExperience";
import ItemsEducation from "./ItemsEducation";
import SkillsItems from "./SkillsItems";
export default function Resume() {
  const [educationItems, setEducationItems] = useState([
    {
      id: 0,
      title: "Bachelor's in Computer Engineering1",
      date: "An-Najah University / 2018 - 20231",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.1",
    },
    {
      id: 1,
      title: "Bachelor's in Computer Engineering2",
      date: "An-Najah University / 2018 - 20232",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.2",
    },
    {
      id: 2,
      title: "Bachelor's in Computer Engineering3",
      date: "An-Najah University / 2018 - 20233",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.3",
    },
  ]);

  const [experienceItems, setExperienceItems] = useState([
    {
      id: 0,
      title: "Bachelor's in Computer Engineering1",
      date: "An-Najah University / 2018 - 20231",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.1",
    },
    {
      id: 1,
      title: "Bachelor's in Computer Engineering2",
      date: "An-Najah University / 2018 - 20232",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.2",
    },
    {
      id: 2,
      title: "Bachelor's in Computer Engineering3",
      date: "An-Najah University / 2018 - 20233",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the dummy text.3",
    },
  ]);

  const [itemsSkills, setItemsSkills] = useState([
    {
      id: 0,
      title: "Git",
      className: "outer-range-1",
    },
    {
      id: 1,
      title: "Html",
      className: "outer-range-2",
    },
    {
      id: 2,
      title: "Css",
      className: "outer-range-3",
    },
    {
      id: 3,
      title: "JavaScript",
      className: "outer-range-4",
    },
    {
      id: 4,
      title: "NodeJs",
      className: "outer-range-5",
    },
    {
      id: 5,
      title: "React",
      className: "outer-range-6",
    },
  ]);

  return (
    <section
      className={`${style["resume-section"]}`}
      id="resume"
      data-aos="fade-up"
      data-aos-duration={1000}
    >
      <div className="container">
        <div className="sectionTitleEditFlex">
          <h2 className="absoluteAndColor Bigsize">Resume</h2>
          <h3 className="absoluteAndColor smallSize">Resume</h3>
        </div>
        <p className="paraFont">A summary of My Resume</p>
        <div className={`flexBox ${style["resume-content"]}`}>
          <div className={`${style["education-content"]}`}>
            <h3>My Education</h3>
            <div className={`${style["education-box"]}`}>
              {educationItems.map((item, id) => (
                <ItemsEducation
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
              ))}
            </div>
          </div>
          <div className={`${style["experience-content"]}`}>
            <h3>My Experience</h3>
            <div className={`${style["experience-box"]}`}>
              {experienceItems.map((item, id) => (
                <ItemsExperience
                  key={item.id}
                  title={item.title}
                  date={item.date}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
        <h3>My Skills</h3>
        <div className={`flexBox ${style["resume-skills"]}`}>
          {itemsSkills.map((item, id) => (
            <SkillsItems
              key={item.id}
              title={item.title}
              className={item.className}
            />
          ))}
        </div>
        <div className={`${style["download-button"]}`}>
          <a
            href="assets/cv/CV-Mohammad Halaweh.pdf"
            download="CV-Mohammad Halaweh.pdf"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
