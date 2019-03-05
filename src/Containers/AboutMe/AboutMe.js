import React from 'react';

import style from './AboutMe.module.css';

import Drawers from '../../Components/Drawers/Drawers';
import ProfileImage from '../../Components/ProfileImage/ProfileImage';
import SkillProfiler from '../../Components/SkillProfiler/SkillProfiler';

const aboutMe = (props) => {
    return (
        <div className={style.AboutMe}>
            <div className={style.wrapper}>
                <h1>About me</h1>
                <ProfileImage />
            </div>


            <Drawers
                description={'Introduction'}
            >
                <h3>Adventurous nerd with an immense passion for coding and design.</h3>
                <p> My name is Tomas Eriksson and live just outside of Gävle, Sweden.<br></br> <br></br>

                    I used to work as a teacher but is now setting my aim for a new career in IT. <br></br><br></br>

                    I am self taught in the basics of C#, java, html/css/sass, javaScript and PHP, mostly learning from courses on pluralsight and Udemy<br></br><br></br>

                    My goal is to become competent in UX and JavaScript(node.js, cordova, jquery and react) to hopefully work with it professionally one day.<br></br><br></br>

                    In addition to to web-design I spend time in the game engine unity and phaser, making simple games as a hobby.
                There I use C# (unity) and JavaScript (phaser) for scripting, blender for 3d-modeling/animation and gimp/spriter for 2d-sprites and animation.<br></br><br></br>

                    I will continually add projects to this site showing off what I do under “projects”.</p>
            </Drawers>

            <Drawers
                description={'My Skills'}
            >
                <SkillProfiler />
            </Drawers>

            <Drawers
                description={'Courses'}
            >
                <Drawers
                    description={'C#'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/c-sharp-fundamentals-with-visual-studio-2015/table-of-contents'>
                            C# Fundamentals with Visual Studio 2015
                        </a></li>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/csharp-best-practices-improving-basics'>
                            C# Best Practices: Improving on the Basics
                        </a></li>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/unity-2017-c-sharp-scripting-fundamentals'>
                            Unity C# Scripting Fundamentals
                        </a></li>
                    </ul>
                </Drawers>
                <Drawers
                    description={'Java'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/android-application-basics-understanding'>
                            Understanding Android Application Basics

                        </a></li>
                    </ul>

                </Drawers>
                <Drawers
                    description={'Basic Web'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/html-css-javascript-big-picture'>
                            HTML, CSS, and JavaScript: The Big Picture

                        </a></li>
                    </ul>

                </Drawers>
                <Drawers
                    description={'JavaScript'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/javascript-getting-started'>
                            JavaScript: Getting Started

                        </a></li>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/javascript-fundamentals'>
                            JavaScript Fundamentals

                        </a></li>
                        <li><a
                            href='https://app.pluralsight.com/library/courses/javascript-objects-prototypes'>
                            JavaScript Objects and Prototypes

                        </a></li>
                    </ul>

                </Drawers>
                <Drawers
                    description={'PHP'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://www.udemy.com/object-oriented-php-mvc/learn/v4/t/lecture/8287310'>
                            Object Oriented PHP & MVC

                        </a></li>
                    </ul>

                </Drawers>
                <Drawers
                    description={'Ongoing courses'}
                    subDrawer={true}
                >
                    <ul>
                        <li><a
                            href='https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8268570'>
                            React - The Complete Guide

                        </a></li>
                    </ul>

                </Drawers>

            </Drawers>

        </div >

    )
}

export default aboutMe;