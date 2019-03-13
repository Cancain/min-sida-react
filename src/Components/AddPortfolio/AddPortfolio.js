import React, { Component } from 'react'
import axios from 'axios';

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

    //Adds two new inputs who takes in data about one more link
    addLinkHandler = () => {
        let links = this.state.links;
        const emptyLink = {
            url: null,
            text: null
        }
        links.push(emptyLink);
        this.setState({ links: links })
    }

    //Saves the text fom the input
    //IsUrl is a boolean to decide whether the function should update url or text for the link
    saveLinkHandler = (index, event, isUrl) => {
        const links = this.state.links;
        let link;

        isUrl ? link = { url: event.target.value, text: links[index].text } : link = { text: event.target.value, url: links[index].url }
        links[index] = link;
    }

    //Verifies that there is no errors int he text for the title and body
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

    //Connects to the API and adds the post
    submitHandler = () => {
        if (this.verifyData()) {
            const data = this.state;
            const json = JSON.stringify(data);
            axios.post('Portfolios/addPortfolio/-1', json)
                .then(response => {
                    console.log(response.data);
                });
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