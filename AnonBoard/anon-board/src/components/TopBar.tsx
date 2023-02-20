import React, { useContext } from 'react';
import { IconButton } from './IconButton';
import {
    Cog6ToothIcon,
    LanguageIcon,
    UserMinusIcon
} from '@heroicons/react/24/outline';
import { AnimatedVisibility } from './AnimatedVisibility';
import { fadeInOutVariants } from '../animations/fadeInOutVariants';
import { AppStateContext } from '../contexts/AppStateContext';
import { StringStoreContext } from '../contexts/StringStoreContext';

type TopBarProps = {
    onLogout: () => void;
    onToggleLanguage: () => void;
};
export const TopBar = ({ onLogout, onToggleLanguage }: TopBarProps) => {
    const appState = useContext(AppStateContext);
    const stringStore = useContext(StringStoreContext);
    const ControlButtons = () => {
        return (
            <div className="flex flex-row flex-nowrap gap-2">
                <AnimatedVisibility
                    isVisible={appState.isLoggedIn}
                    variants={fadeInOutVariants}
                >
                    <IconButton
                        icon={<Cog6ToothIcon title={'WIP'} />}
                        onClick={() => {
                            alert('Not Implemented');
                        }}
                    />
                </AnimatedVisibility>
                <AnimatedVisibility
                    isVisible={appState.isLoggedIn}
                    variants={fadeInOutVariants}
                >
                    <IconButton
                        icon={
                            <UserMinusIcon
                                title={stringStore.topBar_tt_logout}
                            />
                        }
                        onClick={onLogout}
                    />
                </AnimatedVisibility>
                <IconButton
                    icon={
                        <LanguageIcon
                            title={stringStore.topBar_tt_changeLanguage}
                        />
                    }
                    onClick={onToggleLanguage}
                />
            </div>
        );
    };

    return (
        <div className="w-full flex flex-row pb-5 mb-5 h-20">
            <div className="flex flex-col">
                <div className="flex flex-row gap-1 items-end">
                    <div className="flex flex-col items-end gap-2">
                        <h1 className="text-primary-standard font-bold text-5xl">
                            Anon
                        </h1>
                        <AnimatedVisibility
                            isVisible={appState.isLoggedIn}
                            variants={fadeInOutVariants}
                        >
                            <h3 className="text-neutral-standard ">
                                {stringStore.topBar_txt_welcome}
                            </h3>
                        </AnimatedVisibility>
                    </div>
                    <div className="flex flex-col items-start">
                        <h1 className="text-neutral-standard text-5xl">
                            Board
                        </h1>
                        <AnimatedVisibility
                            isVisible={appState.isLoggedIn}
                            variants={fadeInOutVariants}
                        >
                            <h3 className="text-2xl text-primary-standard font-bold">
                                {appState.loggedInUserDisplayName}
                            </h3>
                        </AnimatedVisibility>
                    </div>
                </div>
            </div>
            <div className="flex-1" />
            <ControlButtons />
        </div>
    );
};
