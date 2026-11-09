/**
 * A chip field for multiple values. Chips are square and monospaced.
 *
 * @startingPoint section="Forms" subtitle="Removable square chips in a field" viewport="700x150"
 */
export interface MultiSelectProps {
  label?: React.ReactNode;
  value?: string[];
  onChange?: (value: string[]) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function MultiSelect(props: MultiSelectProps): JSX.Element;
