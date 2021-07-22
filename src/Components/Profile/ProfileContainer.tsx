import React from 'react';
import {AppStateType} from '../../redux/store';
import {connect} from 'react-redux';
import axios from 'axios';
import {Profile} from './Profile';
import {setUserProfile, UserProfileType} from '../../redux/profileReducer';

type MapStatePropsType = {
    profile: UserProfileType | null
}
type MapDispatchPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}


type PropsType = MapStatePropsType & MapDispatchPropsType
type StateType = {}

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(res => {
            const profile: UserProfileType = res.data;
            this.props.setUserProfile(profile)
        })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {setUserProfile})(ProfileContainer)