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

  //   private opponentsBattle(
  //     player1: Fighter,
  //     player2: Monster | Fighter | SimpleFighter,
  //   ) {
  //     while (player1.lifePoints > 0 && player2.lifePoints > 0) {
  //       player1.attack(player2);
  //       if (player1.lifePoints <= 0) break;
  //       player2.attack(player1);
  //     }
  //     return this.player.lifePoints === -1 ? -1 : 1;
  //   }

  //   public fight(): number {
  //     let result = -1;
  //     for (let index = 0; index < this._opponents.length; index += 1) {
  //       result = this.opponentsBattle(this.player, this._opponents[index]);
  //       if (result === -1) break;
  //     }
  //     return result;
  //   }

  public fight(): number {
    this._opponents.forEach((opponent) => {
      while (this.player.lifePoints > 0 && opponent.lifePoints > 0) {
        this.player.attack(opponent);
        if (opponent.lifePoints <= 0) break; 
        opponent.attack(this.player);
      }
    });
    return super.fight();
  }
}
