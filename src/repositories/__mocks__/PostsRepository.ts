const instance = {
    bringPosts: jest.fn(),
};

export const PostsRepository = {
    getInstance: () => instance
};