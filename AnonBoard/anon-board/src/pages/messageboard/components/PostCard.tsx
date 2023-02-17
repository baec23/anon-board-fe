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
            <div className="shadow px-4 py-3 bg-gray-50 flex flex-col">
                <div className="flex flex-row">
                    <div className="flex-col flex-1">
                        <h3 className="text-neutral-standard text-sm">
                            {post.userDisplayName}
                        </h3>
                        <h1 className="text-lg whitespace-pre-wrap">
                            {post.message}
                        </h1>
                    </div>
                    <div className="self-center">
                        <IconButton
                            icon={
                                <PencilSquareIcon
                                    title={stringStore.messageBoard_tt_reply}
                                />
                            }
                            onClick={() => {
                                setIsReplying(!isReplying);
                            }}
                        />
                    </div>
                </div>
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
                    className="rounded-b p-2 px-5 shadow bg-neutral-200 flex justify-end items-center hover:bg-secondary-light"
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <span className="text-neutral-dark text-md">
                        {stringStore.messageBoard_txt_seeMore}
                    </span>
                    <span className="inline-flex items-center justify-center ml-5 w-5 h-5 p-3 text-sm font-bold text-white bg-secondary-standard rounded">
                        {numChildren}
                    </span>
                </div>
            )}
            {isExpanded && numChildren > 0 && (
                <div
                    className="rounded-b p-2 px-5 shadow bg-neutral-200 flex justify-end items-center hover:bg-secondary-light"
                    onClick={() => {
                        setIsExpanded(!isExpanded);
                    }}
                >
                    <span className="text-neutral-dark text-md">
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
