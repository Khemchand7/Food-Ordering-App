import { sum } from "../sum";

console.log(sum);



test("adds 1 + 2 to equal 3", () => {
  const results = sum(3,2);
  expect(results).toBe(5);
});
