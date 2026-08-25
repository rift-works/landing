/**
 * A selectable table. Figures go in mono columns; the header rule is 2px Basalt.
 *
 * @startingPoint section="Data" subtitle="Selectable table with a mono amount column" viewport="700x230"
 */
export interface DataTableColumn {
  key: string;
  label: string;
  /** Fixed px width; omit to flex. */
  width?: number;
  align?: 'left' | 'right' | 'center';
  /** Render this column in IBM Plex Mono — use for every figure and code. */
  mono?: boolean;
}

export interface DataTableProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: DataTableColumn[];
  rows?: Record<string, any>[];
  selectable?: boolean;
  selected?: (string | number)[];
  onSelect?: (selected: (string | number)[]) => void;
  /** Column key currently sorted; renders a ↓ glyph. */
  sortKey?: string;
}
export declare function DataTable(props: DataTableProps): JSX.Element;
