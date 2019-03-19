import React, { Component } from 'react';

import style from './Drawers.module.css'
import Handle from './Handle/Handle';
import Drawer from './Drawer/Drawer';

class Drawers extends Component {

    state = {
        expanded: false
    }

    //Sets the state of expanded to it's opposite when run
    expandHandler = () => {
        const expand = this.state.expanded;
        this.setState({ expanded: !expand })
    }

    render() {
        //Variable that holds the classes for the root div in this component
        //Always holds style.Drawers, adds subDrawer if the subDrawer prop is true
        let classList = [style.Drawers, this.props.subDrawer ? style.subDrawer : null]

        return (
            <div className={classList.join(' ')}>

                <Handle
                    subDrawer={this.props.subDrawer}
                    text={this.props.description}
                    clicked={this.expandHandler}
                    open={this.state.expanded}
                />

                <Drawer
                    open={this.state.expanded}
                    text={this.props.children}
                />


            </div>
        )
    }
}

export default Drawers;