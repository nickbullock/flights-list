import reducer from './index';

describe('reducer', () => {
    it('should return the initial value', () => {
        const initialState = undefined;
        const data = {};
        const expected = {carrier: 'all'};

        expect(reducer(initialState, data)).toEqual(expected);
    });

    it('should handle SET_CARRIER', () => {
        const initialState = {carrier: 'all'};
        const data = { type: 'SET_CARRIER', payload: { carrier: 'S7' }};
        const expected = {carrier: 'S7'};

        expect(reducer(initialState, data)).toEqual(expected);
    })
});
