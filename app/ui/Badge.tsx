import { PropsWithChildren } from "react";

export const Badge: React.FC<PropsWithChildren<{ isPrimary?: boolean }>> = ({
  children,
  isPrimary,
}) => (
  <span
    className={`inline-flex items-center gap-1 text-xs text-background rounded shadow-sm ${isPrimary ? "bg-primary" : "bg-foreground"} px-1.5 py-0.5 font-medium`}
  >
    {children}
  </span>
);
