/**
 * The RiftWorks delivery model as a progress strip: Discover, Architect, Build, Optimize.
 *
 * @startingPoint section="Feedback" subtitle="Four-phase delivery strip" viewport="700x150"
 */
export interface PhaseProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Defaults to the four standard phases. Do not rename them per client. */
  phases?: string[];
  /** 0-indexed current phase. Earlier phases fill Basalt, the current one Oxide. */
  current?: number;
}
export declare function PhaseProgress(props: PhaseProgressProps): JSX.Element;
