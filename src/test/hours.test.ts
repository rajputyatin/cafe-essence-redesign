import { describe, expect, it } from "vitest";
import { cafeClock, isCafeOpen } from "@/lib/hours";

// Ahmedabad is UTC+5:30, so 11:00 IST = 05:30 UTC.
describe("opening hours (11 AM – 1 AM, Ahmedabad time)", () => {
  it("is open from 11:00 AM", () => {
    expect(isCafeOpen(new Date("2026-11-22T05:30:00Z"))).toBe(true);
  });
  it("is closed at 10:59 AM", () => {
    expect(isCafeOpen(new Date("2026-11-22T05:29:00Z"))).toBe(false);
  });
  it("is still open at 12:30 AM", () => {
    expect(isCafeOpen(new Date("2026-11-21T19:00:00Z"))).toBe(true);
  });
  it("is closed from 1:00 AM", () => {
    expect(isCafeOpen(new Date("2026-11-21T19:30:00Z"))).toBe(false);
  });
  it("uses the Ahmedabad weekday, not UTC", () => {
    // 20:00 UTC Saturday = 01:30 IST Sunday
    expect(cafeClock(new Date("2026-11-21T20:00:00Z")).day).toBe(0);
  });
});
