const quickSort = require("../quickSort");

test("quickSort sorts array correctly", () => {
  const arr = [89,78,345,656,654,1,65,256,24];

  expect(quickSort(arr)).toEqual(
    [1,24,65,78,89,256,345,654,656]
  );
});
