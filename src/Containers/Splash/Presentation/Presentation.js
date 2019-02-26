import React, { Fragment } from 'react';

import Logo from '../../../Components/Logo/Logo';
import style from './Presentation.module.css'

const presentation = (props) => {
    return (
        <div className={style.Presentation}>
            <div className={style.Logo}>
                <Logo />
            </div>
        </div>
    )
}

export default presentation;