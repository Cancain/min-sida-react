import React from 'react';

import style from './MediaIcons.module.css';

const MediaIcons = (props) => {
    return (
        <div className={style.MediaIcons}>
            <a href="https://github.com/Cancain" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
            <a href="https://twitter.com/TomasEr32931498" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter-square"></i></a>
            <a href="https://www.linkedin.com/in/tomas-eriksson-712526177/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
        </div>
    )
}

export default MediaIcons;