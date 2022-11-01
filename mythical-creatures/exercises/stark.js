const Direwolf = require("./direwolf");

class Stark {
    constructor(starkInfo) {
        this.name = starkInfo.name;
        this.location = starkInfo.area || 'Winterfell';
        this.safe = false;
    }
    sayHouseWords() {
        if (this.safe === false) {
        return `Winter is Coming`;
        } else {
        return `The North Remembers`
        }
    }

    callDirewolf(name, location) {
        var direwolf = new Direwolf(name, location);
        direwolf.home = this.location;
        direwolf.protect(this);
        return direwolf;
    }
}

module.exports = Stark;