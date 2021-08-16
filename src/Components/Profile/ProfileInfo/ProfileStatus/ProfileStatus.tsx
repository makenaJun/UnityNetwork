import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string,
};
type StateType = {
    editMode: boolean,
    localStatus: string,
};


export class ProfileStatus extends React.Component<PropsType, StateType> {
    state = {
        editMode: false,
        localStatus: 'Test',
    }

    constructor(props: any) {
        super(props);
        this.toggleEditMode = this.toggleEditMode.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        this.setState({localStatus: value});
    }

    toggleEditMode() {
        this.setState({editMode: !this.state.editMode});
    }


    render() {
        const {status} = this.props;
        const {editMode, localStatus} = this.state;
        return (
            <>
                {editMode ?
                    <input type="text" value={localStatus} onChange={this.onChangeHandler}
                           onBlur={this.toggleEditMode} autoFocus/>
                    : <span onDoubleClick={this.toggleEditMode}>{localStatus}</span>
                }

            </>
        );
    }
};