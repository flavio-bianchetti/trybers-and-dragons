// import Character from '../Character';
import Fighter, { SimpleFighter } from '../Fighter';
import Monster from '../Monster';
import Battle from './Battle';

export default class PVE extends Battle {
  private _opponents: Monster[] | Fighter[] | SimpleFighter[];
  constructor(fighter: Fighter, opponents: Monster[]
  | Fighter[] | SimpleFighter[]) {
    super(fighter);
    this._opponents = opponents;
  }

  public fight(): number {
    this._opponents.forEach((opponent) => {
      while (this.player.lifePoints > 0 && opponent.lifePoints > 0) {
        this.player.attack(opponent);
        if (opponent.lifePoints <= 0) break; 
        opponent.attack(this.player);
      }
    });
    // solução abaixo sugerida por @Pablo Rufat
    return super.fight();
  }
}
