import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { mutate: deleteThisBooking, isLoading: isDeleting } = useMutation({
    mutationFn: deleteBooking,
    onSuccess: (data) => {
      toast.success(`Booking was succesfully deleted.`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteThisBooking, isDeleting };
}
