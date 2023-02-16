import { usePosts } from './usePosts';
import { useEffect, useState } from 'react';
import { Post } from '../model/Post';

export type AppState = {
    posts: Post[];
    loggedInUserDisplayName: string;
    isLoggedIn: boolean;
};
export const useApp = () => {
    const posts = usePosts();
    const [appState, setAppState] = useState<AppState>({
        posts: [],
        loggedInUserDisplayName: '',
        isLoggedIn: false
    });
    const login = (username: string) => {
        setAppState({
            posts: posts,
            loggedInUserDisplayName: username,
            isLoggedIn: true
        });
    };
    const logout = () => {
        setAppState({
            posts: posts,
            loggedInUserDisplayName: '',
            isLoggedIn: false
        });
    };
    useEffect(() => {
        setAppState((prevState) => {
            return {
                posts: posts,
                loggedInUserDisplayName: prevState.loggedInUserDisplayName,
                isLoggedIn: prevState.isLoggedIn
            };
        });
    }, [posts]);

    return { appState, login, logout };
};
