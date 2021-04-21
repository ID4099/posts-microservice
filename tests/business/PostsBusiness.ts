jest.mock('../../src/repositories/PostsRepository');

import { PostsRepository } from '../../src/repositories';
import { PostsBusiness } from '../../src/business';

describe('Business methods test', ()=> {

    const mockPostsRepository = PostsRepository.getInstance();

    const mockPostsBusiness = new PostsBusiness();

    test('it should retriev the object in bringCurrentRequest', async () => {

        await (mockPostsRepository.bringPosts as jest.Mock).mockResolvedValueOnce({result: 'result'});

        await expect(mockPostsBusiness.bringPosts('value')).resolves.toEqual(
            {result: 'result'}
        );
    });

});