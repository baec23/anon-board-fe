import { usePosts } from './hooks/usePosts';
import { useEffect, useState } from 'react';
import { StringStore } from './services/strings/StringStore';
import { StringStore_en } from './services/strings/StringStore_en';
import { StringStore_kr } from './services/strings/StringStore_kr';

export type AppState = {
    loggedInUserDisplayName: string;
    isLoggedIn: boolean;
    selectedLanguage: 'EN' | 'KO';
};
export const useApp = () => {
    const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'KO'>('EN');
    const [appState, setAppState] = useState<AppState>({
        loggedInUserDisplayName: '',
        isLoggedIn: false,
        selectedLanguage: selectedLanguage
    });

    const [currStringStore, setCurrStringStore] =
        useState<StringStore>(StringStore_en);
    useEffect(() => {
        switch (appState.selectedLanguage) {
            case 'EN':
                setCurrStringStore(StringStore_en);
                break;
            case 'KO':
                setCurrStringStore(StringStore_kr);
                break;
            default:
                setCurrStringStore(StringStore_en);
        }
    }, [appState.selectedLanguage]);
    const login = (username: string) => {
        setAppState({
            loggedInUserDisplayName: username,
            isLoggedIn: true,
            selectedLanguage: selectedLanguage
        });
    };
    const logout = () => {
        setAppState({
            loggedInUserDisplayName: '',
            isLoggedIn: false,
            selectedLanguage: selectedLanguage
        });
    };
    const toggleSelectedLanguage = () => {
        let newSelectedLanguage: 'EN' | 'KO' = 'EN';
        if (selectedLanguage === 'EN') newSelectedLanguage = 'KO';
        setSelectedLanguage(newSelectedLanguage);
    };

    useEffect(() => {
        setAppState((prevState) => {
            return {
                loggedInUserDisplayName: prevState.loggedInUserDisplayName,
                isLoggedIn: prevState.isLoggedIn,
                selectedLanguage: selectedLanguage
            };
        });
    }, [selectedLanguage]);

    return { appState, currStringStore, login, logout, toggleSelectedLanguage };
};
