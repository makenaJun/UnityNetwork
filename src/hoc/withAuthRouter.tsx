import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {AppStateType} from '../redux/store';

type MapStatePropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
    }
}

export function withAuthRedirect<T>(Component: React.ComponentType<T>) {

    function RedirectComponent(props: MapStatePropsType) {
        const {isAuth, ...restProps} = props;
        return isAuth ? <Component {...restProps as T} /> : <Redirect to={'/login'}/>
    }

    return connect<MapStatePropsType, {}, {}, AppStateType>(mapStateToProps)
    (RedirectComponent);
}