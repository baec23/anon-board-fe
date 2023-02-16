import MessageBoardPage from './pages/messageboard/MessageBoardPage';
import React from 'react';
import LoginPage from './pages/login/LoginPage';
import { AppStateContext } from './contexts/AppStateContext';
import { useApp } from './hooks/useApp';
import { TopBar } from './components/TopBar';

function App() {
    const app = useApp();
    const appState = app.appState;
    return (
        <AppStateContext.Provider value={appState}>
            <div className="w-full p-5 flex flex-col items-center">
                <div className="w-full flex flex-col max-w-4xl items-center">
                    <TopBar onLogout={app.logout} onToggleLanguage={() => {}} />
                    {!appState.isLoggedIn && (
                        <LoginPage
                            onChooseUsername={(username) => {
                                app.login(username);
                            }}
                        />
                    )}
                    {appState.isLoggedIn && (
                        <MessageBoardPage onLogout={app.logout} />
                    )}
                </div>
            </div>
        </AppStateContext.Provider>
    );
}

export default App;
