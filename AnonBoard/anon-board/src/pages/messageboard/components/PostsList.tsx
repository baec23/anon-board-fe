import React, { useContext } from 'react';
import PostCard from './PostCard';
import { PostsContext } from '../contexts/PostsContext';

type PostsListProps = {
    onAddReply: (message: string, parentId?: string) => void;
    parentId?: string;
};
const PostsList = ({ parentId, onAddReply }: PostsListProps) => {
    const posts = useContext(PostsContext);
    let displayedPosts = posts
        .filter((post) => post.parentId == parentId)
        .sort((a, b) => {
            return b.createdTimestamp - a.createdTimestamp;
        });

    return (
        <div>
            <ul className="flex flex-col mt-4 gap-4">
                {displayedPosts.map((post) => {
                    return (
                        <li key={post.id}>
                            <PostCard post={post} onAddReply={onAddReply} />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default PostsList;
