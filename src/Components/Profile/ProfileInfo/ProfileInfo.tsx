import React, {FC} from 'react';
import {UserContactsType, UserProfileType} from '../../../redux/profileReducer';
import {Preloader} from '../../common/Preloader/Preloader';
import Avatar from '../../common/Avatar/Avatar';
import {ProfileStatus} from './ProfileStatus/ProfileStatus';

type PropsType = {
    profile: UserProfileType | null,
    status: null | string,
    updateUserStatus: (status: string) => void,
};

export const ProfileInfo: FC<PropsType> = (props) => {
    const {profile, status, updateUserStatus} = props;
    if (!profile) {
        return <Preloader loaderVisible={true}/>
    }
    return (

        <div>
            <Avatar link={null} alt={`Photo ${profile.fullName}`} urlImg={profile.photos?.large} size={'large'}/>


            <h3>Full Name: {profile.fullName}</h3>

            <div><ProfileStatus status={status}
                                updateUserStatus={updateUserStatus}
            />
            </div>


            <div>About me: {profile.aboutMe}</div>
            <div>Contacts: {Object.keys(profile.contacts).map(k => {
                return <div key={k}><b>{k}</b>: {profile.contacts[k as keyof UserContactsType]}</div>
            })
            }</div>
        </div>
    )
}