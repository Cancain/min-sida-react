import React from 'react';

import Logo from '../../../Components/Logo/Logo';
import MediaIcons from '../../../Components/MediaIcons/MediaIcons';
import style from './Presentation.module.css'

const presentation = (props) => {
    return (
        <div className={style.Presentation}>
            <div className={style.Logo}>
                <Logo logoClick={props.logoClick} />
            </div>
            <div className={style.wrapper}>
                <MediaIcons />
            </div>
        </div>
    )
}

export default presentation;