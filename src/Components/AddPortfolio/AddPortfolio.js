import React, { useState } from 'react'

const addPortfolio = (props) => {

    let [title, setTitle] = useState(null);
    let [body, setBody] = useState(null)

    const click = () => {
        setTitle('hello world');
    }

    return (
        <div>
            <label>{title}</label>
            <button onClick={click}>Click</button>
        </div>
    )
}

export default addPortfolio;