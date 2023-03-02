import React from "react";

interface AsideButtonProps {
  as?: any;
  onClick?: (() => void) | undefined;
  icon: React.ReactNode;
  text: string;
  index?: number | string;
}

export const AsideButton = ({
  as: AsideButton = "div",
  onClick,
  icon,
  text,
  index,
}: AsideButtonProps) => {
  return (
    <AsideButton
      index={index}
      onClick={() => onClick?.()}
      className="w-full flex items-center gap-2 pl-4 cursor-pointer text-xs py-2 hover:bg-gray-100 "
    >
      <div className="flex items-center justify-center w-[22px] h-[22px] text-slate-500">
        {icon}
      </div>
      <span className=" font-light text-sm">{text}</span>
    </AsideButton>
  );
};
