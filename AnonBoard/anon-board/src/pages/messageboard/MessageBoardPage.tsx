import React, { useContext } from 'react';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import { useMessageBoard } from './useMessageBoard';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { PostsContext } from './contexts/PostsContext';

const MessageBoardPage = () => {
    const messageBoard = useMessageBoard();
    const stringStore = useContext(StringStoreContext);

    return (
        <PostsContext.Provider value={messageBoard.posts}>
            <div className="w-full">
                <div className="w-full flex justify-end">
                    <button
                        className="anon-button-animated"
                        onClick={messageBoard.toggleCreatePostForm}
                    >
                        {stringStore.messageBoard_btn_createNewPost}
                    </button>
                </div>

                {messageBoard.isCreatingNewPost && (
                    <div className="w-full flex justify-center mt-5">
                        <CreatePostForm
                            onSubmit={(message) =>
                                messageBoard.createPost(message)
                            }
                            onCancel={() => messageBoard.toggleCreatePostForm()}
                            labelText={
                                stringStore.messageBoard_lbl_createNewPost
                            }
                            placeholderText={
                                stringStore.messageBoard_ph_createNewPost
                            }
                            affirmativeButtonText={stringStore.btn_create}
                            cancelButtonText={stringStore.btn_cancel}
                        />
                    </div>
                )}
                <PostsList onAddReply={messageBoard.createPost} />
            </div>
        </PostsContext.Provider>
    );
};

export default MessageBoardPage;
