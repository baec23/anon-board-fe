import React, { useState } from 'react';
import LabelledInputField from '../components/LabelledInputField';
import DisplaySection from '../components/DisplaySection';
import AnonBoardButton from '../components/AnonBoardButton';

type LoginPageProps = {
    onChooseUsername: (username: string) => void;
};
const LoginPage = ({ onChooseUsername }: LoginPageProps) => {
    const [username, setUsername] = useState('');
    return (
        <div>
            <DisplaySection>
                <LabelledInputField
                    id="username"
                    labelText="Username"
                    value={username}
                    placeholder="Choose a Username"
                    onInput={(e) => setUsername(e.currentTarget.value)}
                />
                <div className="h-5" />
                <AnonBoardButton
                    text="Confirm"
                    onClick={() => onChooseUsername(username)}
                />
            </DisplaySection>
        </div>
    );
};

export default LoginPage;
