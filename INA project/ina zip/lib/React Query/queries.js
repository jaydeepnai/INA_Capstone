import { useMutation } from "react-query";
import axios from "axios";
import { api_domain } from "./variables";
import { ToastAndroid } from "react-native";

export const useLoginAccount = () => {
  return useMutation({
    mutationFn: async (user) =>{
      var resp ;
      await axios({
        method: 'post',
        url: api_domain + '/login',
        data: user,
    }).then((response) =>{
      resp = response
      ToastAndroid.show('Login successfully!', ToastAndroid.SHORT);
    }).catch((error) => {
      resp = error
      ToastAndroid.show('Login Failed!', ToastAndroid.SHORT);
    });
    return resp;
    },
  });
  };

  export const useRegisterUserAccount = (user) => {
    return useMutation({
      mutationFn: async (user) =>{
        var resp ;
        await axios({
          method: 'post',
          url: api_domain + '/registerUser',
          data: user,
      }).then((response) =>{
        resp = response
        ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
      }).catch((error) => {
        resp = error
        ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
      });
      return resp;
      },
    });
  };
  export const useRegisterNGOAccount = () => {
    return useMutation({
      mutationFn: async (ngo) =>{
        var resp ;
        await axios({
          method: 'post',
          url: api_domain + '/registerNgo',
          data: ngo,
          headers: {
              'Content-Type': "multipart/form-data",
          },
      }).then((response) =>{
        resp = response
        ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
      }).catch((error) => {
        resp = error
        ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
      });
      return resp;
      },
    });
  };