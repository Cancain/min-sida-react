import React, { Component, Fragment } from 'react'
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
                    <Fragment key={post.id}>
                        <Drawers description={post.title}>
                            <small>{post.createdAt}
                            </small>
                            <br></br>
                            <p dangerouslySetInnerHTML={{ __html: post.body }} />
                            {/* this map checks the links portfoloioId
                        if it matches it renders the links with url and text */}
                            <div className={style.LinkWrapper}>
                                {

                                    this.state.links.map(link => {
                                        return link.portfolioId === post.id ?
                                            <div
                                                key={link.id}>
                                                <a
                                                    href={link.url}
                                                    rel='noreferrer noopener'
                                                    target="_blank">{link.text}
                                                </a>
                                                <br></br>
                                            </div>
                                            :
                                            null;
                                    })
                                }
                            </div>
                        </Drawers >
                    </Fragment>
                )
            })
        }

        return (
            <div className={style.Portfolio} >
                {this.props.isAdmin ? <button onClick={this.props.addPortfolioClicked}>Add portfolio</button> : null}
                <div className={style.wrapper}>
                    <h1>Portfolio</h1>
                </div>


                {portfolioHandler}
            </div >
        )
    }
}

export default Portfolio;