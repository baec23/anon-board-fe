import React, { useContext } from 'react';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import { useMessageBoard } from './useMessageBoard';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { PostsContext } from './contexts/PostsContext';
import { AnonButton } from '../../components/AnonButton';
import { AnimatedVisibility } from '../../components/AnimatedVisibility';
import { fadeInOutVariants } from '../../animations/fadeInOutVariants';
import { LoadingSpinner } from '../../components/LoadingSpinner';

const MessageBoardPage = () => {
    const messageBoard = useMessageBoard();
    const stringStore = useContext(StringStoreContext);
    return (
        <PostsContext.Provider value={messageBoard.posts}>
            <AnimatedVisibility
                isVisible={!messageBoard.isLoading}
                variants={fadeInOutVariants}
            >
                <div className="w-full flex justify-end">
                    <AnonButton
                        text={stringStore.messageBoard_btn_createNewPost}
                        onClick={messageBoard.toggleCreatePostForm}
                    />
                </div>
            </AnimatedVisibility>

            <AnimatedVisibility isVisible={messageBoard.isCreatingNewPost}>
                <CreatePostForm
                    className="w-full"
                    onSubmit={(message) => messageBoard.createPost(message)}
                    onCancel={() => messageBoard.toggleCreatePostForm()}
                    labelText={stringStore.messageBoard_lbl_createNewPost}
                    placeholderText={stringStore.messageBoard_ph_createNewPost}
                    affirmativeButtonText={stringStore.btn_create}
                    cancelButtonText={stringStore.btn_cancel}
                />
            </AnimatedVisibility>

            <AnimatedVisibility isVisible={messageBoard.isLoading}>
                <LoadingSpinner className="w-full flex justify-center pt-16" />
            </AnimatedVisibility>

            <AnimatedVisibility isVisible={!messageBoard.isLoading}>
                <PostsList
                    className="mt-5"
                    onAddReply={messageBoard.createPost}
                />
            </AnimatedVisibility>
        </PostsContext.Provider>
    );
};

export default MessageBoardPage;
