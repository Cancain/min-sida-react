import React from 'react';

import Splash from '../../Containers/Splash/Splash';
import Navigation from '../../Components/Navigation/Navigation';
import style from './Layout.module.css';

const layout = (props) => {

    return (
        <div className={style.Layout}>
            <Navigation />
            <Splash />
        </div>
    )
}

export default layout;