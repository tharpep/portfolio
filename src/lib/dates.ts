/** "YYYY-MM" (month precision) or "YYYY" (year only). */
export type YearMonth = string;

export interface DateRange {
  start: YearMonth;
  /** Omit for a single point in time; "present" for ongoing work. */
  end?: YearMonth | "present";
}

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const isYearMonth = (value: string) => /^\d{4}(-(0[1-9]|1[0-2]))?$/.test(value);

function parts(value: YearMonth) {
  const [year, month] = value.split("-");
  return { year, month: month ? MONTHS[Number(month) - 1] : undefined };
}

const format = (value: YearMonth) => {
  const { year, month } = parts(value);
  return month ? `${month} ${year}` : year;
};

/**
 * Matches the resume: "Jan 2025 – Present", "Aug – Dec 2025" (same year),
 * "Aug 2023 – May 2026", or "2024".
 */
export function formatDateRange({ start, end }: DateRange): string {
  if (!end) return format(start);
  if (end === "present") return `${format(start)} – Present`;
  const s = parts(start);
  const e = parts(end);
  if (s.year === e.year && s.month && e.month) return `${s.month} – ${e.month} ${e.year}`;
  return `${format(start)} – ${format(end)}`;
}
