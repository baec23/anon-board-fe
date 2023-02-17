import { usePosts } from './hooks/usePosts';
import { useEffect, useState } from 'react';

export type AppState = {
    loggedInUserDisplayName: string;
    isLoggedIn: boolean;
    selectedLanguage: 'EN' | 'KO';
};
export const useApp = () => {
    const posts = usePosts();
    const [selectedLanguage, setSelectedLanguage] = useState<'EN' | 'KO'>('EN');
    const [appState, setAppState] = useState<AppState>({
        loggedInUserDisplayName: '',
        isLoggedIn: false,
        selectedLanguage: selectedLanguage
    });
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
                posts: posts,
                loggedInUserDisplayName: prevState.loggedInUserDisplayName,
                isLoggedIn: prevState.isLoggedIn,
                selectedLanguage: prevState.selectedLanguage
            };
        });
    }, [posts]);
    useEffect(() => {
        setAppState((prevState) => {
            return {
                loggedInUserDisplayName: prevState.loggedInUserDisplayName,
                isLoggedIn: prevState.isLoggedIn,
                selectedLanguage: selectedLanguage
            };
        });
    }, [selectedLanguage]);

    return { appState, login, logout, toggleSelectedLanguage };
};
