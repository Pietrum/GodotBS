const BOOL = require('../bool');

describe('[get_var]', () => {
  test('should decode bool value', () => {
    // given
    const buffer = new Buffer('01000000', 'hex');

    // when
    const data = BOOL(buffer);

    // then
    expect(data).toEqual({
      variant: true,
      offset: 4,
    });
  });
});