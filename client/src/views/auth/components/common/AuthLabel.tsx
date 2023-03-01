import React from "react";

interface AuthLabelProps {
  name: string;
  label: string;
  error?: string;
}

export const AuthLabel = ({ name, label, error }: AuthLabelProps) => {
  return (
    <label
      htmlFor={name}
      className="flex items-center justify-between text-sm opacity-60 "
    >
      {label} {error && <span className="text-red-500">{error}</span>}
    </label>
  );
};
