import React, { Fragment } from 'react';

import me from '../../assets/images/me.png'

const RLProfileImage = (props) => {

    const style = {
        borderRadius: '7px',
        marginTop: '3vh',
        marginBottom: '3vh'
    }

    return (
        <Fragment>
            <img style={style} src={me} alt="Me" />
        </Fragment>
    )
}

export default RLProfileImage;