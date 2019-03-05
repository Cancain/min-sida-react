import React, { Component } from 'react'

import style from './Portfolio.module.css';
import Drawers from '../../Components/Drawers/Drawers';

class Portfolio extends Component {

    state = {
        portfolio: [
            {
                id: 0,
                title: 'React site with php-backend',
                body: 'I have been studying a lot react in the latest weeks. This is my first real react project. I wanted to combine php with react so I made this site, the fake news journal. This site has no real purpose.Its just for me trying to get php and react to work with json - objects.',
                date: '2019-02-25',
                links: [{ text: 'link to the page', href: 'http://fakenews.tomaseriksson.net/' }]
            }
        ]
    }



    render() {

        const portfolioHandler = this.state.portfolio.map(post => {
            return <Drawers
                key={post.id}
                description={post.title}
            >
            </Drawers>
        })

        return (
            <div className={style.Portfolio} >
                <h1>Portfolio</h1>
                {portfolioHandler}
            </div >
        )
    }
}

export default Portfolio;