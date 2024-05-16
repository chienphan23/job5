import { useQuery } from "@tanstack/react-query";
import apiGetMyIn4 from "../API/apiGetMyIn4";

export const useGetIn4 = () => {
  const {
    data: user,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["user1"],
    queryFn: async () => await apiGetMyIn4(),
  });
  console.log(user);
  return { user, isLoading, error };
};
