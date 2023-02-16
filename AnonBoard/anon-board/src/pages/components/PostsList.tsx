import React, { useContext } from 'react';
import PostCard from './PostCard';
import { AppStateContext } from '../../contexts/AppStateContext';

type PostsListProps = {
    onAddReply: (message: string, parentId?: string) => void;
    onUpvote: (postId: string) => void;
    onDownvote: (postId: string) => void;
    parentId?: string;
};
const PostsList = ({
    parentId,
    onAddReply,
    onUpvote,
    onDownvote
}: PostsListProps) => {
    const appState = useContext(AppStateContext);
    let displayedPosts = appState.posts
        .filter((post) => post.parentId == parentId)
        .sort((a, b) => {
            return b.createdTimestamp - a.createdTimestamp;
        });

    return (
        <div>
            <ul>
                {displayedPosts.map((post) => {
                    return (
                        <li key={post.id}>
                            <PostCard
                                post={post}
                                onAddReply={onAddReply}
                                onUpvote={onUpvote}
                                onDownvote={onDownvote}
                            />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PostsList;
