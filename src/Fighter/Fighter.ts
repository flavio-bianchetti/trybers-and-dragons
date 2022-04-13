import Energy from '../Energy';

export interface FighterAttributes {
  lifePoints: number;
  strength: number;
  defense: number;
  energy?: Energy;
}

export default interface Fighter extends FighterAttributes {
  attack(enemy: Fighter | FighterAttributes): void;
  special(enemy: Fighter | FighterAttributes): void;
  levelUp(): void;
  receiveDamage(attackPoints: number): void;
}
