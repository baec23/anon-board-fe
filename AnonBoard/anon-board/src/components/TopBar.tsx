import React, { useContext } from 'react';
import { AppStateContext } from '../contexts/AppStateContext';
import { IconButton } from './IconButton';
import { LanguageIcon, UserMinusIcon } from '@heroicons/react/24/outline';
import { StringStoreContext } from '../contexts/StringStoreContext';

type TopBarProps = {
    onLogout: () => void;
    onToggleLanguage: () => void;
};
export const TopBar = ({ onLogout, onToggleLanguage }: TopBarProps) => {
    const appState = useContext(AppStateContext);
    const stringStore = useContext(StringStoreContext);
    const isLoggedInElementsVisible = appState.isLoggedIn
        ? 'visible'
        : 'invisible';

    const LoggedInElements = () => {
        return (
            <div
                className={`flex flex-row flex-1 items-baseline ml-2 mr-5 ${isLoggedInElementsVisible}`}
            >
                <div className="flex flex-row items-baseline">
                    <span className="text-black">
                        {stringStore.topBar_txt_welcome}
                    </span>
                    <span className="w-1" />
                    <span className="text-xl text-black">
                        {appState.loggedInUserDisplayName}
                    </span>
                </div>
                <div className="flex flex-1" />
                <LoggedInButtons />
            </div>
        );
    };
    const LoggedInButtons = () => {
        return (
            <IconButton
                icon={<UserMinusIcon title={stringStore.topBar_tt_logout} />}
                size="w-8"
                color="text-black"
                hoverColor="text-blue-500"
                activeColor="text-blue-700"
                onClick={onLogout}
            />
        );
    };

    const ControlButtons = () => {
        return (
            <div className="flex flex-row flex-nowrap">
                <IconButton
                    icon={
                        <LanguageIcon
                            title={stringStore.topBar_tt_changeLanguage}
                        />
                    }
                    size="w-8"
                    color="text-black"
                    hoverColor="text-blue-500"
                    activeColor="text-blue-700"
                    onClick={onToggleLanguage}
                />
            </div>
        );
    };

    return (
        <div className="w-full flex flex-row py-5 items-baseline">
            <h1 className="text-3xl text-blue-500 font-semibold">AnonBoard</h1>
            <LoggedInElements />
            <ControlButtons />
        </div>
    );
};
