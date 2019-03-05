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
                <i className="fab fa-github-square"></i>
                <i className="fab fa-twitter-square"></i>
                <i className="fab fa-linkedin"></i>
            </div>
        </div>
    )
}

export default presentation;