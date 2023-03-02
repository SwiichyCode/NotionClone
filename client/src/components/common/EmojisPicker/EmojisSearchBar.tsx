import React from "react";
import { BsSearch } from "react-icons/bs";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  setFilteredEmojis: React.Dispatch<React.SetStateAction<string>>;
}

export const EmojisSearchBar = ({
  setFilteredEmojis,
  ...props
}: InputProps) => {
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilteredEmojis(e.target.value);
  };

  return (
    <div className=" w-full max-w-[15rem] flex items-center text-xl border-1 border-gray-200 rounded gap-2 px-2">
      <BsSearch className=" text-sm" />
      <input
        placeholder="Filter..."
        className=" w-2/3 h-[28px] text-sm focus:outline-none placeholder:text-sm"
        onChange={(e) => handleSearch(e)}
        {...props}
      />
    </div>
  );
};
