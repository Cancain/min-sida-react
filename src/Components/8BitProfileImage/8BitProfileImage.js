import React from 'react';

import profileImg from '../../assets/images/8bitAvatar.png';

const profileImage = (props) => {

    const style = props.style;
    return (
        <div >
            <img style={style} src={profileImg} alt='Me' />
        </div>
    )
}

export default profileImage;