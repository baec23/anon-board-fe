import React, { useContext } from 'react';
import PostsList from './components/PostsList';
import { CreatePostForm } from './components/CreatePostForm';
import AnonBoardButton from '../../components/AnonBoardButton';
import { useMessageBoard } from './useMessageBoard';
import { StringStoreContext } from '../../contexts/StringStoreContext';
import { PostsContext } from './contexts/PostsContext';
import { AnimatedVisibilityComponent } from '../../components/AnimatedVisibilityComponent';

const MessageBoardPage = () => {
    const messageBoard = useMessageBoard();
    const stringStore = useContext(StringStoreContext);

    return (
        <PostsContext.Provider value={messageBoard.posts}>
            <div className="w-full">
                <div className="w-full flex justify-end">
                    <AnonBoardButton
                        text={stringStore.messageBoard_btn_createNewPost}
                        color="blue-500"
                        activeColor="blue-700"
                        onClick={() => messageBoard.toggleCreatePostForm()}
                    />
                </div>
                <AnimatedVisibilityComponent
                    isVisible={messageBoard.isCreatingNewPost}
                >
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
                </AnimatedVisibilityComponent>
                {/*{messageBoard.isCreatingNewPost && (*/}
                {/*    <div className="w-full flex justify-center mt-5">*/}
                {/*        <CreatePostForm*/}
                {/*            onSubmit={(message) =>*/}
                {/*                messageBoard.createPost(message)*/}
                {/*            }*/}
                {/*            onCancel={() => messageBoard.toggleCreatePostForm()}*/}
                {/*            labelText={*/}
                {/*                stringStore.messageBoard_lbl_createNewPost*/}
                {/*            }*/}
                {/*            placeholderText={*/}
                {/*                stringStore.messageBoard_ph_createNewPost*/}
                {/*            }*/}
                {/*            affirmativeButtonText={stringStore.btn_create}*/}
                {/*            cancelButtonText={stringStore.btn_cancel}*/}
                {/*        />*/}
                {/*    </div>*/}
                {/*)}*/}
                <PostsList onAddReply={messageBoard.createPost} />
            </div>
        </PostsContext.Provider>
    );
};

export default MessageBoardPage;
