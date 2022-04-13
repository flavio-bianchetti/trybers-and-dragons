import Battle from './Battle';
import Character from '../Character';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  // private _player1: Character | Fighter;
  private _player2: Character | Fighter;

  constructor(player1: Character | Fighter, player2: Character | Fighter) {
    super(player1);
    // this._player1 = player1;
    this._player2 = player2;
  }

  public fight(): number {
    while (this.player.lifePoints > 0 && this._player2.lifePoints > 0) {
      this.player.attack(this._player2);
      if (this._player2.lifePoints <= 1) break;
      this._player2.attack(this.player);
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
