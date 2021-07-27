import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {getAuthUserData} from '../../redux/auth-reducer';

type MapStatePropsType = {
    login: string | null
    userId: number | null
    isAuth: boolean
}
type MapDispathPropsType = {
    getAuthUserData: () => void
}

type PropsType = MapStatePropsType & MapDispathPropsType
type StateType = {}

class HeaderContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }

    render() {
        return (
            <Header login={this.props.login} userId={this.props.userId} isAuth={this.props.isAuth}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default connect<MapStatePropsType, MapDispathPropsType, {}, AppStateType>(mapStateToProps,
    {getAuthUserData})(HeaderContainer)