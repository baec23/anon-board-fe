import React from 'react';
import LabelledInputField from '../../components/LabelledInputField';
import { useLogin } from './useLogin';
import { AnonButton } from '../../components/AnonButton';
import { motion } from 'framer-motion';
import { pageVariants } from '../../animations/pageVariants';

type LoginPageProps = {
    onChooseUsername: (username: string) => void;
};
const LoginPage = ({ onChooseUsername }: LoginPageProps) => {
    const login = useLogin();
    return (
        <motion.div
            className="w-full p-5 flex flex-col justify-end"
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
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
        </motion.div>
    );
};
export default LoginPage;
