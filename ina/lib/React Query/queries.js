import { useMutation } from "react-query";
import { LogInAccount, RegisterNGOAccount, RegisterUserAccount} from "../DLL/api";
import axios from "axios";

export const useLoginAccount = () => {
    return useMutation({
      mutationFn: (user) =>
      LogInAccount(user),
    });
  };

  export const useRegisterUserAccount = (user) => {
    return useMutation({
      mutationFn: (user) =>
      RegisterUserAccount(user),
    });
  };
  export const useRegisterNGOAccount = () => {
    return useMutation({
      mutationFn: async (ngo) =>{
        console.log("fomrdata",ngo)
        await axios({
          method: 'post',
          url: 'http://192.168.180.147:3000/registerNgo',
          data: ngo,
          headers: {
              'Content-Type': "multipart/form-data",
          },
      }).then((response) =>{
        console.log("response",response)
      }).catch((error) => {
        console.log("error",error)
      });
        // RegisterNGOAccount(ngo)
      }
      ,
    });
  };