import React, { Component } from 'react'

import style from './AddPortfolio.module.css';

class AddPortfolio extends Component {

    state = {
        title: null,
        body: null,
        links: [
            {}
        ],
        errMsg: null

    }

    addLinkHandler = () => {
        let links = this.state.links;
        const emptyLink = {
            url: null,
            text: null
        }
        links.push(emptyLink);
        this.setState({ links: links })
    }

    saveLinkHandler = (index, event, isUrl) => {
        const links = this.state.links;
        let link;

        isUrl ? link = { url: event.target.value, text: links[index].text } : link = { text: event.target.value, url: links[index].url }
        links[index] = link;
    }

    verifyData = () => {
        const title = this.state.title;
        const body = this.state.body;
        console.log('title is: ' + title);
        console.log('body is: ' + body);
        if (title !== null &&
            body !== null) {
            this.setState({ errMsg: null })
            return true;
        } else {
            console.log('false');
            this.setState({ errMsg: 'No field can be empty' })
            return false;
        }
    }

    submitHandler = () => {
        if (this.verifyData()) {
            const data = this.state;
            console.log(data);
        }
    }

    render() {
        const linkInputHandler = this.state.links.map((link, index) => {
            return <div key={index}>
                <input
                    onChange={(event) => this.saveLinkHandler(index, event, true)}
                    placeholder="URL here... ">
                </input>

                <input
                    onChange={(event) => this.saveLinkHandler(index, event, false)}
                    placeholder="Text here...">
                </input>

            </div>
        });

        return (
            <div className={style.AddPortfolio}>
                <input
                    type="text"
                    placeholder="Title goes here"
                    onChange={(event) => this.setState({ title: event.target.value })}
                >
                </input>

                <textarea
                    placeholder="Body goes here..."
                    onChange={(event) => this.setState({ body: event.target.value })}
                >
                </textarea>

                <button
                    onClick={this.addLinkHandler}
                >
                    Add link
                </button>

                {linkInputHandler}

                <input
                    type="button"
                    value="Submit"
                    onClick={this.submitHandler}
                >
                </input>
                {this.state.errMsg ? <span>{this.state.errMsg}</span> : null}

            </div>
        )
    }
}

export default AddPortfolio;