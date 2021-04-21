const mockApp = {
  use: jest.fn(),
  set: jest.fn()
}

const mockServer = {
  listen: jest.fn(),
  on: jest.fn()
};

const mockGrpcServer = {
  addService: jest.fn(),
  bindAsync: jest.fn(),
  start: jest.fn()
};

// Mock node modules
jest.mock('http', () => ({
  createServer: () => mockServer
}));

// Mock controllers
jest.mock('../src/controllers');

const mockExpress = () => mockApp

mockExpress.json = ()=>{};

mockExpress.urlencoded = () => {}

jest.mock('express', () => mockExpress);

import service from '../src/service';
import config from '../src/config.json';

describe("Test Express server", () => {

  afterEach(jest.clearAllMocks);

  test("Test Setting Port ", async () => {
    process.env.PORT = '5000';
    await service.init(mockApp,config)
    expect(mockServer.listen).lastCalledWith(5000);
  });

  test("Test default Port ", async () => {
    process.env.PORT = '';
    await service.init(mockApp,config)
    expect(mockServer.listen).lastCalledWith(8080);
  });
  
  test("Test configs brabches ", async () => {
    process.env.PORT = '';
    config.healtCheck = false;
    config.allowCors = false;
    await service.init(mockApp,config)
    expect(mockServer.listen).lastCalledWith(8080);
  });
  
  test("Test listen ", () => { 
    const result = service.listen(1);
    expect(result).toEqual(1);
  });

  test("Test Error ", () => { 
    const result = service.error(1);
    expect(result).toEqual(1);
  });

});