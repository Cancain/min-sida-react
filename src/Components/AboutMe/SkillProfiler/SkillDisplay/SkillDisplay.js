import React from 'react';

import style from './SkillDisplay.module.css';
import Skillmeter from './Skillmeter/Skillmeter';

const skillDisplay = (props) => {

    const show = props.items.map(item => {
        return (
            <div
                className={style.SkillDisplay}
                key={item.index}
            >
                <ul>{item.name}<Skillmeter level={item.level} />
                    {item.subItems.map(sub => {
                        return <li key={sub.index}>{sub.name} <Skillmeter level={sub.level} /></li>
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