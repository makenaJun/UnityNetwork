import React, {FC} from 'react';
import {ProfileInfo} from './ProfileInfo/ProfileInfo';
import {ProfileActionType, ProfilePageType} from '../../redux/profileReducer';
import {MyPostsContainer} from './MyPosts/MypostsContainer';
import StoreContext from '../../storeContext';

type PropsType = {
    profilePage: ProfilePageType
    dispatch: (action: ProfileActionType) => void
}

export const Profile: FC<PropsType> = (props) => {
    const {dispatch} = props;
    const {postsData, newPostText} = props.profilePage;
    return (
        <div>
            <ProfileInfo/>
            <StoreContext.Consumer>
                {(store) => {
                    return <div><MyPostsContainer postsData={store.getState().profilePage.postsData}
                                                  newPostText={store.getState().profilePage.newPostText}
                                                  dispatch={store.dispatch}/></div>
                }}
            </StoreContext.Consumer>
        </div>
    )
}