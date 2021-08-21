import React, {ComponentType} from 'react';
import {AppStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {getUserProfile, getUserStatus, updateUserStatus, UserProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRouter';
import {compose} from 'redux';

type MapStatePropsType = {
    profile: UserProfileType | null,
    status: null | string,
};
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void,
    getUserStatus: (userId: number) => void,
    updateUserStatus: (status: string) => void,
};
type PathParamsType = {
    userId: string,
};


type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType
type StateType = {}

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        const userId = Number(this.props.match.params.userId ? this.props.match.params.userId : 2);
        this.props.getUserProfile(userId);
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}
                     status={this.props.status}
                     updateUserStatus={this.props.updateUserStatus}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
    }
}

export default compose<ComponentType>(
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
        {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);