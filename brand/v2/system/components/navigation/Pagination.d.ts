/**
 * Numbered pagination. The current page is a Basalt fill, not an accent colour.
 */
export interface PaginationProps {
  page?: number;
  pages?: number;
  onChange?: (page: number) => void;
  style?: React.CSSProperties;
}
export declare function Pagination(props: PaginationProps): JSX.Element;
