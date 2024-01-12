import axios from "axios";

export async function LogInAccount(user) {
    try {
    //   const session = await axios.post(user.email, user.password);
    //   return true;
      return {id:2,role:"User",message:"register successfully!"};
    } catch (error) {
      //console.log(error);
    }
  }

  export async function RegisterUserAccount(user) {
    try {
    //   const session = await axios.post(user.email, user.password);
    //   return true;
      return {message:"register successfully!",status:200};
    } catch (error) {
      //console.log(error);
    }
  }


  
  export async function RegisterNGOAccount(user) {
    try {
    //   const session = await axios.post(user.email, user.password);
    //   return true;
      return {message:"register successfully!",status:200};
    } catch (error) {
      //console.log(error);
    }
  }