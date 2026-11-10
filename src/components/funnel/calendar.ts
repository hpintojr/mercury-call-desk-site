import type { FunnelConfig } from "@/funnels/types";

const stamp = (d: Date) => d.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");

/** Google Calendar link and an .ics data URI for the funnel's event. */
export function calendarLinks(config: FunnelConfig) {
  const e = config.event;
  const start = new Date(e.startsAt);
  const end = new Date(start.getTime() + e.durationMinutes * 60_000);
  const details = e.joinUrl ? `${e.calendarDescription}\n\nJoin: ${e.joinUrl}` : e.calendarDescription;
  const google =
    "https://calendar.google.com/calendar/render?" +
    new URLSearchParams({ action: "TEMPLATE", text: e.title, dates: `${stamp(start)}/${stamp(end)}`, details, location: e.joinUrl || "Online" }).toString();
  const esc = (s: string) => s.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/,/g, "\\,").replace(/;/g, "\;");
  const ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    `PRODID:-//${config.brand.name}//Funnel//EN`,
    "BEGIN:VEVENT",
    `UID:${config.id}@funnel`,
    `DTSTAMP:${stamp(new Date())}`,
    `DTSTART:${stamp(start)}`,
    `DTEND:${stamp(end)}`,
    `SUMMARY:${esc(e.title)}`,
    `DESCRIPTION:${esc(details)}`,
    `LOCATION:${esc(e.joinUrl || "Online")}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ].join("\r\n");
  return { google, ics: `data:text/calendar;charset=utf-8,${encodeURIComponent(ics)}` };
}

/** "Saturday, December 5, 2026" in the event's own US time zone label. */
export function eventDateLabel(config: FunnelConfig) {
  // Format the calendar date as written in startsAt (avoids the viewer's time zone shifting the day).
  const [y, m, d] = config.event.startsAt.slice(0, 10).split("-").map(Number);
  return new Date(Date.UTC(y, m - 1, d, 12)).toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}
