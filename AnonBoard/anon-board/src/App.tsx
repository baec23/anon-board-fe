import MessageBoardPage from './pages/MessageBoardPage';
import React, { useEffect, useState } from 'react';
import { Post } from './model/Post';
import LoginPage from './pages/LoginPage';
import { PostsContext } from './contexts/PostsContext';
import { UserContext } from './contexts/UserContext';

function App() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [username, setUsername] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [eventSourceHasError, setEventSourceHasError] = useState(false);

    useEffect(() => {
        let eventSource = new EventSource(
            'http://anon-board.baec23.com:8080/anon-board-api/v1/post'
        );
        setEventSourceHasError(false);
        eventSource.onerror = () => {
            eventSource?.close();
            setEventSourceHasError(true);
        };
        eventSource.onmessage = (e) => {
            setPosts(JSON.parse(e.data));
        };
    }, [eventSourceHasError]);

    return (
        <div className="w-full flex justify-center">
            <div className="w-full max-w-4xl min-w-fit mx-5 my-5 md:mx-10 md:my-16">
                {!isLoggedIn && (
                    <LoginPage
                        onChooseUsername={(username) => {
                            setUsername(username);
                            setIsLoggedIn(true);
                        }}
                    />
                )}
                {isLoggedIn && (
                    <UserContext.Provider value={username}>
                        <PostsContext.Provider value={posts}>
                            <MessageBoardPage
                                onLogout={() => {
                                    setUsername('');
                                    setIsLoggedIn(false);
                                }}
                            />
                        </PostsContext.Provider>
                    </UserContext.Provider>
                )}
            </div>
        </div>
    );
}

export default App;
