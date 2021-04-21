import { handlers } from '../../src/tools/Request';

describe('Request handlers', () => {

    const axios = {
        get: jest.fn().mockResolvedValue({ data: 'results' })
    }

    describe('get', () => {
        it('', async () => {
            const mockResult = 'results';
            await expect(handlers( { axios } ).get('url')).resolves.toEqual(mockResult);
        })
    })
})