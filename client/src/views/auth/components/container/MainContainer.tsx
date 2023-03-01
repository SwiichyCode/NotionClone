import React from "react";

export const MainContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="height-container w-full flex items-center justify-center">
      {children}
    </main>
  );
};
