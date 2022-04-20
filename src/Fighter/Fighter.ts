import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';

// solução abaixo resolvida com auxílio dos colegas
// @Caio Magalhães e @Sayro Damaceno
export default interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;
  special(enemy: Fighter | SimpleFighter): void;
  levelUp(): void;
}
