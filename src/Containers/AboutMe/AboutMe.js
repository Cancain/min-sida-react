import React from "react";

import style from "./AboutMe.module.css";

import Drawers from "../../Components/Drawers/Drawers";
import EightBitProfileImage from "../../Components/8BitProfileImage/8BitProfileImage";
import RLProfileImage from "../../Components/RLProfileImage/RLProfileImage";
import SkillProfiler from "../../Components/SkillProfiler/SkillProfiler";

const aboutMe = props => {
  const width = window.innerWidth;
  let imgStyle = { width: "40%" };
  if (width >= 1024) {
    imgStyle = { width: "20%" };
  }
  return (
    <div className={style.AboutMe}>
      <div className={style.wrapper}>
        <h1>About me</h1>
        <EightBitProfileImage style={imgStyle} />
      </div>

      <Drawers description={"Introduction"}>
        <h3>Adventurous nerd with an immense passion for coding and design.</h3>
        <RLProfileImage />
        <p>
          {" "}
          My name is Tomas Eriksson and live just outside of Gävle in Sweden.
          <br />
          <br />I used to work as a teacher but is now setting my aim for a new
          career in IT.
          <br />
          <br />I am self taught in C#, java, html/css, javascript and PHP,
          mostly learning from courses on Pluralsight and Udemy. My main
          programming languagess right now are PHP for backend and
          Javascript(mostly React) for frontend.
          <br />
          <br />
          My short hand goal right now is to dive deeper into React and it’s
          related frameworks and modules.
          <br />
          <br />I wish to learn either c++ or rust at a later date to get into
          web-assembly.
          <br />
          <br />
          In addition to to web-design I spend time in the game engine Unity and
          Phaser, making simple games as a hobby.
          <br />
          There I use C# (unity) and JavaScript (phaser) for scripting, blender
          for 3d-modeling/animation and gimp/spriter for 2d-sprites and
          animation.
          <br />
          <br />I will continually add projects to this site showing off what I
          do under “portfolio”.
        </p>
        <br />
      </Drawers>

      <Drawers description={"My Skills"}>
        <SkillProfiler />
      </Drawers>

      <Drawers description={"Courses"}>
        <Drawers description={"C#"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://app.pluralsight.com/library/courses/c-sharp-fundamentals-with-visual-studio-2015/table-of-contents">
                C# Fundamentals with Visual Studio 2015
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/csharp-best-practices-improving-basics">
                C# Best Practices: Improving on the Basics
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/unity-2017-c-sharp-scripting-fundamentals">
                Unity C# Scripting Fundamentals
              </a>
            </li>
          </ul>
        </Drawers>
        <Drawers description={"Java"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://app.pluralsight.com/library/courses/android-application-basics-understanding">
                Understanding Android Application Basics
              </a>
            </li>
          </ul>
        </Drawers>
        <Drawers description={"Basic Web"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://app.pluralsight.com/library/courses/html-css-javascript-big-picture">
                HTML, CSS, and JavaScript: The Big Picture
              </a>
            </li>
          </ul>
        </Drawers>
        <Drawers description={"JavaScript"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://app.pluralsight.com/library/courses/javascript-getting-started">
                JavaScript: Getting Started
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/javascript-fundamentals">
                JavaScript Fundamentals
              </a>
            </li>
            <li>
              <a href="https://app.pluralsight.com/library/courses/javascript-objects-prototypes">
                JavaScript Objects and Prototypes
              </a>
            </li>
          </ul>
        </Drawers>
        <Drawers description={"PHP"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://www.udemy.com/object-oriented-php-mvc/">
                Object Oriented PHP & MVC
              </a>
            </li>
          </ul>
        </Drawers>
        <Drawers description={"Ongoing courses"} subDrawer={true}>
          <ul>
            <li>
              <a href="https://www.udemy.com/react-the-complete-guide-incl-redux/">
                React - The Complete Guide
              </a>
            </li>
            <li>
              <a href="https://www.udemy.com/mern-stack-front-to-back">
                MERN Stack Front To Back: Full Stack React, Redux & Node.js
              </a>
            </li>
          </ul>
        </Drawers>
      </Drawers>
    </div>
  );
};

export default aboutMe;
