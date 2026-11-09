/**
 * A single-value slider. Square handle in Oxide; the filled track is Basalt.
 *
 * @startingPoint section="Forms" subtitle="Slider with mono value readout" viewport="700x150"
 */
export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
  label?: React.ReactNode;
  /** Formatted readout, e.g. "USD 25,000". Falls back to the raw value. */
  valueLabel?: React.ReactNode;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
}
export declare function Slider(props: SliderProps): JSX.Element;
