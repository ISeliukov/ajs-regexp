import {health, sortHealth, Character} from '../basic.js';
import Bowman from '../Bowman.js';



test("basic test", () => {
    let result = 4;
    expect(result).toBe(4);
});

test("health test", () => {
    let result = health({name: '���', health: 90});
    expect(result).toBe("healthy");
    result = health({name: '���', health: 50});
    expect(result).toBe("wounded");
    result = health({name: '���', health: 15});
    expect(result).toBe("critical");
});

test("health sort test", () => {
    let result = sortHealth([
      {name: '������', health: 10},
      {name: '���', health: 100},
      {name: '������', health: 80},
      ]);

    expect(result).toEqual([
      {name: '���', health: 100},
      {name: '������', health: 80},
      {name: '������', health: 10},
    ]);
});




test("Character test", () => {
    let result = new Character('����', 'Bowman');
    expect(result.type).toBe('Bowman');
    result = new Character('����', 'Swordsman');
    expect(result.type).toBe('Swordsman');
    result = new Character('����', 'Magician');
    expect(result.type).toBe('Magician');
    result = new Character('����', 'Daemon');
    expect(result.type).toBe('Daemon');
    result = new Character('����', 'Undead');
    expect(result.type).toBe('Undead');
    result = new Character('����', 'Zombie');
    expect(result.type).toBe('Zombie');

});


test('check Character error name', () => {
  expect(() => {
    const char = new Character('b', 'Character');
  }).toThrowError('Name length is not correct');
});

test('check Character error type', () => {
  expect(() => {
    const char = new Character('abcd', 'Character');
  }).toThrowError('Type is not correct');
});

test('check level up', () => {
  const char = new Character('abcd', 'Bowman');
  char.levelUp();
  expect({level: char.level, health: char.health}).toEqual({level: 2, health: 100});
  char.health = 0;
  expect(() => {
    char.levelUp();
  }).toThrowError('Level up for dead is not allowed');
});

test("Character damage test", () => {
    let result = new Bowman('����', 'Bowman');
    result.damage(20);
    expect(result.health).toBe(85);
    result.damage(1000);
    expect(result.health).toBe(0);
});
