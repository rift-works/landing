/**
 * A determinate bar with a mono percentage readout.
 */
export interface ProgressBarProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: React.ReactNode;
  /** 0–100. */
  value?: number;
}
export declare function ProgressBar(props: ProgressBarProps): JSX.Element;
