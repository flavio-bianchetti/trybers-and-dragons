import Monster from './Monster';

export default class Dragon extends Monster {
  constructor() {
    super();
    super.setLifePoints(999);
  }

  get lifePoints(): number {
    return super.lifePoints;
  }
}