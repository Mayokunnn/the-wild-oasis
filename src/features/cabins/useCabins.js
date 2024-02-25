import { getCabins } from "../../services/apiCabins";
import { useQuery } from "@tanstack/react-query";

function useCabins() {
  const {
    isLoading,
    error,
    data: cabins,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  return {
    isLoading,
    error,
    cabins,
  };
}

export default useCabins;
