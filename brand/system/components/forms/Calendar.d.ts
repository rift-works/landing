/**
 * A month calendar. Monday-first, zero-padded mono figures, bilingual month names.
 *
 * @startingPoint section="Forms" subtitle="Month calendar with an Oxide selected day" viewport="700x300"
 */
export interface CalendarProps {
  /** 0-indexed month. */
  month?: number;
  year?: number;
  /** Day of month, or null. */
  selected?: number | null;
  onSelect?: (day: number) => void;
  locale?: 'es' | 'en';
  style?: React.CSSProperties;
}
export declare function Calendar(props: CalendarProps): JSX.Element;
