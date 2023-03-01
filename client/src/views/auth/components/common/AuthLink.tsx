import { Link } from "react-router-dom";

interface AuthLinkProps {
  text: string;
  textLink: string;
  url: string;
}

export const AuthLink = ({ text, textLink, url }: AuthLinkProps) => {
  return (
    <p className="text-sm pt-5">
      {text}
      {` `}
      <Link to={url} className="text-lime-500 font-bold hover:underline">
        {textLink}
      </Link>
    </p>
  );
};
