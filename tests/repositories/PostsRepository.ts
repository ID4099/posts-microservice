jest.mock('../../src/tools/Request');

import { PostsRepository } from '../../src/repositories';
import { handlers } from '../../src/tools/Request';

describe('Balance repository tests', () => {
    const axios = {
        get: jest.fn().mockRejectedValue( { data: 'result' } )
    }
    const mockPostsRepository = PostsRepository.getInstance();
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    test('it should return the object in bringPosts', async () => {
        const mockResults = { data:'result' };

        await (handlers({ axios }).get as jest.Mock).mockResolvedValueOnce(mockResults);
        expect(mockPostsRepository.bringPosts(null)).resolves.toEqual(mockResults);
    });

});