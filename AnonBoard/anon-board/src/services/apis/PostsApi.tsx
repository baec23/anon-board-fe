import axios from 'axios';

export const baseUrl = 'http://anon-board.baec23.com:8080/anon-board-api/v1';

const postsApi = axios.create({
    baseURL: baseUrl
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
