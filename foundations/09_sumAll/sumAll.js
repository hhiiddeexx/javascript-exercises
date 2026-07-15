const sumAll = function (min, max) {
  const start = Math.min(min, max);
  const end = Math.max(min, max);
  const count = end - start + 1;
  if (min < 0 || max < 0) return "ERROR";
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  return (count * (start + end)) / 2;
};

sumAll(2, 4);

// Do not edit below this line
module.exports = sumAll;
