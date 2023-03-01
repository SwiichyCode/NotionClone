import { useLocation, Navigate } from "react-router-dom";

export function ProtectedLayout({ children }: { children: JSX.Element }) {
  const user = localStorage.getItem("user");
  let location = useLocation();

  if (!user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  } else {
    return children;
  }
}
