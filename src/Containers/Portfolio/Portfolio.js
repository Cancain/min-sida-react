import React, { Component } from 'react'
import axios from 'axios';

import style from './Portfolio.module.css';
import Drawers from '../../Components/Drawers/Drawers';


class Portfolio extends Component {

    state = {
        portfolio: null,
        links: null
    }

    componentDidMount() {
        //Gets all the portfolio-posts from a database and adds to state
        axios.get('Portfolios/getAllPortfolios/-1')
            .then(response => {
                const portfolio = response.data.portfolio;
                const links = response.data.links;
                this.setState({
                    portfolio: portfolio,
                    links: links
                })
            })
    }

    render() {
        // Renders all the added posts from the state inside a Drawer
        let portfolioHandler;
        if (this.state.portfolio != null) {
            portfolioHandler = this.state.portfolio.map(post => {
                return (
                    <Drawers
                        key={post.id}
                        description={post.title}
                    >
                        <small>{post.createdAt}
                        </small>
                        <br></br>
                        <p>{post.body}</p>
                        {/* this map checks the links portfoloioId
                        if it matches it renders the links with url and text */}
                        {this.state.links.map(link => {
                            return link.portfolioId === post.id ?
                                <div key={link.id}><a href={link.url}>{link.text}</a><br></br></div> :
                                null;
                        })}
                    </Drawers>
                )
            })
        }

        return (
            <div className={style.Portfolio} >
                <div>
                    <h1>Portfolio</h1>
                </div>

                {portfolioHandler}
            </div >
        )
    }
}

export default Portfolio;