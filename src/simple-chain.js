const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    if (arguments.length === 0) this.result.push('( )');
    this.result.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof (position) === 'number' && (position ^ 0) === position && position !== -1 && position <= this.getLength() - 1) {
      this.result.splice(position - 1, 1);
      return this;
    } else  {
      this.result = [];
      throw new Error('Invalid position');
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let final = '';
    this.result.forEach((item, idx) => {
      if (idx !== this.getLength() - 1 && item !== '( )') {
        final += `( ${item} )~~`;
      } else if (item === '( )') {
        final += item
      } else final += `( ${item} )`
    })
    this.result = [];
    return final;
  }
};

module.exports = chainMaker;
