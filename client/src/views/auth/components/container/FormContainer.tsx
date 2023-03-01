import React from "react";

interface FormContainerProps extends React.HTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

export const FormContainer = ({ children, ...props }: FormContainerProps) => {
  return (
    <form className="w-full max-w-xs flex flex-col items-center" {...props}>
      {children}
    </form>
  );
};
