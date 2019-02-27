import React from 'react';

import Splash from '../../Containers/Splash/Splash';
import style from './Layout.module.css';

const layout = (props) => {
    return (
        <div className={style.Layout}>
            <Splash />
        </div>
    )
}

export default layout;