import React, { useEffect } from 'react';
import LoginPage from './pages/login/LoginPage';
import { AppStateContext } from './contexts/AppStateContext';
import { useApp } from './useApp';
import { TopBar } from './components/TopBar';
import { StringStoreContext } from './contexts/StringStoreContext';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import MessageBoardPage from './pages/messageboard/MessageBoardPage';
import { AnimatePresence } from 'framer-motion';

function App() {
    const app = useApp();
    const appState = app.appState;
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        if (appState.isLoggedIn) {
            navigate('/board');
        } else {
            navigate('/login');
        }
    }, [appState.isLoggedIn]);
    return (
        <StringStoreContext.Provider value={app.currStringStore}>
            <AppStateContext.Provider value={appState}>
                <div className="w-full px-5 pt-10 pb-20 flex flex-col items-center">
                    <div className="w-full flex flex-col max-w-4xl items-center">
                        <TopBar
                            onLogout={app.logout}
                            onToggleLanguage={app.toggleSelectedLanguage}
                        />
                        <AnimatePresence>
                            <Routes location={location} key={location.key}>
                                <Route
                                    path="login"
                                    element={
                                        <LoginPage
                                            onChooseUsername={(username) => {
                                                app.login(username);
                                            }}
                                        />
                                    }
                                />
                                <Route
                                    path="board"
                                    element={<MessageBoardPage />}
                                />
                            </Routes>
                        </AnimatePresence>
                    </div>
                </div>
            </AppStateContext.Provider>
        </StringStoreContext.Provider>
    );
}

export default App;
