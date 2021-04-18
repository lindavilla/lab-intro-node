class SortedList {

  constructor() {
    this.items = [];
    this.length = 0;
  }

  add(item) {
    this.items.push(item);
    this.items.sort((a,b) => a-b);
    this.length = this.length + 1;
  }

  get(pos) {
    if (pos < 0 || pos > this.length)
      throw new Error('OutOfBounds');
    else {
      return this.items[pos];
    }
  }

  max() {
    let highestValue = 0;
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
    }
    else {
      
      for (let i = 0; i < this.items.length; i++){
        if (this.items[i] > highestValue) {
          highestValue = this.items[i];
        }
      }
    }
    return highestValue;
  }

  min() {
    let lowestValue = null;
    if (this.items.length === 0){
      throw new Error('EmptySortedList');
      }
      else {
        for (let i=0; i<this.items.length; i++) {
          if (lowestValue === null || this.items[i] < lowestValue) {
            lowestValue = this.items[i];
          }
        }
      }
      return lowestValue;
  }

  sum() {
    let sum = 0;
    for (let i=0; i<this.items.length; i++){
      sum += this.items[i];
    }
    return sum;
    }

  avg() {

    if (this.items.length === 0){
      throw new Error('EmptySortedList');
      }
      else 
        return this.sum() / this.items.length;
  }

}

module.exports = SortedList;

