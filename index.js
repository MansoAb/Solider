let solider = {
  name: "Mans",
  health: 10,
  weapon: { name: "pistol", rounds: 30 },
  supplies: 3,
  fire: function () {
    if (this.weapon.rounds > 0) {
      this.weapon.rounds -= 1;
      console.log("бах-бах");
    } else {
      return "обойма пуста. Перезаредитесь";
    }
  },
  recharge: function () {
    if (this.supplies > 0) {
      this.weapon.rounds = 30;
      this.supplies -= 1;
      console.log("Перезарядка...");
    } else {
      return "не осталось припасов";
    }
  },
  hurt: function () {
    if (this.health > 0) {
      this.health -= 1;
      if (this.health === 0) {
        console.log("Ты проиграл");
      }
    }
  },
};
