import React, { useState } from 'react';
import { Post } from '../../model/Post';
import {
    ArrowDownCircleIcon,
    ArrowUpCircleIcon,
    PencilSquareIcon
} from '@heroicons/react/24/outline';
import PostsList from './PostsList';
import { CreatePostForm } from './CreatePostForm';

type PostCardProps = {
    post: Post;
    onAddReply: (message: string, parentId?: string) => void;
    onUpvote: (postId: string) => void;
    onDownvote: (postId: string) => void;
};
const PostCard = ({
    post,
    onAddReply,
    onUpvote,
    onDownvote
}: PostCardProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isReplying, setIsReplying] = useState(false);
    let numChildren = post.childIds.length;

    return (
        <>
            <div className="rounded-t shadow p-5 bg-gray-200 flex flex-col mt-5">
                <div className="w-full flex flex-row mb-2">
                    <span className="w-fit whitespace-nowrap">
                        {post.userDisplayName}
                    </span>
                    <div className="w-full flex justify-end">
                        <span className="w-fit flex justify-evenly gap-5">
                            <ArrowUpCircleIcon
                                className="w-7 hover:text-green-400 active:text-blue-500"
                                onClick={(event) => {
                                    onUpvote(post.id);
                                    event.stopPropagation();
                                }}
                            />
                            <ArrowDownCircleIcon
                                className="w-7 hover:text-red-400 active:text-blue-500"
                                onClick={(event) => {
                                    onDownvote(post.id);
                                    event.stopPropagation();
                                }}
                            />
                            <PencilSquareIcon
                                className="w-7 hover:text-blue-700 active:text-blue-500"
                                onClick={(event) => {
                                    setIsReplying(!isReplying);
                                    event.stopPropagation();
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
                        }}
                        onCancel={() => setIsReplying(false)}
                        labelText="Add a reply"
                        affirmativeButtonText="Reply"
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
                    <span className="text-black text-lg">See more...</span>
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
                    <span className="text-black text-lg">See less...</span>
                </div>
            )}
            {isExpanded && (
                <div className="ml-10">
                    <PostsList
                        parentId={post.id}
                        onAddReply={onAddReply}
                        onUpvote={onUpvote}
                        onDownvote={onDownvote}
                    />
                </div>
            )}
        </>
    );
};

export default PostCard;
