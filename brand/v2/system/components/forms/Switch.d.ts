/**
 * A square toggle. Position and fill both change, so state survives greyscale.
 *
 * @startingPoint section="Forms" subtitle="Square toggle in both states" viewport="700x150"
 */
export interface SwitchProps {
  label?: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
