import React from 'react';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import AnonBoardButton from '../../components/AnonBoardButton';
import { useMessageBoard } from './useMessageBoard';

type MessageBoardPageProps = {
    onLogout: () => void;
};
const MessageBoardPage = ({ onLogout }: MessageBoardPageProps) => {
    const messageBoard = useMessageBoard();

    return (
        <div className="w-full">
            <div className="w-full flex justify-between">
                <AnonBoardButton
                    text="Create New Post"
                    onClick={() => messageBoard.toggleCreatePostForm()}
                />
            </div>
            {messageBoard.isCreatingNewPost && (
                <div className="w-full flex justify-center mt-5">
                    <CreatePostForm
                        onSubmit={(message) => messageBoard.createPost(message)}
                        onCancel={() => messageBoard.toggleCreatePostForm()}
                    />
                </div>
            )}
            <PostsList
                onAddReply={messageBoard.createPost}
                onUpvote={messageBoard.upvote}
                onDownvote={messageBoard.downvote}
            />
        </div>
    );
};

export default MessageBoardPage;
