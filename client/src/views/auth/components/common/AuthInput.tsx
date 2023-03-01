import React from "react";
import { UseFormRegister } from "react-hook-form";
import { AuthLabel } from "./AuthLabel";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
}

export const AuthInput = ({
  name,
  label,
  register,
  error,
  ...props
}: AuthInputProps) => {
  return (
    <div className="flex flex-col gap-2">
      <AuthLabel name={name} label={label} error={error} />
      <input
        {...props}
        {...register(name, { required: true })}
        className="w-full text-base border-1 border-gray-400 rounded-lg p-2 focus:outline outline-1 outline-lime-500"
      />
    </div>
  );
};
