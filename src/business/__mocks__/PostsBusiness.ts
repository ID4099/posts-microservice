const mockPostsBusiness = {
    bringPosts: jest.fn(),
    bringPostsFilterByUserId: jest.fn()
};

export const PostsBusiness = jest.fn().mockImplementation(() => mockPostsBusiness);