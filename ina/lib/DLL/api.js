import axios from "axios";

export async function LogInAccount(user) {
  try {
    //   const session = await axios.post(user.email, user.password);
    //   return true;
    return { id: 2, role: "User", message: "register successfully!" };
  } catch (error) {
    //console.log(error);
  }
}

export async function RegisterUserAccount(user) {
  try {
    // console.log(user);
    // const session = await axios.post("http://localhost:3000/registerUser",user);
    // // return true;
    return { message: "register successfully!", status: 200 };
  } catch (error) {
    //console.log(error);
  }
}

export async function RegisterNGOAccount(ngo) {
  try {
    debugger;;
    // console.log("In api", ngo);
    
    // axios
    //   .post("http://localhost:3000/registerNgo", ngo)
    //   .then((response) => {
    //     debugger;;
    //     console.log("Success:", response);
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
    await axios({
      method: 'post',
      url: 'http://192.168.180.147:3000/registerNgo',
      data: ngo,
      headers: {
          'Content-Type': "multipart/form-data",
      },
  });
    return { message: "register successfully!", status: 200 };
  } catch (error) {
    //console.log(error);
  }
}
