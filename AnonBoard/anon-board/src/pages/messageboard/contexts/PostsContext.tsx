import { createContext } from 'react';
import { Post } from '../../../model/Post';

export const PostsContext = createContext<Post[]>([]);
