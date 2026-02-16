"use client";

import * as React from "react";

type ToastVariant = "info" | "success" | "error";

export type ToastState = {
  open: boolean;
  title?: string;
  message: string;
  variant?: ToastVariant;
};

type ToastProps = ToastState & {
  onClose: () => void;
  durationMs?: number; // auto-close
};

const styles: Record<ToastVariant, { border: string; icon: string }> = {
  info: { border: "border-blue-300", icon: "ℹ️" },
  success: { border: "border-emerald-300", icon: "✅" },
  error: { border: "border-red-300", icon: "⚠️" },
};

export default function Toast({
  open,
  title,
  message,
  variant = "info",
  onClose,
  durationMs = 3000,
}: ToastProps) {
  React.useEffect(() => {
    if (!open) return;
    const t = window.setTimeout(onClose, durationMs);
    return () => window.clearTimeout(t);
  }, [open, durationMs, onClose]);

  if (!open) return null;

  const v = styles[variant];

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm"
    >
      <div
        className={[
          "rounded-2xl border bg-white/90 backdrop-blur shadow-lg",
          "px-4 py-3",
          v.border,
        ].join(" ")}
      >
        <div className="flex items-start gap-3">
          <div className="mt-0.5 text-xl" aria-hidden="true">
            {v.icon}
          </div>

          <div className="min-w-0 flex-1">
            {title ? (
              <p className="font-semibold text-slate-900">{title}</p>
            ) : null}
            <p className="text-slate-700">{message}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg px-2 py-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700"
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      </div>
    </div>
  );
}
