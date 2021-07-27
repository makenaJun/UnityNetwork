import React from 'react';
import {AppStateType} from '../../redux/store';
import {connect} from 'react-redux';
import {Profile} from './Profile';
import {getUserProfile, UserProfileType} from '../../redux/profileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {withAuthRedirect} from '../../hoc/withAuthRouter';

type MapStatePropsType = {
    profile: UserProfileType | null
}
type MapDispatchPropsType = {
    getUserProfile: (userId: number) => void
}
type PathParamsType = {
    userId: string
}


type PropsType = RouteComponentProps<PathParamsType> & MapStatePropsType & MapDispatchPropsType
type StateType = {}

class ProfileContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        const userId = this.props.match.params.userId ? this.props.match.params.userId : '2'
        this.props.getUserProfile(+userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps,
    {getUserProfile})(withRouter(withAuthRedirect(ProfileContainer)))