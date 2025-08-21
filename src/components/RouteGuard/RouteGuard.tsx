// src/components/RouteGuard.tsx
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { RootState } from "@/redux/store";

interface Props {
  children: JSX.Element;
}

export const RouteGuard: React.FC<Props> = ({ children }) => {
  const auth = useSelector((state: RootState) => state.auth);

  if (!auth.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};
