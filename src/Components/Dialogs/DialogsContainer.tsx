import React, {FC} from 'react';
import {ActionType, addMessageAC, DialogsPageStateType, newMessageTextAC} from '../../redux/dialogsReducer';
import {Dialogs} from './Dialogs';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {Dispatch} from 'redux';

type MapStateToPropsType = {
    dialogsPage: DialogsPageStateType
}
type MapDispatchToPropsType = {
    sendMessage: () => void
    changeMessageText: (newText: string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const DialogsContainer: FC<PropsType> = (props) => {
    const {dialogsPage, changeMessageText, sendMessage} = props;

    return (
        <Dialogs dialogsPage={dialogsPage} changeMessageText={changeMessageText} sendMessage={sendMessage}/>
    )
}


const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ActionType>): MapDispatchToPropsType => {
    return {
        sendMessage: () => (dispatch(addMessageAC())),
        changeMessageText: (newText: string) => dispatch(newMessageTextAC(newText))
    }
}

export default connect<MapStateToPropsType, MapDispatchToPropsType, {}, AppStateType>
(mapStateToProps, mapDispatchToProps)(DialogsContainer)