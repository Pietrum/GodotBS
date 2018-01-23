const REAL = require('../real');

describe('[get_float]', () => {
  test('should decode float value', () => {
    // given
    const buffer = new Buffer('0000b040', 'hex');

    // when
    const data = REAL.get_float(buffer);

    // then
    expect(data).toEqual({
      variant: 5.5,
      offset: 4,
    });
  });
});

describe('[get_double]', () => {
  test('should decode double value', () => {
    // given
    const buffer = new Buffer('6666666666661640', 'hex');

    // when
    const data = REAL.get_double(buffer);

    // then
    expect(data).toEqual({
      variant: 5.6,
      offset: 8,
    });
  });
});