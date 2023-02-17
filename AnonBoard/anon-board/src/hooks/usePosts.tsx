import { useEffect, useState } from 'react';
import { Post } from '../model/Post';
import { baseUrl } from '../services/apis/PostsApi';

export const usePosts = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [eventSourceHasError, setEventSourceHasError] = useState(false);

    useEffect(() => {
        let combinedUrl = baseUrl + '/post';
        let eventSource = new EventSource(combinedUrl);
        setEventSourceHasError(false);
        eventSource.onerror = () => {
            eventSource.close();
            setEventSourceHasError(true);
        };
        eventSource.onmessage = (e) => {
            console.log('SSE Message Received');
            setPosts(JSON.parse(e.data));
        };
        return () => {
            eventSource.close();
        };
    }, [eventSourceHasError]);

    return posts;
};
