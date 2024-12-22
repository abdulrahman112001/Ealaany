import { CError_TP } from "@/types";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import { useIsRTL } from "./useIsRTL";

type useMutateProps_TP<response_T> = {
  endpoint: string;
  mutationKey: [string];
  onSuccess?: (data: response_T) => void;
  onError?: (err: CError_TP) => void;
  formData?: boolean;
  onMutate?: (err?: unknown) => void;
  method?: "post" | "delete";
};

export function useMutate<response_T>({
  endpoint,
  mutationKey,
  onError,
  onSuccess,
  formData,
  onMutate,
  method = "post",
}: useMutateProps_TP<response_T>) {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [totalFileSize, setTotalFileSize] = useState(0); // State for total file size

  const user_token = Cookies.get("token");
  const token = user_token;
  const authorizationHeader = `Bearer ${token}`;
  const isRTL = useIsRTL();
  const baseURL = import.meta.env.VITE_BASE_URL;

  const { data, isLoading, isSuccess, mutate, failureReason, isError } =
    useMutation({
      mutationKey,
      mutationFn: (values) => {
        // Calculate the total file size if formData is true
        if (formData && values instanceof FormData) {
          let totalSize = 0;
          for (let pair of values.entries()) {
            if (pair[1] instanceof File) {
              totalSize += pair[1].size;
            }
          }
          setTotalFileSize(totalSize);
        }

        const requestConfig = {
          method: method.toUpperCase(),
          url: `${baseURL}/${endpoint}`,
          data: values,
          headers: formData
            ? {
                "Content-Type": "multipart/form-data",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
                // project_id:project_id
              }
            : {
                "Content-Type": "application/json; charset=utf-8",
                Authorization: authorizationHeader,
                "Accept-Language": isRTL ? "ar" : "en",
                // project_id:project_id
              },
          onUploadProgress: (progressEvent: {
            loaded: number;
            total: number;
          }) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setUploadProgress(percentCompleted);
          },
        };

        return axios(requestConfig);
      },
      onSuccess,
      onError,
      onMutate,
    });

  return {
    data,
    isLoading,
    isSuccess,
    mutate,
    failureReason,
    isError,
    uploadProgress,
    totalFileSize, // Return total file size for sharing
  };
}
