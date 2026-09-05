import { AnimatePresence, motion } from 'framer-motion';
import { CheckCircle2, XCircle, X } from 'lucide-react';
import { useApp } from '../../hooks/useApp';

export default function ToastStack() {
  const { toasts, dismissToast } = useApp();

  return (
    <div className="fixed bottom-4 right-4 z-[80] flex flex-col gap-2 max-w-sm w-[calc(100%-2rem)] no-print">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            className="bg-elevated border border-line rounded-xl px-3 py-2.5 flex items-start gap-2 shadow-lg"
            role="status"
          >
            {toast.type === 'error' ? (
              <XCircle size={16} className="text-danger mt-0.5 flex-shrink-0" />
            ) : (
              <CheckCircle2
                size={16}
                className="text-success mt-0.5 flex-shrink-0"
              />
            )}
            <p className="text-xs text-ink flex-1">{toast.message}</p>
            <button
              type="button"
              onClick={() => dismissToast(toast.id)}
              className="text-ink-muted hover:text-ink"
              aria-label="Dismiss notification"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
