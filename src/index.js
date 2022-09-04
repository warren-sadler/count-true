/**
 * countTrue
 * Given an array of booleans, counts the number of `true` values
 * @param {Array<boolean>} booleans
 * @returns {number}
 */
module.exports = (booleans) => {
  const DEFAULT_VALUE = 0;
  const isArray = Array.isArray(booleans);
  if (!isArray) return DEFAULT_VALUE;
  const areAllBoolean = booleans.every((value) => typeof value === "boolean");
  if (!areAllBoolean) return DEFAULT_VALUE;
  // Booleans can be parsed into numbers via Number constructor
  return booleans.reduce((acc, bool) => acc + Number(bool), DEFAULT_VALUE);
};
