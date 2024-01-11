import { useMutation } from "react-query";
import { LogInAccount, RegisterAccount } from "../DLL/api";

export const useLoginAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      LogInAccount(user),
    });
  };

  export const useRegisterAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      RegisterAccount(user),
    });
  };