import React, { Component } from 'react';

class Skillmeter extends Component {
    state = {
        skillLevel: null
    }

    componentDidMount() {
        this.setState({ skillLevel: this.props.level });

    }


    render() {
        console.log(this.props.level);
        const skillDisplay = (x) => {
            for (let i = 0; i < x; i++) {
                return <p>X</p>;
            }
        }


        return (
            <div>
                {skillDisplay(this.props.level)}

            </div>
        )
    }
}

export default Skillmeter;