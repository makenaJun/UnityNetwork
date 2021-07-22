import React, {FC} from 'react';
import styles from './Avatar.module.scss';
import noAvatar from '../../../assets/image/noavatar.jpg';
import {Link} from 'react-router-dom';

type SizeAvatarType = 'small' | 'normal' | 'large'

type PropsType = {
    /*
    Link to go
     */
    link: string | null
    /*
    Alternative text for images (required)
     */
    alt: string
    /*
    Image link or null (required)
     */
    urlImg: string | null
    /*
    Size 'small or normal or large'
     */
    size: SizeAvatarType
}

export const Avatar: FC<PropsType> = (props) => {
    const {link, alt, urlImg, size} = props;

    const Avatar = (<div className={`${styles.avatar} ${styles[size]}`}>
        <img
            src={urlImg === null ? noAvatar : urlImg}
            alt={alt}
        />
    </div>)

    if (link === null) {
        return (<div>{Avatar}</div>)
    }

    return (
        <Link to={link}>
            {Avatar}
        </Link>
    );
};

export default Avatar;