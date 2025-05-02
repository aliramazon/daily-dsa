// Implement a function `range(..)` that accepts one or two number arguments.
// If two arguments are given, return an array of numbers from the first to the second (inclusive).
// If only one argument is given, return a function that expects the second argument
// and then returns the full range array.

const range = (start, end) => {
  if (end === undefined) {
    return (end) => {
      return buildRange(start, end);
    };
  }

  return buildRange(start, end);
};

const buildRange = (start, end) => {
  const range = [];

  for (let i = start; i <= end; i++) {
    range.push(i);
  }

  return range;
};

console.log(range(1, 5));
console.log(range(0, -6));

const range1 = range(4);
console.log(range1(0));
