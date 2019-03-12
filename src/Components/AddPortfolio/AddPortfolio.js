import React, { Component } from 'react'

import style from './AddPortfolio.module.css';

class AddPortfolio extends Component {

    state = {
        title: null,
        body: null,
        links: [
            {}
        ]
    }

    addLinkHandler = () => {
        let links = this.state.links;
        const emptyLink = {
            url: null,
            text: null
        }
        links.push(emptyLink);
        this.setState({ links: links })
        console.log(this.state.links)
    }

    saveLinkHandler = (index, event, isUrl) => {
        const links = this.state.links;
        let link;

        isUrl ? link = { url: event.target.value } : link = { text: event.target.value }
        links[index] = link;

        console.log(links[index]);
    }


    render() {
        console.log('length is: ' + this.state.links.length);

        const linkInputHandler = this.state.links.map((link, index) => {
            return <div key={index}>
                <input onChange={(event) => this.saveLinkHandler(index, event, true)} placeholder="URL here... "></input>
                <input onChange={(event) => this.saveLinkHandler(index, event, false)} placeholder="Text here..."></input>
            </div>
        });

        return (
            <div className={style.AddPortfolio}>
                <input type="text"
                    placeholder="Title goes here"></input>
                <textarea placeholder="Body goes here..."></textarea>
                <button
                    onClick={this.addLinkHandler}
                >
                    Add link
                </button>
                {linkInputHandler}
                <input type="button" value="Submit"></input>
            </div>
        )
    }
}

export default AddPortfolio;