import React from "react";
import { View, StyleSheet, Text, ToastAndroid, ScrollView, Image } from "react-native";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";
import { useLoginAccount } from "../../lib/React Query/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API_URL = "your_api_endpoint_here";

const LoginAuth = ({ navigation }) => {
  const { mutateAsync: LogInAccount, isLoading } = useLoginAccount();

  const handleLogin = async (user, { resetForm }) => {
    const LoginResposnse = await LogInAccount(user);
    console.log(LoginResposnse)
    if (LoginResposnse.status == 200) {
      //setting into storage
      LoginResposnse.data.role == "USER" ? 
      await AsyncStorage.setItem('USER', JSON.stringify(LoginResposnse.data)) : await AsyncStorage.setItem('NGO', JSON.stringify(LoginResposnse.data));   
      //Restting form
      resetForm()
      //Redirecting
      LoginResposnse.data.role == "USER" ?  navigation.navigate("User"): navigation.navigate("NGOHome");
      return
    }else{
      resetForm()
      return
    }
  };

  return (
    <ScrollView
      style={{
        backgroundColor: "#FFFFFF",
        paddingTop: 40,
        paddingBottom: 69,
      }}>
      <Image
        source={require("../../assets/loginlogo.png")}
        resizeMode={"stretch"}
        style={{
          height: 173,
          width: "90%",
          marginLeft: 20
        }}
      />
      <Text  style={{
          color: "#000000",
          fontSize: 35,
          marginHorizontal: 53,
        }}>
        Welcome to INA
      </Text>
      <View style={styles.container}>
      <Text
        style={{
          color: "#000000",
          fontSize: 35,
          marginHorizontal: 10,
          width:"100%"
        }}>
        Let's Make a change Together
      </Text>
      <Text
        style={{
          color: "#80C718",
          fontSize: 28,
          marginBottom: 20,
          marginTop: 20,
        }}>
        {" Log in to continue"}
      </Text>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={handleLogin}
          validate={(values) => {
            const errors = {};
            if (!values.username) {
              errors.username = "Username is required";
            }
            if (!values.password) {
              errors.password = "Password is required";
            }
            return errors;
          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
            <View>
              <TextInput
                mode="outlined"
                label="UserName"
                // style={styles.input}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={styles.errorText}>{errors.username}</Text>

              <TextInput
                label="Password"
                // style={styles.input}
                mode="outlined"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
                placeholder="Password"
                secureTextEntry
              />
              <Text style={styles.errorText}>{errors.password}</Text>
              <Text 
              onPress={()=> navigation.navigate("MasterAuth")}
                style={{
                  color: "#0B22F4",
                  fontSize: 16,
                  // marginHorizontal: 40,
                  margin:10
                }}>
                {"Didn't have an account?"}
              </Text>
              <Button mode="contained" onPress={handleSubmit}>
                Login
              </Button>

            </View>
          )}
        </Formik>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent:"space-between",
          marginBottom: 42,
          marginHorizontal: 10,
        }}>
        <View
          style={{
            width: 25,
            height: 25,
            backgroundColor: "#D9D9D9",
            borderRadius: 5,
            marginRight: 10,
          }}>
        </View>
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
          }}>
          {"Remember me"}
        </Text>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
          }}>
        </View>
        <Text
          style={{
            color: "#0B22F4",
            fontSize: 16,
          }}>
          {"Forget password?"}
        </Text>
      </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    marginTop:50
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});

export default LoginAuth;
