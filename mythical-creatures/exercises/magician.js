class Magician {
    constructor(magicianDetails) {
        this.name = `The Great ${magicianDetails.name}`,
        this.assistant = magicianDetails.assistant,
        this.favoriteAccessory = magicianDetails.clothing || 'top hat',
        this.confidencePercentage = 10
    } 
    performIncantation (incantation) {
        return `${incantation.toUpperCase()}!`;
    }
    performTrick() {
        this.confidencePercentage += 10;
        if (this.favoriteAccessory === 'top hat') {
            return `PULL RABBIT FROM TOP HAT`
        } else if (this.favoriteAccessory === 'cape') {
            return `PULL DOVE FROM SLEEVE`
        }
    }
    performShowStopper() {
        if (this.confidencePercentage < 100) {
            return `Oh no, this trick is not ready!`
        } else if (this.confidencePercentage >= 100 && this.assistant === true) {
            return `WOW! The magician totally just sawed that person in half!`
        } else if (this.confidencePercentage >= 100 && this.assistant === false) {
            return `Oh no, this trick is not ready!`
        }
    }
}


module.exports = Magician;