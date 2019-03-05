import React from 'react';

import profileImg from '../../assets/images/8bitAvatar.png'
import style from './ProfileImage.module.css'

const profileImage = (props) => {
    return (
        <div className={style.ProfileImage}>
            <img src={profileImg} alt='Me' />
        </div>
    )
}

export default profileImage;