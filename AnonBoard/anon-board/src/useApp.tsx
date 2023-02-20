import { useMemo, useState } from 'react';
import { StringStore_en } from './services/strings/StringStore_en';
import { StringStore_kr } from './services/strings/StringStore_kr';

export type AppState = {
    loggedInUserDisplayName: string;
    isLoggedIn: boolean;
    selectedLanguage: 'EN' | 'KO';
};
export const useApp = () => {
    const [appState, setAppState] = useState<AppState>({
        loggedInUserDisplayName: '',
        isLoggedIn: false,
        selectedLanguage: 'EN'
    });
    const currStringStore = useMemo(() => {
        return appState.selectedLanguage === 'EN'
            ? StringStore_en
            : StringStore_kr;
    }, [appState.selectedLanguage]);
    const login = (username: string) => {
        setAppState((prev) => {
            return {
                loggedInUserDisplayName: username,
                isLoggedIn: true,
                selectedLanguage: prev.selectedLanguage
            };
        });
    };
    const logout = () => {
        setAppState((prev) => {
            return {
                loggedInUserDisplayName: '',
                isLoggedIn: false,
                selectedLanguage: prev.selectedLanguage
            };
        });
    };
    const toggleSelectedLanguage = () => {
        setAppState((prev) => {
            let newSelectedLanguage: 'EN' | 'KO' = 'EN';
            if (prev.selectedLanguage === 'EN') newSelectedLanguage = 'KO';
            return {
                loggedInUserDisplayName: prev.loggedInUserDisplayName,
                isLoggedIn: prev.isLoggedIn,
                selectedLanguage: newSelectedLanguage
            };
        });
    };

    return { appState, currStringStore, login, logout, toggleSelectedLanguage };
};
