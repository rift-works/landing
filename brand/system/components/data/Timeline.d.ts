/**
 * A vertical milestone list. Square markers, hairline connector.
 *
 * @startingPoint section="Data" subtitle="Milestone timeline with past, current and pending" viewport="700x230"
 */
export interface TimelineItem {
  title: React.ReactNode;
  /** Mono date, written "14 · 08 · 2026", or a word like "Pendiente". */
  date: React.ReactNode;
  state?: 'past' | 'current' | 'pending';
}

export interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items?: TimelineItem[];
}
export declare function Timeline(props: TimelineProps): JSX.Element;
