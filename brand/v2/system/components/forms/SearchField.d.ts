/**
 * A search field with a results panel and a mono keyboard hint.
 *
 * @startingPoint section="Forms" subtitle="Search with results and a mono shortcut hint" viewport="700x220"
 */
export interface SearchFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'results'> {
  value?: string;
  onChange?: (value: string) => void;
  /** Rendered rows. Pass ReactNodes to bold the matched substring. */
  results?: React.ReactNode[];
  shortcut?: string;
  placeholder?: string;
}
export declare function SearchField(props: SearchFieldProps): JSX.Element;
