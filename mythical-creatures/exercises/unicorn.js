class Unicorn {
  constructor(name, color = 'white') {
    this.name = name;
    this.color = color || 'blue';
  }
  isWhite() {
    if (this.color === 'white') {
      return true
    } else {
      return false
    }
  }
  says(str) {
    return `**;* ${str} *;**`;
  }
}

module.exports = Unicorn;
