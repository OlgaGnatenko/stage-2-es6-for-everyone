import Fighter from "./fighter";

class Fight {
  fighter1;
  fighter2;
  fightRound;
  gameOver;
  winner;

  constructor(fighter1, fighter2) {
    this.fighter1 = new Fighter(fighter1);
    this.fighter2 = new Fighter(fighter2);
    this.fightRound = 0;
    this.gameOver = false;
    this.winner = null;
  }

  startNextRound() {
    if (this.gameOver) {
      return;
    }

    const fighter1Hit = fighter1.getHitPower() - this.fighter2.getBlockPower();
    const fighter2Hit = fighter2.getHitPower() - this.fighter1.getBlockPower();

    this.fighter1.takeHit(fighter1Hit);
    this.fighter2.takeHit(fighter2Hit);

    if (this.fighter1.alive && this.fighter2.alive) {
      return;
    }

    this.gameOver = true;

    if (!this.fighter1.alive && !this.fighter2.alive) {
      return; // game ends in a draw
    }

    this.fighter1.alive ? (this.winner = fighter1) : (this.winner = fighter2);
  }
}

export default Fight;
