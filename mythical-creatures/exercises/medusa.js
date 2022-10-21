var Person = require('./person');
var Statue = require('./statue');

class Medusa {
    constructor(name) {
        this.name = name;
        this.statues = [];
    }
    gazeAtVictim(victim) {
        var newStatue = new Statue(victim.name) 
        this.statues.push(newStatue);
        if (this.statues.length > 3) {
            var freeStatue = this.statues.shift()
            var returnPerson = new Person(freeStatue.name);
            returnPerson.mood = 'relieved';
            return returnPerson;
        }
    }
}


module.exports = Medusa; 



