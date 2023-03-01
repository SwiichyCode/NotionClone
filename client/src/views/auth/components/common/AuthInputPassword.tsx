import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { AuthLabel } from "./AuthLabel";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: string;
}

export const AuthInputPassword = ({
  name,
  label,
  register,
  error,
  ...props
}: AuthInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <AuthLabel name={name} label={label} error={error} />
      <div className="relative flex items-center">
        <input
          type={showPassword ? "text" : "password"}
          {...register(name, { required: true })}
          {...props}
          className="w-full text-base border-1 border-gray-400 rounded-lg p-2 focus:outline outline-1 outline-lime-500"
        />
        <button
          className="absolute right-2"
          onClick={() => setShowPassword(!showPassword)}
          type="button"
          tabIndex={-1}
        >
          <div>{showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}</div>
        </button>
      </div>
    </div>
  );
};
