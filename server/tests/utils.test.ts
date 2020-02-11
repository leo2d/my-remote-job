import { expect } from 'chai';
import 'mocha';

import { formatToBRdate } from '../src/utils/dateFormater';

describe('Format to BR date', () => {
    it('Format success', () => {
        const date = new Date('December 17, 1995 03:24:00');

        expect(formatToBRdate(date)).to.equals('17/12/1995');
    });
});
