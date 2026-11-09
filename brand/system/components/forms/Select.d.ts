/**
 * A single-choice listbox. The open panel has a Basalt frame, not a shadow.
 *
 * @startingPoint section="Forms" subtitle="Dropdown with the selected row marked by an Oxide edge" viewport="700x240"
 */
export interface SelectOption { value: string; label?: string; }

export interface SelectProps {
  label?: React.ReactNode;
  /** Strings, or { value, label } objects. */
  options?: (SelectOption | string)[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
