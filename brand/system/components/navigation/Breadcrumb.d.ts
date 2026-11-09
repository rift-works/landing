/**
 * A breadcrumb trail in mono, separated by slash glyphs.
 */
export interface BreadcrumbItem { label: string; href?: string; }

export interface BreadcrumbProps {
  items?: (BreadcrumbItem | string)[];
  style?: React.CSSProperties;
}
export declare function Breadcrumb(props: BreadcrumbProps): JSX.Element;
