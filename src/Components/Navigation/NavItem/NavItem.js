import React from 'react';

import style from './NavItem.module.css';

const navItem = (props) => {
    return (
        <div
            className={style.NavItem}
            onClick={() => props.clicked(props.text)}
        >
            <p>{props.text}</p>
        </div>
    )
}

export default navItem;