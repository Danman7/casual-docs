import Link, { type LinkProps } from "next/link";
import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = LinkProps &
  Omit<ComponentPropsWithoutRef<"a">, keyof LinkProps>;

export function Button({ className, ...props }: ButtonProps) {
  return (
    <Link
      {...props}
      className={`inline-flex items-center gap-2 rounded border border-foreground px-4 py-2 text-sm font-semibold text-foreground no-underline shadow-sm transition-colors hover:border-primary hover:bg-primary hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${className ?? ""}`}
    />
  );
}
