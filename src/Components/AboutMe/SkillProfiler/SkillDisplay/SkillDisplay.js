import React from 'react';

import style from './SkillDisplay.module.css';

const skillDisplay = (props) => {

    const show = props.items.map(item => {
        return (
            <div
                className={style.SkillDisplay}
                key={item.index}
            >
                <ul>{item.name}
                    {item.subItems.map(sub => {
                        return <li key={sub.index}>{sub.name}</li>
                    })}
                </ul>
            </div>
        )
    })

    return (
        <div>
            {show}
        </div>
    )
}

export default skillDisplay