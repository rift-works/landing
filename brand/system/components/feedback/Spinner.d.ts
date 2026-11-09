/**
 * An indeterminate loader — a square ring, not a circle.
 */
export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Shown beside the ring and used as the accessible label. */
  label?: string;
  size?: number;
}
export declare function Spinner(props: SpinnerProps): JSX.Element;
