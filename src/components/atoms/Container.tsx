const spacingClassMap: {
  [key in NonNullable<ContainerProps["spacing"]>]: string;
} = {
  nospace: "py-0",
  medium: "py-4",
  large: "py-12",
};

const variantClassMap: {
  [key in NonNullable<ContainerProps["variant"]>]: string;
} = {
  primary: "bg-teal-800 text-gray-100",
  secondary: "bg-red-400 text-white",
  info: "bg-blue-100 text-gray-900",
};

export interface ContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  spacing?: "nospace" | "medium" | "large";
  variant?: "primary" | "secondary" | "info";
  className?: string;
  children: React.ReactNode;
}

export function Container({
  children,
  spacing = "nospace",
  className,
  variant,
  ...rest
}: ContainerProps) {
  const spacingClass = spacingClassMap[spacing];
  const variantClass = variant ? variantClassMap[variant] : "";

  const containerClass = `container mx-auto ${
    className ? `${className} ` : ""
  }${spacingClass} ${variantClass}`;

  return (
    <div className={`${containerClass} px-4 sm:px-0`} {...rest}>
      {children}
    </div>
  );
}
