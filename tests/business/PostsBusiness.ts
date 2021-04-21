jest.mock('../../src/repositories/PostsRepository');

import { PostsRepository } from '../../src/repositories';
import { PostsBusiness } from '../../src/business';

describe('Business methods test', ()=> {

    const mockPostsRepository = PostsRepository.getInstance();

    const mockPostsBusiness = new PostsBusiness();

    test('it should retriev the object in bringPosts', async () => {

        await (mockPostsRepository.bringPosts as jest.Mock).mockResolvedValueOnce({result: 'result'});

        await expect(mockPostsBusiness.bringPosts('value')).resolves.toEqual(
            {result: 'result'}
        );
    });

    test('it should retriev the object in bringPostsFilterByUserId', async () => {
        const mockResult = [ { result: 'result' } ];

        await (mockPostsRepository.bringPosts as jest.Mock).mockResolvedValueOnce(mockResult);

        const mockReq = {
            query: {
                userId: '1'
            }
        }
        await expect(mockPostsBusiness.bringPostsFilterByUserId(mockReq)).resolves.toEqual(
            []
        );
    });

});