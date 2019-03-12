import React, { Fragment } from 'react';

import Presentation from './Presentation/Presentation';
// import style from './Splash.module.css';

const splash = (props) => {
    return (
        <Fragment>
            <Presentation logoClick={props.logoClick} />
        </Fragment>
    )
}

export default splash;