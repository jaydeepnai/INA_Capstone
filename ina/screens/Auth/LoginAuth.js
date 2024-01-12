import React from "react";
import { View, StyleSheet, Text, ToastAndroid } from "react-native";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";
import { useLoginAccount } from "../../lib/React Query/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";


const API_URL = "your_api_endpoint_here";

const LoginAuth = ({navigation}) => {
  const { mutateAsync: LogInAccount, isLoading } = useLoginAccount();

  const handleLogin = async (user,{ resetForm }) => {
    const session = await LogInAccount(user);
    //console.log(session)
    if (session) {
      ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
      await AsyncStorage.setItem('user', JSON.stringify(session));
      resetForm()
      //console.log(session.role)  
      if(session.role == "User"){
        navigation.navigate("User");
      }else{
        navigation.navigate("NGOHome");
      }
      return
    }
    // const isLoggedIn = await checkAuthUser();
    ToastAndroid.show('Login failed. Please try again.', ToastAndroid.SHORT);
    resetForm()
    return;
  };

  return (
    <View style={styles.container}>
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

            <Button mode="contained" onPress={handleSubmit}>
              Login
            </Button>

          </View>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
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
