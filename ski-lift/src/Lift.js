var Skier = require('./Skier');

class Lift {
  constructor (personLimit) {
    this.inService = true;
    this.limit = personLimit;
    this.skiers = [];
    this.safetyBar = 'up';
  }
  admitSkier(skierName, liftTicket) {
    if (liftTicket === false) {
        return `Sorry, ${skierName}. You need a lift ticket!`
    } else if (this.limit > this.skiers.length) {
        var newSkier = new Skier(skierName, liftTicket);
        this.skiers.push(newSkier);
    } else {
        return `Sorry, ${skierName}. Please wait for the next lift!`
    }
  }
  startLift() {
    var limitDiff = this.limit - this.skiers.length
    if (this.limit === this.skiers.length) {
        this.safetyBar = 'down';
    } else if (limitDiff === 1) {
        return `We still need ${limitDiff} more skier!`
    } else if (limitDiff > 0) {
        return `We still need ${limitDiff} more skiers!`
    }
  }
}

module.exports = Lift;