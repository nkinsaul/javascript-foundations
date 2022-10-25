class Centaur {
    constructor(centaurDetails = {name: 'Natalie'}) {
        this.name = centaurDetails.name;
        this.breed = centaurDetails.type;
        this.cranky = false;
        this.crankyMeter = 0;
        this.standing = true;
        this.layingDown = false;
    }
    shootBow() {
        this.crankyMeter = this.crankyMeter + 1
        if (this.crankyMeter >= 3 || this.layingDown === true) {
            this.cranky = true;
            return `NO!`;
        }
        return `Twang!!!`;
    }
    run() {
        this.crankyMeter = this.crankyMeter + 1
        if (this.crankyMeter >= 3 || this.layingDown === true) {
        this.cranky = true;
        return `NO!`;
        }
        return `Clop clop clop clop!!!`
    }
    sleep() {
        if (this.standing === true) {
            return `NO!`;
        } else if (this.layingDown === true) {
            this.cranky = false;
            this.crankyMeter = 0;
            return `ZZZZ`;
        }
    }
    layDown() {
        if (this.layingDown === false) {
            this.layingDown = true;
            this.standing = false;
        }
    }
    standUp() {
        if (this.layingDown === true) {
            this.layingDown = false;
            this.standing = true;
        }
    }
    drinkPotion() {
        if (this.standing === false) {
            return `Not while I'm laying down!`
        } else if (this.standing === true) {
            this.crankyMeter = 0;
            this.cranky = false;
        }
    }
}

module.exports = Centaur;

