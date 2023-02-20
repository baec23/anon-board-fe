import React, { useContext } from 'react';
import PostCard from './PostCard';
import { PostsContext } from '../contexts/PostsContext';

type PostsListProps = {
    className?: string;
    onAddReply: (message: string, parentId?: string) => void;
    parentId?: string;
};
const PostsList = ({ className, parentId, onAddReply }: PostsListProps) => {
    const posts = useContext(PostsContext);
    let displayedPosts = posts
        .filter((post) => post.parentId == parentId)
        .sort((a, b) => {
            return b.createdTimestamp - a.createdTimestamp;
        });

    return (
        <ul className={`${className} flex flex-col gap-4`}>
            {displayedPosts.map((post) => {
                return (
                    <li key={post.id}>
                        <PostCard post={post} onAddReply={onAddReply} />
                    </li>
                );
            })}
        </ul>
    );
};

export default PostsList;
