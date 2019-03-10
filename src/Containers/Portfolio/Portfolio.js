import React, { Component } from 'react'
import axios from 'axios';

import style from './Portfolio.module.css';
import Drawers from '../../Components/Drawers/Drawers';


class Portfolio extends Component {

    state = {
        portfolio: null
    }



    componentDidMount() {
        //Gets all the portfolio-posts from a database and adds to state
        axios.get('Portfolios/getAllPortfolios/-1')
            .then(response => {
                const portfolio = response.data;
                this.setState({ portfolio: portfolio })
            })
    }

    render() {
        // Renders all the added posts from the state inside a Drawer
        let portfolioHandler;
        if (this.state.portfolio != null) {
            portfolioHandler = this.state.portfolio.map(post => {
                console.log(post.title);
                return (
                    <Drawers
                        key={post.id}
                        description={post.title}
                    >
                        {post.body}
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