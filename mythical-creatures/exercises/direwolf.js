class Direwolf {
    constructor(name, home, size) {
        this.name = name,
        this.home = home || 'Beyond the Wall',
        this.size = size || 'Massive'
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }
    protect(stark) {
        if (stark.location === this.home && this.starksToProtect.length < 2) {
            this.starksToProtect.push(stark);
            stark.safe = true;
            this.huntsWhiteWalkers = false;
        }
    }
    leave(stark) {
        var starkIndex = this.starksToProtect.indexOf(stark);
        this.starksToProtect.splice(starkIndex, 1);
        stark.safe = false;
    }
}

module.exports = Direwolf;
