import React from 'react';
import LabelledInputField from '../../components/LabelledInputField';
import { useLogin } from './useLogin';
import { AnonButton } from '../../components/AnonButton';

type LoginPageProps = {
    onChooseUsername: (username: string) => void;
};
const LoginPage = ({ onChooseUsername }: LoginPageProps) => {
    const login = useLogin();

    return (
        <div className="w-full p-5 flex flex-col justify-end">
            <LabelledInputField
                id="username"
                labelText={login.stringStore.login_lbl_username}
                value={login.username}
                placeholder={login.stringStore.login_ph_username}
                errorMessage={login.errorMessage}
                onInput={(e) => login.setUsername(e.currentTarget.value)}
            />
            <AnonButton
                className="mt-2 self-end"
                text={login.stringStore.btn_confirm}
                isEnabled={login.isFormValid}
                onClick={() => onChooseUsername(login.username)}
            />
        </div>
    );
};

export default LoginPage;
