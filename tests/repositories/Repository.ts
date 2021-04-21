import { Repository } from '../../src/repositories/Repository';

describe('Repository tests', () => {

    test('Calling getInstance twice should return the same Repository instance', () => {
        expect(Repository.getInstance()).toStrictEqual(Repository.getInstance())
    });

});