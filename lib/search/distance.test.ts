
import { describe, expect, it } from "vitest";
import { osaDistance } from "./distance";

describe("osaDistance", () => {
  it("returns 0 for identical strings", () => {
    expect(osaDistance("which", "which")).toBe(0);
  });

  it("returns 0 for two empty strings", () => {
    expect(osaDistance("", "")).toBe(0);
  });

  it("returns the length when one string is empty", () => {
    expect(osaDistance("", "abc")).toBe(3);
    expect(osaDistance("abc", "")).toBe(3);
  });

  it("calculates insertion, deletion, and substitution", () => {
    expect(osaDistance("whic", "which")).toBe(1);
    expect(osaDistance("which", "whic")).toBe(1);
    expect(osaDistance("whic", "whiz")).toBe(1);
  });

  it("calculates adjacent transposition as one operation", () => {
    expect(osaDistance("whcih", "which")).toBe(1);
    expect(osaDistance("ab", "ba")).toBe(1);
  });

  it("calculates multiple operations", () => {
    expect(osaDistance("weather", "whether")).toBe(2);
    expect(osaDistance("abc", "xyz")).toBe(3);
  });

  it("does not normalize input strings", () => {
    expect(osaDistance("WHO", "who")).toBe(3);
    expect(osaDistance("a b", "ab")).toBe(1);
  });
});
