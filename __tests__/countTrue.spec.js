const countTrue = require("../src");

describe("countTrue", function () {
  it("should return 0 if no true values are present", function () {
    expect(countTrue([false, false, false])).toEqual(0);
  });
  it("should return expected number of true values", function () {
    const EXPECTED = 3;
    expect(countTrue([true, false, true, true])).toEqual(EXPECTED);
  });
  describe("handling invalid inputs", function () {
    it("should return 0 if not given an array", function () {
      expect(countTrue(37)).toEqual(0);
    });
    it("should return 0 if values of array are not all booleans", function () {
      expect(countTrue([3, 4, true, 45])).toEqual(0);
    });
  });
});
