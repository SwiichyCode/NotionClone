import React from "react";

interface AsideLayoutProps {
  children: React.ReactNode;
}

export const AsideLayout = ({ children }: AsideLayoutProps) => {
  return (
    <aside className="flex flex-col w-full max-w-[240px] border-r-1 border-zinc-400 bg-[#FBFBFA]">
      {children}
    </aside>
  );
};
