export default function sum(items) {
  let result = 0;
  for (const item of items) {
    result += item;
  }
  return result;
}

export function health(obj) {
  if (obj.health > 50) return 'healthy';
  if (obj.health > 15) return 'wounded';
  return 'critical';
}

export function sortHealth(arr) {
  const arrsort = arr.sort((a, b) => {
    const res = parseFloat(b.health) - parseFloat(a.health);
    return res;
  });
  return arrsort;
}

const types = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export class Character {
  constructor(name, type) {
    if ((name.trim().length < 2) || (name.trim().length > 10)) {
      throw new Error('Name length is not correct');
    }
    if (!types.includes(type)) {
      throw new Error('Type is not correct');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this.attack += 20;
      this.defence += 20;
      this.health = 100;
    } else {
      throw new Error('Level up for dead is not allowed');
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  }
}
