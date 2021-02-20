import { foo } from "./foo";

describe("foo", () => {
  it("is the answer", () => {
    expect(foo).toBe(42);
  });
});