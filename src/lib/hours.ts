/** Opening-hours rules for The Yellow Oven. All checks use Ahmedabad time, not the visitor's clock. */
export const CAFE_TIMEZONE = "Asia/Kolkata";
/** Opens at 11:00 AM every day. */
export const OPENS_AT_HOUR = 11;
/** Closes at 1:00 AM (the following morning) every day. */
export const CLOSES_AT_HOUR = 1;

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function cafeClock(date: Date) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CAFE_TIMEZONE,
    weekday: "short",
    hour: "numeric",
    minute: "numeric",
    hourCycle: "h23",
  }).formatToParts(date);
  const get = (type: string) => parts.find((p) => p.type === type)?.value ?? "";
  return {
    hour: Number(get("hour")) % 24,
    minute: Number(get("minute")),
    day: WEEKDAYS.indexOf(get("weekday")),
  };
}

export function isCafeOpen(date: Date): boolean {
  const { hour } = cafeClock(date);
  return hour >= OPENS_AT_HOUR || hour < CLOSES_AT_HOUR;
}

export function cafeStatus(date: Date) {
  const open = isCafeOpen(date);
  if (open) {
    const { hour } = cafeClock(date);
    return {
      open,
      headline: "Open now",
      detail: hour < CLOSES_AT_HOUR ? "Serving until 1:00 AM" : "Serving until 1:00 AM tonight",
    };
  }
  return { open, headline: "Closed now", detail: "Opens at 11:00 AM today" };
}

export function formatCafeTime(date: Date) {
  return new Intl.DateTimeFormat("en-IN", {
    timeZone: CAFE_TIMEZONE,
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  })
    .format(date)
    .toUpperCase();
}
