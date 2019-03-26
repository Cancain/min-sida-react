import React, { Component, Fragment } from 'react'
import axios from 'axios';

import style from './Portfolio.module.css';
import Drawers from '../../Components/Drawers/Drawers';
import Spinner from '../../Components/Spinner/Spinner';


class Portfolio extends Component {

    state = {
        portfolio: null,
        links: null,
        loading: false,
        error: false
    }

    componentDidMount() {
        //Gets all the portfolio-posts from a database and adds to state
        this.setState({ loading: true })
        axios.get('Portfolios/getAllPortfolios/-1')
            .then(response => {
                //if the fetch fails, sets a proper errormessage in the error state
                if (response.data.portfolio === undefined ||
                    response.data.links === undefined) {
                    this.setState({ error: 'Something went wrong, please try again later' })
                } else {
                    //if the fetch goes through, fills the state with the data
                    const portfolio = response.data.portfolio;
                    const links = response.data.links;
                    this.setState({
                        portfolio: portfolio,
                        links: links
                    })
                }
                this.setState({ loading: false })
            })
            .catch(error => {
                this.setState({ error: error.message, loading: false })
            })
    }

    render() {
        // Renders all the added posts from the state inside a Drawer
        let portfolioHandler;
        if (this.state.error) {
            const errorStyle = { color: 'red' };
            portfolioHandler = <p style={errorStyle}>{this.state.error}</p>

        } else {
            if (this.state.portfolio) {
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
                                                    </a><br></br>
                                                </div>
                                                :
                                                null;
                                        })
                                    }
                                </div>
                            </Drawers >
                        </Fragment>
                    )
                });
            }

        }

        return (
            <div className={style.Portfolio} >
                {this.props.isAdmin ? <button onClick={this.props.addPortfolioClicked}>Add portfolio</button> : null}
                < div className={style.wrapper} >
                    <h1>Portfolio</h1>
                </div>
                {this.state.loading ? <Spinner /> : portfolioHandler}
            </div >
        )
    }
}

export default Portfolio;