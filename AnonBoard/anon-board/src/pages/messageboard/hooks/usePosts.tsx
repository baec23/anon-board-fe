import { useEffect, useState } from 'react';
import { Post } from '../../../model/Post';
import { baseUrl } from '../../../services/apis/PostsApi';

export const usePosts = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState<Post[]>([]);
    const [eventSourceHasError, setEventSourceHasError] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        let combinedUrl = baseUrl + '/post';
        let eventSource = new EventSource(combinedUrl);
        setEventSourceHasError(false);
        eventSource.onerror = () => {
            eventSource.close();
            setEventSourceHasError(true);
        };
        eventSource.onmessage = (e) => {
            setPosts(JSON.parse(e.data));
            setIsLoading(false);
        };
        return () => {
            eventSource.close();
        };
    }, [eventSourceHasError]);

    return [posts, isLoading] as const;
};
