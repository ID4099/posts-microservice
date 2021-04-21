import { CORS } from "../../src/tools/Cors";

describe("Test CORS tools", () => {
  test("Res is called", () => {
    const header = jest.fn();
    const send = jest.fn();

    const next = jest.fn();
    const res = {
      header,
      send
    };
    const options = (method, fn) => {
      expect(method).toEqual('*');
      fn(null, res);
    }
    CORS({options}, null, res, next);

    expect(header).toHaveBeenCalled();
    expect(send).toHaveBeenCalled();
    expect(next).toHaveBeenCalled();
  });
});