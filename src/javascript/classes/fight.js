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
    this.fightRound++;

    const fighter1Hit =
      this.fighter1.getHitPower() - this.fighter2.getBlockPower();
    const fighter2Hit =
      this.fighter2.getHitPower() - this.fighter1.getBlockPower();

    this.fighter1.takeHit(fighter2Hit);
    this.fighter2.takeHit(fighter1Hit);

    if (this.fighter1.alive && this.fighter2.alive) {
      return;
    }

    this.gameOver = true;

    if (!this.fighter1.alive && !this.fighter2.alive) {
      return; // game ends in a draw
    }

    if (this.fighter1.alive) {
      this.winner = {
        fighter: this.fighter1,
        order: 1
      };
    } else {
      this.winner = {
        fighter: this.fighter2,
        order: 2
      };
    }
  }
}

export default Fight;
