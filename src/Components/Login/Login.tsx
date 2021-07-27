import React, {FC} from 'react';

export const Login: FC = () => {
    return (
        <>
            <input type="text" placeholder={'login'}/><br/>
            <input type="text" placeholder={'password'}/><br/>
            <button>login</button>
        </>
    );
};

