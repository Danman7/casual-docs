import { PropsWithChildren } from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { Badge } from "./Badge";

export const Example: React.FC<PropsWithChildren<{ isPrimary?: boolean }>> = ({
  children,
}) => (
  <p className="opacity-85 text-sm italic">
    <Badge>
      <FaMagnifyingGlass /> Example
    </Badge>{" "}
    {children}
  </p>
);
