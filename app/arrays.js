exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((accumulator, current) => accumulator + current, 0);
  },

  remove: function(arr, item) {
    return arr.filter((value) => value !== item);
  },

  removeWithoutCopy: function(array, item) {
    while (array.indexOf(item) !== -1) {
      array.splice(array.indexOf(item), 1);
    }
    return array;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let cont = 0;
    arr.forEach(element => {
      if (element === item) {
        cont++;
      }
    });
    return cont;
  },

  duplicates: function(arr) {
    const duplicates = arr.sort().reduce((acc, current, idx) => {
      if (arr.indexOf(current) !== idx && acc.indexOf(current) < 0) {
        acc.push(current);
      }
      return acc;      
    }, []);
    return duplicates;
  },

  square: function(arr) {
    return arr.map(value => Math.pow(value, 2));
  },

  findAllOccurrences: function(arr, target) {
    const results = [];
    arr.forEach((element, idx) => {
      if (element === target) {
        results.push(idx);
      }
    });
    return results;
  }
};
