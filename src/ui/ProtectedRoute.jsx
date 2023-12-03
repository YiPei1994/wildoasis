import styled from "styled-components";
import { useCurrentUser } from "../features/authentication/useCurrentUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;
function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. load authenticated user
  const { isLoading, isAutenticated } = useCurrentUser();

  // 2. if there is No autheticated user redirected to login page
  useEffect(() => {
    if (!isAutenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAutenticated, isLoading, navigate]);
  // 3. show spinner while happening
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );
  // 4. if there is a user, render the app
  if (isAutenticated) return children;
}

export default ProtectedRoute;
