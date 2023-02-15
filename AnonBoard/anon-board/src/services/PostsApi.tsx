import axios from 'axios';

const postsApi = axios.create({
    baseURL: 'http://anon-board.baec23.com:8080/anon-board-api/v1'
});

type CreatePostRequest = {
    userDisplayName: string;
    message: string;
    parentId: string | undefined;
};

export const createPost = async (createPostRequest: CreatePostRequest) => {
    const response = await postsApi.post('/post', createPostRequest);
    return response.data;
};
