import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import style from './Presentation.module.css'

const presentation = (props) => {
    return (
        <div className={style.Presentation}>
            <div className={style.Logo}>
                <Logo />
            </div>
            <div className={style.MediaIcons}>
                <a href="https://github.com/Cancain" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                <a href="https://twitter.com/TomasEr32931498" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
                <a href="https://www.linkedin.com/in/tomas-eriksson-712526177/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    )
}

export default presentation;