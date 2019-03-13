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
        errMsg: null,
        highestId: null
    }

    componentDidMount() {
        this.getHighestId();
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

        isUrl ?
            link = { url: event.target.value, text: links[index].text } :
            link = { text: event.target.value, url: links[index].url }
        links[index] = link;
    }

    //Verifies that there is no errors int he text for the title and body
    verifyData = () => {
        const title = this.state.title;
        const body = this.state.body;
        if (title !== null &&
            body !== null) {
            this.setState({ errMsg: null })
            return true;
        } else {
            this.setState({ errMsg: 'No field can be empty' })
            return false;
        }
    }

    //Gets the highest posible ID in the talble "portfolios"
    //sets the highest id to "highestId" under state
    getHighestId = () => {
        axios.get('Portfolios/getHighestId/-1')
            .then(response => {

                const id = parseInt(response.data);
                this.setState({ highestId: id });
                console.log(typeof (id));
                console.log(id + 1);
            });
    }

    //Connects to the API and adds the post
    submitHandler = () => {
        if (this.verifyData()) {
            const data = this.state;
            const json = JSON.stringify(data);
            axios.post('Portfolios/addPortfolio/-1', json)
                .then(response => {
                    console.log(response.data);
                    this.setState({ errMsg: 'Post Added' });
                    this.resetPost();
                });
        }
    }

    resetPost = () => {
        this.setState({
            title: null,
            body: null,
            links: [{}]
        })
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
                <h1>Add Portfolio</h1>
                <input
                    value={this.state.title}
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

                {linkInputHandler}
                <button
                    onClick={this.addLinkHandler}
                >
                    Add link
                </button>

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