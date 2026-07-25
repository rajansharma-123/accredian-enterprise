import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  className?: string;
}

export default function Button({
  children,
  className,
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-blue-700",
        className
      )}
    >
      {children}
    </button>
  );
}