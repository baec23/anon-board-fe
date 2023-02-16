import React from 'react';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import AnonBoardButton from '../components/AnonBoardButton';
import { useMessageBoardPage } from './useMessageBoardPage';

type MessageBoardPageProps = {
    onLogout: () => void;
};
const MessageBoardPage = ({ onLogout }: MessageBoardPageProps) => {
    const messageBoard = useMessageBoardPage();

    return (
        <div className="w-auto">
            <div className="w-full flex justify-between">
                <AnonBoardButton
                    text="Create New Post"
                    onClick={() => messageBoard.toggleCreatePostForm()}
                />
                <AnonBoardButton text="Logout" onClick={onLogout} />
            </div>
            {messageBoard.isCreatingNewPost && (
                <div className="w-full flex justify-center mt-5">
                    <CreatePostForm
                        onSubmit={(message) =>
                            messageBoard.handleCreatePost(message)
                        }
                        onCancel={() => messageBoard.toggleCreatePostForm()}
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
