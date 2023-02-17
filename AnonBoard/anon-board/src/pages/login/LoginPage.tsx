import React, { useCallback } from 'react';
import LabelledInputField from '../../components/LabelledInputField';
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
                <div className="flex justify-end mb-2 text-error">
                    <h1>{login.errorMessage}</h1>
                </div>
            </AnimatedVisibilityComponent>
        );
    }, [login.errorMessage]);

    return (
        <div className="w-full p-5 flex flex-col justify-end">
            <LabelledInputField
                id="username"
                labelText={login.stringStore.login_lbl_username}
                value={login.username}
                placeholder={login.stringStore.login_ph_username}
                onInput={(e) => login.setUsername(e.currentTarget.value)}
            />
            <div className="mt-1 mb-2">{errorMessage()}</div>
            <button
                className="anon-button-animated self-end"
                disabled={!login.isFormValid}
                onClick={() => onChooseUsername(login.username)}
            >
                {login.stringStore.btn_confirm}
            </button>
        </div>
    );
};

export default LoginPage;
