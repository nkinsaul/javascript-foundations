
class Dragon {
    constructor (name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungry = true;
        this.eatCount = 0;
    }
    greet() {
        return `Hi, ${this.rider}!`;
    }
    eat() {
        if (this.eatCount<2) {
            this.eatCount++;
        } else {
            this.hungry = false;
        }  
    }
}





module.exports = Dragon;