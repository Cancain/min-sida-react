import React, { Component } from 'react';

import Splash from '../../Containers/Splash/Splash';
import Navigation from '../../Components/Navigation/Navigation';
import style from './Layout.module.css';
import AboutMe from '../../Components/AboutMe/AboutMe';
import Portfolio from '../../Components/Portfolio/Portfolio';
import Contact from '../../Components/Contact/Contact';

class Layout extends Component {

    state = {
        currentPage: null
    }

    //Responds to a click on a navitem 
    //and sets the state of currentPage to the clicked nav item
    pageHandler = (event) => {
        const page = event;
        this.setState({ currentPage: page })
    }

    render() {
        let page = null;

        //Constants holding the different pages
        const home = <Splash />
        const aboutMe = <AboutMe />
        const portfolio = <Portfolio />
        const contact = <Contact />

        //Renders the proper "page" depending on the cirrentPage state
        //If any unexpected value shows up in currentPage the "home" page will render 
        switch (this.state.currentPage) {
            case 'home':
                page = home;
                break;
            case 'about':
                page = aboutMe;
                break;
            case 'portfolio':
                page = portfolio;
                break;
            case 'contact':
                page = contact;
                break;
            default:
                page = home;
                break;
        }


        return (
            <div className={style.Layout} >
                <Navigation
                    navItemClicked={(event) => this.pageHandler(event)}
                />
                {page}
            </div>
        )
    }
}


export default Layout;