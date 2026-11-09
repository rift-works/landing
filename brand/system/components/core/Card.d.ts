/**
 * The system's container. Paper on Bone with a hairline rule — no shadow, no radius.
 *
 * @startingPoint section="Core" subtitle="Labelled card with mono footer metadata" viewport="700x200"
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Mono uppercase eyebrow, rendered in Oxide Deep. Usually an index: "01". */
  label?: React.ReactNode;
  title?: React.ReactNode;
  /** Mono metadata row, separated by a Rule Soft divider. */
  footer?: React.ReactNode;
  /** Adds the link hover state (border goes Basalt). Nothing lifts. */
  interactive?: boolean;
  children?: React.ReactNode;
}

export declare function Card(props: CardProps): JSX.Element;
