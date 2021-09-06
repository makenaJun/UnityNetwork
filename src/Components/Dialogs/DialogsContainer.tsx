import React, {ComponentType, FC} from 'react';
import {addMessage, DialogsPageStateType} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {compose} from 'redux';
import {withAuthRedirect} from '../../hoc/withAuthRouter';

type MapStateToPropsType = {
    dialogsPage: DialogsPageStateType,
    login: string | null,
};
type MapDispatchToPropsType = {
    addMessage: (newMessageText: string) => void,
};
type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const DialogsContainer: FC<PropsType> = (props) => {
    const {dialogsPage, addMessage, login} = props;

    return (
        <Dialogs dialogsPage={dialogsPage} sendMessage={addMessage} login={login}/>
    )
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        login: state.auth.login,
    }
}

export default compose<ComponentType>(
    connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
    (mapStateToProps, {addMessage}),
    withAuthRedirect,
)(DialogsContainer);