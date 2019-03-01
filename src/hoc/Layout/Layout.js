import React, { Component } from 'react';

import Splash from '../../Containers/Splash/Splash';
import Navigation from '../../Components/Navigation/Navigation';
import style from './Layout.module.css';

class Layout extends Component {

    state = {
        currentPage: 'contact'
    }

    pageHandler = (event) => {
        const page = event;
        this.setState({ currentPage: page })
    }

    render() {
        let page = null;

        switch (this.state.currentPage) {
            case 'home':
                page = <Splash />
                break;
            case 'about':
                page = <h1>About me</h1>
                break;
            case 'portfolio':
                page = <h1>Portfolio</h1>
                break;
            case 'contact':
                page = <h1>Contact me</h1>
                break;
            default:
                page = <Splash />
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