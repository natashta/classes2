import Character from '../src/js/character';

test('Работа метода levelUp', () => {
  const input = new Character('Name', 10);

  const expected = {
    name: 'Name',
    level: 2,
    health: 100,
    defence: 12,
    attack: 48,
  };

  input.levelUp();
  expect(input).toEqual(expected);
});

test('Метод levelUp при health = 0 должен давать ошибку', () => {
  const input = new Character('Name', 0);

  const received = () => input.levelUp();
  expect(received).toThrow();
});
