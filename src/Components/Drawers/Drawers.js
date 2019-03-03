import React, { Component } from 'react';

import style from './Drawers.module.css'
import Handle from './Handle/Handle';
import Drawer from './Drawer/Drawer';

class Drawers extends Component {

    state = {
        expanded: false
    }

    expandHandler = () => {
        const expand = this.state.expanded;
        this.setState({ expanded: !expand })
    }

    render() {

        // const expandedDrawer =
        //     <Drawer
        //         text={this.props.children}
        //     />;

        return (
            <div className={style.Drawers}>

                <Handle
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