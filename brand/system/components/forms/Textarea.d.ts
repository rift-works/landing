/**
 * A multi-line field with an optional character counter.
 *
 * @startingPoint section="Forms" subtitle="Multi-line field with counter" viewport="700x200"
 */
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: React.ReactNode;
  help?: React.ReactNode;
  error?: React.ReactNode;
  /** Showing maxLength turns on the mono counter. */
  maxLength?: number;
}
export declare function Textarea(props: TextareaProps): JSX.Element;
