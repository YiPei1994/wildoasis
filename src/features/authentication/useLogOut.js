import { useMutation, useQueryClient } from "@tanstack/react-query";
import { signOut } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogOut() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: logOut, isLoading } = useMutation({
    mutationFn: signOut,
    onSuccess: () => {
      queryClient.removeQueries();
      toast.success("User was successfully logged out.");
      navigate("/login", { replace: true });
    },
  });
  return { logOut, isLoading };
}
