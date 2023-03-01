import React from "react";

interface FlexColWrapperProps {
  children: React.ReactNode;
  gap: number;
  classname?: string;
}

export const FlexColWrapper = ({
  children,
  gap,
  classname,
}: FlexColWrapperProps) => {
  return (
    <div className={`w-full flex flex-col gap-${gap} ${classname}`}>
      {children}
    </div>
  );
};
