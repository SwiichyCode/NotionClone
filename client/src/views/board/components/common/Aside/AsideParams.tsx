import React, { useState } from "react";
import { userState } from "@/views/board/Dashboard";

interface AsideParamsProps {
  user: userState;
}

export const AsideParams = ({ user }: AsideParamsProps) => {
  const [open, setOpen] = useState<boolean>(false);

  return <div>AsideParams</div>;
};
