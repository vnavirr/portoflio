import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

/** Shared horizontal alignment: 15px gutters inside a centered max-width shell. */
export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-[var(--width-layout)] px-[15px] ${className}`.trim()}
    >
      {children}
    </div>
  );
}
