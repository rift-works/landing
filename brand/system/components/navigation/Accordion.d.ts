/**
 * A single-open accordion. Questions are the one place the brand uses question marks.
 *
 * @startingPoint section="Navigation" subtitle="FAQ accordion, one item open" viewport="700x200"
 */
export interface AccordionItem {
  question?: React.ReactNode;
  title?: React.ReactNode;
  answer?: React.ReactNode;
  children?: React.ReactNode;
}

export interface AccordionProps {
  items?: AccordionItem[];
  /** Index open on mount; -1 for all closed. */
  defaultOpen?: number;
  style?: React.CSSProperties;
}
export declare function Accordion(props: AccordionProps): JSX.Element;
