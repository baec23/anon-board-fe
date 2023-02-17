import { createContext } from 'react';
import { AppState } from '../useApp';

export const AppStateContext = createContext<AppState>({
    loggedInUserDisplayName: '',
    isLoggedIn: false,
    selectedLanguage: 'EN'
});
