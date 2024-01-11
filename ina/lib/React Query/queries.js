import { useMutation } from "react-query";
import { LogInAccount, RegisterNGOAccount, RegisterUserAccount} from "../DLL/api";

export const useLoginAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      LogInAccount(user),
    });
  };

  export const useRegisterUserAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      RegisterUserAccount(user),
    });
  };
  export const useRegisterNGOAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      RegisterNGOAccount(user),
    });
  };