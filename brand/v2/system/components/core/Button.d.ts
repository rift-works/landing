/**
 * The system's only button. Mono, uppercase, square, no shadow.
 *
 * @startingPoint section="Core" subtitle="Primary, secondary, ghost and accent, in two sizes" viewport="700x150"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = Basalt fill · secondary = outline · ghost = bare · accent = Oxide fill (once per view). */
  variant?: 'primary' | 'secondary' | 'ghost' | 'accent';
  size?: 'sm' | 'md';
  disabled?: boolean;
  fullWidth?: boolean;
  children?: React.ReactNode;
}

export declare function Button(props: ButtonProps): JSX.Element;
