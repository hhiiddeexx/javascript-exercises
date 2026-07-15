const removeFromArray = function (arr, ...args) {
  // return arr.filter((item) => a !== item && b !== item);
  // Solution
  return arr.filter((item) => !args.includes(item));
};

let arr = ([1, 2, 3, 4], 3);

// Do not edit below this line
module.exports = removeFromArray;
