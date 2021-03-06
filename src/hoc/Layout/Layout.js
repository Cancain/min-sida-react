import React, { Component } from "react";

import Splash from "../../Containers/Splash/Splash";
import Navigation from "../../Components/Navigation/Navigation";
import style from "./Layout.module.css";
import AboutMe from "../../Containers/AboutMe/AboutMe";
import Portfolio from "../../Containers/Portfolio/Portfolio";
import Contact from "../../Containers/Contact/Contact";
import Modal from "../Modal/Modal";
import AddPortfolio from "../../Components/AddPortfolio/AddPortfolio";
import MediaIcons from "../../Components/MediaIcons/MediaIcons";

class Layout extends Component {
  state = {
    currentPage: null
  };

  logoClickHandler = event => {
    if (event.ctrlKey) {
      this.pageHandler("logIn");
    }
  };

  //Responds to a click on a navitem
  //and sets the state of currentPage to the clicked nav item
  pageHandler = event => {
    const page = event;
    this.setState({ currentPage: page });
  };

  //This function changes the current page when you click on a arrow button in the modal
  //it first checks the current page it's at then switches the page depending on what arrow got clicked
  arrowClickHandler = dir => {
    const page = this.state.currentPage;

    switch (page) {
      case null:
        this.pageHandler("null");
        break;
      case "about":
        dir === "left"
          ? this.pageHandler("about")
          : this.pageHandler("portfolio");
        break;
      case "portfolio":
        dir === "left"
          ? this.pageHandler("about")
          : this.pageHandler("contact");
        break;
      case "contact":
        dir === "left"
          ? this.pageHandler("portfolio")
          : this.pageHandler("contact");
        break;
      default:
        break;
    }
  };

  render() {
    //Renders the mediacomponent if the display is not big or the page is home or null
    const width = window.innerWidth;
    let mediaIcons = <MediaIcons />;
    if (
      width >= 1024 ||
      this.state.currentPage === "home" ||
      this.state.currentPage === null
    )
      mediaIcons = null;

    //A breakpoint for switching between mobile and desktop layout
    const breakPoint = 1025;

    let page = null;

    //Constants holding the different pages
    //Big screens
    const aboutMeLg = (
      <Modal
        arrowDisabled={"left"}
        closeBtnClicked={() => this.pageHandler(null)}
        leftArrowClicked={() => this.arrowClickHandler("left")}
        rightArrowClicked={() => this.arrowClickHandler("right")}
        content={<AboutMe />}
      />
    );
    const portfolioLg = (
      <Modal
        closeBtnClicked={() => this.pageHandler(null)}
        leftArrowClicked={() => this.arrowClickHandler("left")}
        rightArrowClicked={() => this.arrowClickHandler("right")}
        content={<Portfolio />}
      />
    );
    const addPortfolioLg = (
      <Modal
        closeBtnClicked={() => this.pageHandler(null)}
        content={<AddPortfolio />}
      />
    );
    const contactLg = (
      <Modal
        arrowDisabled="right"
        closeBtnClicked={() => this.pageHandler(null)}
        leftArrowClicked={() => this.arrowClickHandler("left")}
        rightArrowClicked={() => this.arrowClickHandler("right")}
        content={<Contact />}
      />
    );

    //Small screens
    const homeSm = <Splash />;
    const aboutMeSm = <AboutMe />;
    const portfolioSm = <Portfolio />;
    const contactSm = <Contact />;

    //Renders the proper "page" depending on the cirrentPage state and window width
    //If any unexpected value shows up in currentPage the "home" page will render
    switch (this.state.currentPage) {
      case "home":
        if (window.innerWidth < breakPoint) {
          page = homeSm;
        } else {
          page = null;
        }
        break;
      case "about":
        if (window.innerWidth < breakPoint) {
          page = aboutMeSm;
        } else {
          page = aboutMeLg;
        }
        break;
      case "portfolio":
        if (window.innerWidth < breakPoint) {
          page = portfolioSm;
        } else {
          page = portfolioLg;
        }
        break;
      case "contact":
        if (window.innerWidth < breakPoint) {
          page = contactSm;
        } else {
          page = contactLg;
        }
        break;
      case "addPortfolio":
        if (window.innerWidth < breakPoint) {
          page = null;
        } else {
          page = addPortfolioLg;
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
      <React.Fragment>
        <div className={style.Layout}>
          <Navigation
            breakPoint={breakPoint}
            navItemClicked={event => this.pageHandler(event)}
          />
          {/* if the windowidth is more then the breakpoint it automaticly renders the splash screen as background */}
          {window.innerWidth > breakPoint ? (
            <Splash logoClick={event => this.logoClickHandler(event)} />
          ) : null}

          {page}
        </div>
        {mediaIcons}
      </React.Fragment>
    );
  }
}

export default Layout;
