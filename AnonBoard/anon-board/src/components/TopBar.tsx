import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';
import { IconButton } from './IconButton';
import { LanguageIcon, UserMinusIcon } from '@heroicons/react/24/outline';

type TopBarProps = {
    onLogout: () => void;
    onToggleLanguage: () => void;
};
export const TopBar = ({ onLogout, onToggleLanguage }: TopBarProps) => {
    const appState = useContext(AppStateContext);
    const visibleState = appState.isLoggedIn ? '' : 'invisible';
    console.log(visibleState);

    const ControlButtons = () => {
        return (
            <div className={`flex flex-row flex-nowrap ${visibleState}`}>
                <IconButton
                    icon={<LanguageIcon title="Change Language" />}
                    size="w-8"
                    color="text-black"
                    hoverColor="text-blue-500"
                    activeColor="text-blue-700"
                    onClick={onToggleLanguage}
                />
                <div className="w-5" />
                <IconButton
                    icon={<UserMinusIcon title="Logout" />}
                    size="w-8"
                    color="text-black"
                    hoverColor="text-blue-500"
                    activeColor="text-blue-700"
                    onClick={onLogout}
                />
            </div>
        );
    };

    return (
        <div className="w-full flex flex-row py-5 items-start">
            <div className="flex flex-col flex-1">
                <h1 className="text-3xl text-blue-500 font-semibold">
                    AnonBoard
                </h1>
                <div className={`flex flex-row items-baseline ${visibleState}`}>
                    <span className="text-black">Welcome,</span>
                    <span className="w-1" />
                    <span className="text-xl text-black">
                        {appState.loggedInUserDisplayName}
                    </span>
                </div>
            </div>
            <ControlButtons />
        </div>
    );
};
