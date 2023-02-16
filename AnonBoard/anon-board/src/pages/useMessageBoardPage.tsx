import { AppStateContext } from '../contexts/AppStateContext';
import { useContext, useState } from 'react';
import { Post } from '../model/Post';
import { createPost } from '../services/PostsApi';

export const useMessageBoardPage = () => {
    const appState = useContext(AppStateContext);
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
    const handleUpvote = (
        postId: string,
        onComplete?: (post: Post) => void
    ) => {};
    const handleDownvote = (
        postId: string,
        onComplete?: (post: Post) => void
    ) => {};
    return {
        isCreatingNewPost,
        toggleCreatePostForm,
        handleCreatePost,
        handleUpvote,
        handleDownvote
    };
};
