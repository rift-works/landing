/**
 * A modal. Framed in 2px Basalt over a flat 55% overlay — no shadow, no blur.
 *
 * @startingPoint section="Feedback" subtitle="Confirmation dialog with verb buttons" viewport="700x260"
 */
export interface DialogProps extends React.HTMLAttributes<HTMLDivElement> {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element;
