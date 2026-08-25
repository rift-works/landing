/**
 * A status marker. The word carries the meaning; the colour reinforces it.
 *
 * @startingPoint section="Core" subtitle="Status badges in all five tones" viewport="700x150"
 */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: 'neutral' | 'positive' | 'negative' | 'info' | 'muted';
  /** Fill instead of outline. Use for the one selected or current item. */
  solid?: boolean;
  children?: React.ReactNode;
}

export declare function Badge(props: BadgeProps): JSX.Element;
