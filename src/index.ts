import Battle, { PVP } from './Battle';
import PVE from './Battle/PVE';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const player1: Character = new Character('Cyrom');
const player2: Character = new Character('Balwamel');
const player3: Character = new Character('Teldimont');

for (let index = 0; index < 500; index += 1) {
  player1.levelUp();
}

const monster1: Monster = new Monster();
const monster2: Dragon = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => {
    battle.fight();
  });
}

export {
  player1,
  player2,
  player3,
  monster1,
  monster2,
  pvp,
  pve,
  runBattles,
};
