import { createContext } from 'react';
import { AppState } from '../hooks/useAppState';

export const AppStateContext = createContext<AppState>({
    posts: [],
    loggedInUserDisplayName: undefined,
    isLoggedIn: false
});
