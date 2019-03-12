import React, { useState } from 'react'

const addPortfolio = (props) => {

    let [count, setCount] = useState(0);

    const click = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <button onClick={this.click}>Click</button>
        </div>
    )
}

export default addPortfolio;