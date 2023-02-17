import React, { useCallback } from 'react';
import LabelledInputField from '../../components/LabelledInputField';
import AnonBoardButton from '../../components/AnonBoardButton';
import { useLogin } from './useLogin';
import { AnimatedVisibilityComponent } from '../../components/AnimatedVisibilityComponent';

type LoginPageProps = {
    onChooseUsername: (username: string) => void;
};
const LoginPage = ({ onChooseUsername }: LoginPageProps) => {
    const login = useLogin();

    const errorMessage = useCallback(() => {
        return (
            <AnimatedVisibilityComponent
                visibilityState={login.errorVisibility}
            >
                <div className="flex justify-end mb-2 text-red-500">
                    <h1>{login.errorMessage}</h1>
                </div>
            </AnimatedVisibilityComponent>
        );
    }, [login.errorMessage]);

    return (
        <div className="w-full rounded shadow p-5 bg-blue-100 flex flex-col">
            <LabelledInputField
                id="username"
                labelText={login.stringStore.login_lbl_username}
                value={login.username}
                placeholder={login.stringStore.login_ph_username}
                onInput={(e) => login.setUsername(e.currentTarget.value)}
            />
            <div className="mt-1 mb-2">{errorMessage()}</div>
            <AnonBoardButton
                text={login.stringStore.btn_confirm}
                onClick={() => onChooseUsername(login.username)}
                enabled={login.isFormValid}
            />
        </div>
    );
};

export default LoginPage;
