import reducer from './../../src/reducers/reducer';

describe('reducer', () => {
  test('Should return default state if there is no action type', () => {
    expect(reducer({}, { type: null })).toEqual({});
  });
});
