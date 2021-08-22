import React, {ChangeEvent} from 'react';

type PropsType = {
    status: string | null,
    updateUserStatus: (status: string) => void,
};
type StateType = {
    editMode: boolean,
    localStatus: string,
};


export class ProfileStatus extends React.Component<PropsType, StateType> {
    constructor(props: any) {
        super(props);
        this.state = {
            editMode: false,
            localStatus: '',
        };
        this.onEditMode = this.onEditMode.bind(this);
        this.offEditMode = this.offEditMode.bind(this);
        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    //TODO control syncing a status

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<StateType>) {
        if (prevProps.status !== this.props.status && this.props.status !== this.state.localStatus) {
            const value = this.props.status === null ? '' : this.props.status;
            this.setState({localStatus: value});
        }
    }

    onChangeHandler(e: ChangeEvent<HTMLInputElement>) {
        const value = e.currentTarget.value;
        this.setState({localStatus: value});
    }


    onEditMode() {
        this.setState({editMode: true});
    }

    offEditMode() {
        if (this.state.localStatus !== this.props.status) {
            this.props.updateUserStatus(this.state.localStatus);
        }
        this.setState({editMode: false});
    }


    render() {
        const {status} = this.props;
        const {editMode, localStatus} = this.state;
        return (
            <>
                {editMode ?
                    <input type="text" value={localStatus} onChange={this.onChangeHandler}
                           onBlur={this.offEditMode} autoFocus/>
                    : <span onDoubleClick={this.onEditMode}>{status || 'Status not installed'}</span>
                }

            </>
        );
    }
};