// Mock modules
const mockRouter = jest.fn();

jest.mock('express', () => ({
    Router: jest.fn().mockImplementation(() => (
        {
            get: mockRouter,
            //patch: mockRouter,
            //post: mockRouter
        }
    ))
}));

// Mock business
jest.mock('../../src/business/PostsBusiness');

import { PostsBusiness } from '../../src/business';
import { Posts } from '../../src/controllers/Posts';


describe('Posts controller test', () => {

    afterEach(()=>{
        jest.clearAllMocks();
    });

    describe('Router initialization', () => {

        test('it should call a route with first parameter /posts when Posts controller is instatiated', () => {
            new Posts();
            expect(mockRouter).toHaveBeenNthCalledWith(1, '/posts', expect.anything());
        });
    });

    describe('Controller methods', () => {

        //const nextMock = jest.fn();

        const resMock = {
            send: jest.fn().mockReturnThis(),
            status: jest.fn().mockReturnThis(),
            //set: jest.fn().mockReturnThis()
        };

        const mockPostsBusiness = new PostsBusiness();
        //Happy case
        test('it should set res.send an object with success = true and the result of bringPosts method in response', async()=> {
            
            const reqMock = {
                query: { }
            };
            const mockDataResult = [{ data: 'result' }];
            
            await (mockPostsBusiness.bringPosts as jest.Mock).mockResolvedValueOnce(mockDataResult);

            await (new Posts()).bringPosts(reqMock, resMock);

            expect(resMock.send).toBeCalledWith({
                success: true,
                response: {
                    code: 200,
                    message: "Get posts all successful",
                    results: mockDataResult
                }
            });
        });

        test('it should set res.send an object with success = true and the result of bringPostsFilterByUserId method in response', async()=> {
            
            const reqMock = {
                query: {
                    filter: 'foruser',
                    userId: '2'
                 }
            };
            const mockDataResult = [{ data: 'result' }];
            
            await (mockPostsBusiness.bringPostsFilterByUserId as jest.Mock).mockResolvedValueOnce(mockDataResult);

            await (new Posts()).bringPosts(reqMock, resMock);
            
            expect(resMock.send).toBeCalledWith({
                success: true,
                response: {
                    code: 200,
                    message: "Get posts by user id ",
                    results: mockDataResult
                }
            });
        });

    });

});