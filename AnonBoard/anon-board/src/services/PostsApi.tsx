import axios from 'axios';

const postsApi = axios.create({
    baseURL: 'http://localhost:8080/anon-board-api/v1'
});

type CreatePostRequest = {
    userDisplayName: string;
    message: string;
    parentId: string | undefined;
};

export const createPost = async (createPostRequest: CreatePostRequest) => {
    const response = await postsApi.post('/post', createPostRequest);
    console.log('response = ' + response.data.id);
    return response.data;
};
