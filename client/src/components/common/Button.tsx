import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button = ({ text, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className="w-full h-10 text-sm font-semibold border-1 border-lime-400 bg-lime-100 rounded-lg px-4 transition-all hover:border-lime-600 focus:outline outline-1 outline-lime-600"
    >
      {text}
    </button>
  );
};
