import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingApi } from "../../services/apiSettings";

function useUpdateSettings() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isUpdating } = useMutation({
    mutationFn: (newSettings) => updateSettingApi(newSettings),
    onSuccess: () => {
      queryClient.invalidateQueries("settings");
      toast.success("Settings successfully edited");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { updateSetting, isUpdating };
}

export default useUpdateSettings;
