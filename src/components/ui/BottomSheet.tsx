import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function BottomSheet({ open, onClose, children }: Props) {
  if (!open) return null;

  return createPortal(
    <div
      className="fixed inset-0 bg-black/20"
      onClick={onClose}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 max-w-180 w-full h-auto bg-white rounded-t-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
