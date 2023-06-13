import Validator from '../basic.js';


test('test username ', () => {
  let result = Validator.validateUsername(12345);
  expect(result).toEqual(false);

  result = Validator.validateUsername('gary');
  expect(result).toEqual(true);

  result = Validator.validateUsername('_gary');
  expect(result).toEqual(false);

  result = Validator.validateUsername('gary12345');
  expect(result).toEqual(false);

  result = Validator.validateUsername('tik-tok777q');
  expect(result).toEqual(true);

  result = Validator.validateUsername('tik_tok777w');
  expect(result).toEqual(true);

});
