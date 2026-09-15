import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  cleanPadding?: boolean;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  cleanPadding = false,
  ...props
}) => {
  return (
    <div
      className={cn(
        "max-w-7xl mx-auto w-full",
        cleanPadding ? "" : "px-5 sm:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
