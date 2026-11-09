/**
 * A single-line text field. Inputs are the one thing in the system with a radius (4px).
 *
 * @startingPoint section="Forms" subtitle="Labelled text field with help and error states" viewport="700x180"
 */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Mono uppercase label. A noun, not a sentence. */
  label?: React.ReactNode;
  help?: React.ReactNode;
  /** Replaces help and turns the border Negative. */
  error?: React.ReactNode;
}
export declare function Input(props: InputProps): JSX.Element;
