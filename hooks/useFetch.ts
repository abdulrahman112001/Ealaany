import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { notify } from "../utils/toast";
import { useIsRTL } from "./useIsRTL";

interface ImportMeta {
  env: {
    VITE_BASE_URL: string;
  };
}

type useFetchPops_TP = {
  queryKey: [string];
  endpoint: string;
  enabled?: boolean;
  select?: ((data: any) => any) | undefined;
  onError?: (err: any) => void;
  onSuccess?: (err: any) => void;
  localization?: boolean;
};
function useFetch<T>({
  endpoint,
  enabled,
  select,
  queryKey,
  onError,
  onSuccess,
  localization,
}: useFetchPops_TP) {
  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const router = useRouter()

  const isRTL = useIsRTL();
  const config = {
    headers: {
      Authorization: authorizationHeader,
      "Accept-Language": isRTL ? "ar" : "en",
      // project_id:project_id

    },
  };
  //@ts-ignore
  const baseURL = import.meta.env.VITE_BASE_URL;


  const query = useQuery<T>({
    queryKey,
    queryFn: () =>
      axios.get(`${baseURL}/${endpoint}`, config).then((res) => res.data),
    enabled,
    select,
    //@ts-ignore
    onError: (error) => {
      notify("error", error?.response?.data?.message);
      if (error?.response?.data?.message == "Unauthenticated.") {
        localStorage.removeItem("user");
        router.push("/login");
        Cookies.remove("token");
      }
      if (onError) {
        onError(error);
      }
    },
    onSuccess,
  });
  return query;
}

export default useFetch;
