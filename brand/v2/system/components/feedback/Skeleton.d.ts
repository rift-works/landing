/**
 * Loading placeholders. Flat blocks, no shimmer animation.
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  lines?: number;
  /** Cycled across the lines. */
  widths?: string[];
  height?: number;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;
