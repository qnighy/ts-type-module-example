import { square } from "./square.js";

describe("square", () => {
  it("squares the number", () => {
    expect(square(42)).toBe(1764);
  });
});

export type T = 42;
