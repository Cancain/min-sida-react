import React, { Component } from 'react';

import style from './Skillmeter.module.css'

class Skillmeter extends Component {
    state = {
        skillLevel: null
    }

    skill = [false, false, false, false, false];
    componentDidMount() {
        this.setState({ skillLevel: this.props.level });

        for (let i = 0; i < this.props.level; i++) {
            this.skill[i] = true;
        };
    }


    render() {

        const skillDisplay = this.skill.map((skill, i) => {

            let classes = [style.Bar]
            skill ? classes.push(style.active) : classes.push(style.inactive);

            return <div
                className={classes.join(' ')}
                key={i}></div>;
        })


        return (
            <div className={style.Skillmeter}>
                {skillDisplay}
            </div>
        )
    }
}

export default Skillmeter;