import MessageBoardPage from './pages/messageboard/MessageBoardPage';
import React from 'react';
import LoginPage from './pages/login/LoginPage';
import { AppStateContext } from './contexts/AppStateContext';
import { useApp } from './useApp';
import { TopBar } from './components/TopBar';
import { StringStoreContext } from './contexts/StringStoreContext';

function App() {
    const app = useApp();
    const appState = app.appState;
    return (
        <StringStoreContext.Provider value={app.currStringStore}>
            <AppStateContext.Provider value={appState}>
                <div className="w-full px-5 pt-10 pb-20 flex flex-col items-center">
                    <div className="w-full flex flex-col max-w-4xl items-center">
                        <TopBar
                            onLogout={app.logout}
                            onToggleLanguage={app.toggleSelectedLanguage}
                        />
                        <div className="w-full px-10">
                            {!appState.isLoggedIn && (
                                <LoginPage
                                    onChooseUsername={(username) => {
                                        app.login(username);
                                    }}
                                />
                            )}
                            {appState.isLoggedIn && <MessageBoardPage />}
                        </div>
                    </div>
                </div>
            </AppStateContext.Provider>
        </StringStoreContext.Provider>
    );
}

export default App;
