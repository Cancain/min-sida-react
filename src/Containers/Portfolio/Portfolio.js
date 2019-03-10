import React, { Component } from 'react'
import axios from 'axios';

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
                links:
                    [
                        { text: 'link to the page', href: 'http://fakenews.tomaseriksson.net/' },
                        { text: 'Github link', href: 'https://github.com/Cancain/react-php-test.git' }
                    ]
            }
        ]
    }
    render() {
        axios.get('Portfolios/getAllPortfolios/-1')
            .then(response => {
                console.log(response);
            })

        //Renders all the added posts from the state inside a Drawer
        const portfolioHandler = this.state.portfolio.map(post => {
            return <Drawers
                key={post.id}
                description={post.title}
            >
                <small>{post.date}</small>
                <p className={style.text}>{post.body}</p>
                {/* maps through all the links in the post and 
                renders then at the bottom of the drawer */}
                {post.links.map((link, index) => {
                    return (
                        <div
                            key={index}
                            className={style.linkWrapper}
                        >
                            <a href={link.href}>{link.text}</a></div>
                    )
                })}
            </Drawers>
        })
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