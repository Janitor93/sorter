class Sorter {
  constructor() {
    this.array = [];
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let tempArray = [];
    tempArray = this.array.filter((el, i, self) => indices.indexOf(i) !== -1);
    if(this.comparator !== undefined) {
      tempArray.sort(this.comparator);
    } else {
      tempArray.sort((a, b) => a - b);
    }

    this.array.forEach((el, i, self) => {
      if(indices.indexOf(i) !== -1)
        this.array[i] = tempArray.shift();
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;
