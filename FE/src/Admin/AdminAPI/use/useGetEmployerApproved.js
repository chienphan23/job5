import { useQuery } from "@tanstack/react-query";
import { apiGetEmployerApproved } from "../apiGetEmployerApproved";

export const useGetEmployerApproved = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["employer"],
    queryFn: async () => await apiGetEmployerApproved(),
  });
  return { data, isLoading, error };
};
