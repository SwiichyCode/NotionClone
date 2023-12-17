import { Link } from "react-router-dom";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const BoardLink = ({ href, children }: Props) => {
  return (
    <Link to={href} className="flex items-center gap-2">
      {children}
    </Link>
  );
};
