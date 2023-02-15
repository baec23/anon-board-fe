import React, { useContext, useState } from 'react';
import { Post } from '../model/Post';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import AnonBoardButton from '../components/AnonBoardButton';
import { createPost } from '../services/PostsApi';
import { UserContext } from '../contexts/UserContext';

type MessageBoardPageProps = {
    onLogout: () => void;
};
const MessageBoardPage = ({ onLogout }: MessageBoardPageProps) => {
    const [isCreatingNewPost, setIsCreatingNewPost] = useState(false);
    const username = useContext(UserContext);
    const handleCreatePost = (
        message: string,
        parentId?: string,
        onComplete?: (post: Post) => void
    ) => {
        createPost({
            userDisplayName: username,
            message: message,
            parentId: parentId
        }).then((result) => {
            if (onComplete) onComplete(result);
            return result;
        });
    };
    const handleUpvote = (
        postId: string,
        onComplete?: (post: Post) => void
    ) => {};
    const handleDownvote = (
        postId: string,
        onComplete?: (post: Post) => void
    ) => {};

    return (
        <div className="w-auto">
            <div className="w-full flex justify-between">
                <AnonBoardButton
                    text="Create New Post"
                    onClick={() => setIsCreatingNewPost(!isCreatingNewPost)}
                />
                <AnonBoardButton text="Logout" onClick={onLogout} />
            </div>
            {isCreatingNewPost && (
                <div className="w-full flex justify-center mt-5">
                    <CreatePostForm
                        onSubmit={(message) =>
                            handleCreatePost(message, undefined, (post) => {
                                setIsCreatingNewPost(false);
                            })
                        }
                        onCancel={() => setIsCreatingNewPost(false)}
                    />
                </div>
            )}
            <PostsList
                onAddReply={handleCreatePost}
                onUpvote={handleUpvote}
                onDownvote={handleDownvote}
            />
        </div>
    );
};

export default MessageBoardPage;
