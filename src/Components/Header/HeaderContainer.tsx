import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import axios from 'axios';
import {setAuthUserData} from '../../redux/auth-reducer';

type MapStatePropsType = {
    login: string | null
    userId: number | null
    isAuth: boolean
}
type MapDispathPropsType = {
    setUserData: (login: string, userId: number, email: string) => void
}

type PropsType = MapStatePropsType & MapDispathPropsType
type StateType = {}

class HeaderContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        }).then(res => {
            if (res.data.resultCode === 0) {
                const {login, id, email} = res.data.data
                this.props.setUserData(login, id, email);
            }
        })
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
    {setUserData: setAuthUserData})(HeaderContainer)