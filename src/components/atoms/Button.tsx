import Link from "next/link";
import { ButtonProps } from "@/src/types/components-props-types";

const baseClass =
  "border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 disabled:opacity-80";

const variantClassMap: {
  [key in NonNullable<ButtonProps["variant"]>]: string;
} = {
  primary:
    "bg-teal-900 border-cyan-900 text-white disabled:text-gray-400 hover:bg-teal-700",
  secondary:
    "bg-red-400 bord-red-600 text-white disabled:text-red-50 hover:bg-red-300",
  danger: "bg-red-600 bord-red-600 text-white disabled:text-red-50",
  default: "bg-white text-cyan-900 disabled:text-gray-400",
};

export function Button(props: ButtonProps) {
  const {
    variant = "default",
    className,
    href,
    children,
    target,
    ...rest
  } = props;

  const variantClass = variantClassMap[variant];
  const combinedClass = `${baseClass} ${variantClass} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClass} target={target}>
        {children}
      </Link>
    );
  }

  return (
    <button {...rest} className={combinedClass}>
      {children}
    </button>
  );
}
