import { ReactNode } from "react";

export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "default" | "danger";
  size?: string;
  className?: string;
  href?: string;
  children: ReactNode;
  target?: "_blank" | "_parent" | "_self" | "_top";
  as?: string;
}
