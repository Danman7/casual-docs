import type { HTMLAttributes } from "react";

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  label?: string;
};

export const Divider = ({
  className,
  label = "OR",
  ...props
}: DividerProps) => (
  <div
    aria-label={label}
    className={`flex w-full items-center gap-3 ${className ?? ""}`}
    role="separator"
    {...props}
  >
    <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
    <span>{label}</span>
    <span aria-hidden className="h-px flex-1 bg-current opacity-30" />
  </div>
);
