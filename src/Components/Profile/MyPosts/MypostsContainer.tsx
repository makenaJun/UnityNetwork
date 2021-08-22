import React, {FC} from 'react';
import {addPost, PostType} from '../../../redux/profileReducer';
import {MyPosts} from './Myposts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/store';

type MapStateToPropsType = {
    postsData: Array<PostType>,
}
type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void,
}

type PropsType = MapStateToPropsType & MapDispatchToPropsType

export const MyPostsContainer: FC<PropsType> = (props) => {
    const {postsData, addPost} = props;

    return (
        <MyPosts postsData={postsData} addPost={addPost}
        />
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps,
    {addPost})(MyPostsContainer);