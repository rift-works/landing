/**
 * A tab bar. Labels are mono uppercase nouns.
 *
 * @startingPoint section="Navigation" subtitle="Tab bar with the active Oxide underline" viewport="700x150"
 */
export interface TabItem { value: string; label?: string; }

export interface TabsProps {
  items?: (TabItem | string)[];
  value?: string;
  onChange?: (value: string) => void;
  /** Panel content, rendered below the bar. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Tabs(props: TabsProps): JSX.Element;
