/**
 * An empty state. Dashed Field Border frame, the mark as its only graphic.
 *
 * @startingPoint section="Feedback" subtitle="Empty state with the mark and a verb button" viewport="700x230"
 */
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Usually a <Button>. The label is a verb. */
  action?: React.ReactNode;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
