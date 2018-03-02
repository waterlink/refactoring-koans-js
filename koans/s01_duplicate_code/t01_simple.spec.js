import {describe, it} from 'mocha';
import {expect} from 'chai';

describe('01 - simple', () => {
    it('works', () => {
        expect(2 + 2).to.eq(4);
    });
});
