import React, { useContext, useState } from 'react';
import { Post } from '../../../model/Post';
import { PencilSquareIcon } from '@heroicons/react/24/outline';
import PostsList from './PostsList';
import { CreatePostForm } from './CreatePostForm';
import { StringStoreContext } from '../../../contexts/StringStoreContext';
import { IconButton } from '../../../components/IconButton';

type PostCardProps = {
    post: Post;
    onAddReply: (message: string, parentId?: string) => void;
};
const PostCard = ({ post, onAddReply }: PostCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    const stringStore = useContext(StringStoreContext);
    let numChildren = post.childIds.length;

    return (
        <>
            <div className="rounded-t shadow p-5 bg-gray-200 flex flex-col mt-5">
                <div className="w-full flex flex-row mb-2">
                    <span className="whitespace-nowrap">
                        {post.userDisplayName}
                    </span>
                    <div className="w-full flex justify-end">
                        <span className="w-fit flex justify-evenly gap-5">
                            <IconButton
                                icon={
                                    <PencilSquareIcon
                                        title={
                                            stringStore.messageBoard_tt_reply
                                        }
                                    />
                                }
                                size="w-8"
                                color="text-black"
                                hoverColor="text-blue-500"
                                activeColor="text-blue-700"
                                onClick={() => {
                                    setIsReplying(true);
                                }}
                            />
                        </span>
                    </div>
                </div>

                <p className="text-xl whitespace-pre-wrap mx-5">
                    {post.message}
                </p>

                {isReplying && (
                    <CreatePostForm
                        onSubmit={(message) => {
                            onAddReply(message, post.id);
                            setIsReplying(false);
                            setIsExpanded(true);
                        }}
                        onCancel={() => setIsReplying(false)}
                        labelText={stringStore.messageBoard_lbl_addReply}
                        placeholderText={stringStore.messageBoard_ph_addReply}
                        affirmativeButtonText={stringStore.btn_addReply}
                        cancelButtonText={stringStore.btn_cancel}
                    />
                )}
            </div>
            {!isExpanded && numChildren > 0 && (
                <div
                    className="rounded-b p-2 px-5 shadow bg-gray-300 flex justify-end items-center hover:bg-blue-100"
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <span className="text-black text-lg">
                        {stringStore.messageBoard_txt_seeMore}
                    </span>
                    <span className="inline-flex items-center justify-center ml-5 w-5 h-5 p-3 text-xl font-bold text-black bg-blue-400 rounded">
                        {numChildren}
                    </span>
                </div>
            )}
            {isExpanded && numChildren > 0 && (
                <div
                    className="rounded-b p-2 px-5 shadow bg-gray-300 flex justify-end items-center hover:bg-blue-100"
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <span className="text-black text-lg">
                        {stringStore.messageBoard_txt_seeLess}
                    </span>
                </div>
            )}
            {isExpanded && (
                <div className="ml-10">
                    <PostsList parentId={post.id} onAddReply={onAddReply} />
                </div>
            )}
        </>
    );
};

export default PostCard;
