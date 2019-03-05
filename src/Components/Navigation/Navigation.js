import React, { Component } from 'react';

import style from './Navigation.module.css'
import MobileNav from './MobileNav/MobileNav';
import BigNav from './BigNav/BigNav';


class Navigation extends Component {

    state = {
        sideDrawerOpen: false,
        menuItems: [
            { text: 'home', id: 0 },
            { text: 'about', id: 1 },
            { text: 'portfolio', id: 2 },
            { text: 'contact', id: 3 }
        ]
    }

    NavItemClickHandler = (event) => {
        this.props.navItemClicked(event);

        event !== null ?
            this.sideDrawerHandler() :
            this.setState({ sideDrawerOpen: false });
    }

    //Sets the staus of sideDrawerOpen to it's opposite
    sideDrawerHandler = () => {
        this.setState({ sideDrawerOpen: !this.state.sideDrawerOpen });
    }

    render() {
        //A breakpoint for switching between mobile and desktop layout 
        const breakPoint = 1025;

        //Stores what nav should render for big screens
        const bigNav = (
            <BigNav
                items={this.state.menuItems}
            />
        )

        //Stores what nav should render for small screens
        const smallNav = (
            <MobileNav
                menuItems={this.state.menuItems}
                sideDrawerClicked={() => this.sideDrawerHandler()}
                menuOpened={(event) => this.sideDrawerHandler(event)}
                menuOpen={this.state.sideDrawerOpen}
                breakPoint={breakPoint}
                navItemClicked={(event) => this.NavItemClickHandler(event)}
            />
        )

        //Outputs different navs depending on the windows width
        let nav;
        window.innerWidth >= breakPoint ?
            nav = bigNav :
            nav = smallNav;

        return (
            <div className={style.Navigation}>
                <h2
                    onClick={(event) => this.NavItemClickHandler(null)}
                    style={{ cursor: 'pointer' }}
                >Tomas<br></br>Eriksson
                </h2>
                {nav}
            </div>
        )
    }
}

export default Navigation;