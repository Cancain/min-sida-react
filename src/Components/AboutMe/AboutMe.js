import React from 'react';

import style from './AboutMe.module.css';
import Drawers from '../Drawers/Drawers';
import ProfileImage from '../ProfileImage/ProfileImage';
import SkillProfiler from './SkillProfiler/SkillProfiler';

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
                description={'My Courses'}
            >

            </Drawers>

        </div >

    )
}

export default aboutMe;