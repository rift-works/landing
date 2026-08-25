/**
 * The RiftWorks Aperture mark in its three approved lockups.
 *
 * @startingPoint section="Brand" subtitle="Aperture mark in all three approved lockups" viewport="700x200"
 */
export interface LogoProps {
  /** horizontal (default), stacked, or symbol alone. */
  variant?: 'horizontal' | 'stacked' | 'symbol';
  /** Symbol edge length in px. Floor is 16 for the symbol, 96 for a lockup. */
  size?: number;
  /** Bone ink for dark surfaces. */
  reversed?: boolean;
  /** Show the locked bilingual descriptor pair. */
  descriptor?: boolean;
  /** Reserve one channel-width of clear space around the mark. Default true. */
  clearSpace?: boolean;
  style?: React.CSSProperties;
}

export declare function Logo(props: LogoProps): JSX.Element;
