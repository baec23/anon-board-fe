import { createContext } from 'react';
import { AppState } from '../hooks/useApp';

export const AppStateContext = createContext<AppState>({
    posts: [],
    loggedInUserDisplayName: '',
    isLoggedIn: false
});
