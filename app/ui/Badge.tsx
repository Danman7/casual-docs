import { PropsWithChildren } from "react";

export const Badge: React.FC<PropsWithChildren<{ isPrimary?: boolean }>> = ({
  children,
  isPrimary,
}) => (
  <span
    className={`inline-flex items-center align-middle gap-[0.25em] text-[0.8em] text-background rounded ${isPrimary ? "bg-primary" : "bg-foreground"} px-[0.5em] font-medium`}
  >
    {children}
  </span>
);
