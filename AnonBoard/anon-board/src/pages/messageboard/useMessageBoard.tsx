import { AppStateContext } from '../../contexts/AppStateContext';
import { useContext, useState } from 'react';
import { Post } from '../../model/Post';
import { createPost } from '../../services/apis/PostsApi';
import { usePosts } from '../../hooks/usePosts';

export const useMessageBoard = () => {
    const appState = useContext(AppStateContext);
    const [posts, isLoading] = usePosts();

    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false);
    const toggleCreatePostForm = () => {
        setIsCreatingNewPost(!isCreatingNewPost);
    };
    const handleCreatePost = (
        message: string,
        parentId?: string,
        onComplete?: (post: Post) => void
    ) => {
        createPost({
            userDisplayName: appState.loggedInUserDisplayName,
            message: message,
            parentId: parentId
        }).then((result) => {
            if (onComplete) onComplete(result);
            return result;
        });
        setIsCreatingNewPost(false);
    };

    return {
        posts,
        isLoading,
        isCreatingNewPost,
        toggleCreatePostForm,
        createPost: handleCreatePost
    };
};
