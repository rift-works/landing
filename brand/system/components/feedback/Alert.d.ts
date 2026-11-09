/**
 * An inline message. The tone lives in a 4px left edge and in the wording.
 *
 * @startingPoint section="Feedback" subtitle="Inline alerts in all four tones" viewport="700x220"
 */
export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: 'neutral' | 'positive' | 'negative' | 'info';
  title?: React.ReactNode;
  children?: React.ReactNode;
}
export declare function Alert(props: AlertProps): JSX.Element;
