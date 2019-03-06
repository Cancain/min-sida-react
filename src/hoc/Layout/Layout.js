import React, { Component } from 'react';

import Splash from '../../Containers/Splash/Splash';
import Navigation from '../../Components/Navigation/Navigation';
import style from './Layout.module.css';
import AboutMe from '../../Containers/AboutMe/AboutMe';
import Portfolio from '../../Containers/Portfolio/Portfolio';
import Contact from '../../Containers/Contact/Contact';
import Modal from '../Modal/Modal';

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

        //A breakpoint for switching between mobile and desktop layout 
        const breakPoint = 1025;

        let page = null;

        //Constants holding the different pages
        //Big screens
        const aboutMeLg = <Modal content={<AboutMe />} />;
        const portfolioLg = <Modal content={<Portfolio />} />;
        const contactLg = <Modal content={<Contact />} />;

        //Small screens
        const homeSm = <Splash />
        const aboutMeSm = <AboutMe />;
        const portfolioSm = <Portfolio />;
        const contactSm = <Contact />;

        //Renders the proper "page" depending on the cirrentPage state and window width
        //If any unexpected value shows up in currentPage the "home" page will render 
        switch (this.state.currentPage) {
            case 'home':
                if (window.innerWidth < breakPoint) {
                    page = homeSm;
                } else {
                    page = null;
                }
                break;
            case 'about':
                if (window.innerWidth < breakPoint) {
                    page = aboutMeSm;
                } else {
                    page = aboutMeLg;
                }
                break;
            case 'portfolio':
                if (window.innerWidth < breakPoint) {
                    page = portfolioSm;
                } else {
                    page = portfolioLg;
                }
                break;
            case 'contact':
                if (window.innerWidth < breakPoint) {
                    page = contactSm;
                } else {
                    page = contactLg;
                }
                break;
            default:
                if (window.innerWidth < breakPoint) {
                    page = homeSm;
                } else {
                    page = null;
                }
                break;
        }


        return (
            <div className={style.Layout} >
                <Navigation
                    breakPoint={breakPoint}
                    navItemClicked={(event) => this.pageHandler(event)}
                />
                {window.innerWidth > breakPoint ? <Splash /> : null}
                {page}

            </div>
        )
    }
}


export default Layout;