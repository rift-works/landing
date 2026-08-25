/**
 * A square checkbox. Checked rows go Basalt; the label darkens with them.
 *
 * @startingPoint section="Forms" subtitle="Checkbox and radio, checked and unchecked" viewport="700x150"
 */
export interface CheckboxProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Checkbox(props: CheckboxProps): JSX.Element;
