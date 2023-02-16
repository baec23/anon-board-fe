import MessageBoardPage from './pages/MessageBoardPage';
import React from 'react';
import LoginPage from './pages/LoginPage';
import { AppStateContext } from './contexts/AppStateContext';
import { useAppState } from './hooks/useAppState';

function App() {
    const [appState, login, logout] = useAppState();
    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl min-w-fit mx-5 my-5 md:mx-10 md:my-16">
                {!appState.isLoggedIn && (
                    <LoginPage
                        onChooseUsername={(username) => {
                            login(username);
                        }}
                    />
                )}
                {appState.isLoggedIn && (
                    <AppStateContext.Provider value={appState}>
                        <MessageBoardPage onLogout={logout} />
                    </AppStateContext.Provider>
                )}
            </div>
        </div>
    );
}

export default App;
