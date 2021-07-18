import React, {FC} from 'react';
import {ActionsType, addPostAC, changeNewPostTextAC, PostType} from '../../../redux/profileReducer';
import {MyPosts} from './Myposts';
import {connect} from 'react-redux';
import {AppStateType} from '../../../redux/store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    postsData: Array<PostType>
    newPostText: string
}
type MapDispatchToPropsType = {
    addPost: () => void
    changeNewPostText: (newText: string) => void
}


type PropsType = MapStateToPropsType & MapDispatchToPropsType

export const MyPostsContainer: FC<PropsType> = (props) => {
    const {postsData, newPostText, addPost, changeNewPostText} = props;

    return (
        <MyPosts postsData={postsData} addPost={addPost} changeNewPostText={changeNewPostText}
                 newPostText={newPostText}/>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ActionsType>): MapDispatchToPropsType => {
    return {
        changeNewPostText: (newText: string) => dispatch(changeNewPostTextAC(newText)),
        addPost: () => dispatch(addPostAC())
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPostsContainer);