import React from "react";
import { View, StyleSheet, Text, ToastAndroid, ScrollView, Image } from "react-native";
import { Formik } from "formik";
import { Button, TextInput } from "react-native-paper";
import { useLoginAccount } from "../../lib/React Query/queries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFontSize, height, responsiveMargin } from "../../lib/Validation/RelativeValues";
import { Base_Color } from "../../lib/React Query/variables";


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
      LoginResposnse.data.role == "USER" ?  navigation.navigate("User"): navigation.navigate("NGO");
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
      }}>
      <Image
        source={require("../../assets/loginlogo.png")}
        resizeMode={"contain"}
        style={{
          height: height*0.30,
          width: "100%",
          marginTop:responsiveMargin(10)
        }}
      />
      <Text  style={{
          color: "#000000",
          fontSize: getFontSize(30),
          textAlign: "center"
        }}>
        Welcome to INA
      </Text>
      <View style={styles.container}>
      <Text
        style={{
          color: "#000000",
          fontSize: getFontSize(25),
          marginHorizontal: responsiveMargin(5),
          width:"100%"
        }}>
        Let's Make a change Together
      </Text>
      <Text
        style={{
          color: "#1eccb0",
          fontSize: getFontSize(25),
          marginHorizontal: responsiveMargin(4),
          marginBottom: responsiveMargin(5),
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
                label="UserName"
                mode="outlined"
                outlineColor={"#1eccb0"}
                activeOutlineColor={"#1eccb0"}
                onChangeText={handleChange("username")}
                onBlur={handleBlur("username")}
                value={values.username}
                placeholder="Username"
              />
              <Text style={styles.errorText}>{errors.username}</Text>

              <TextInput
                label="Password"
                outlineColor={"#1eccb0"}
                activeOutlineColor={"#1eccb0"}
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
                  color: "gray",
                  fontSize: 16,
                  margin:responsiveMargin(2)
                }}>
                {"Didn't have an account?"}
              </Text>
              <Button mode="contained" buttonColor={"#1eccb0"} onPress={handleSubmit}>
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
        <Text
          style={{
            color: "#000000",
            fontSize: 16,
          }}>
          {/* {"Remember me"} */}
        </Text>
        <View
          style={{
            flex: 1,
            alignSelf: "stretch",
          }}>
        </View>
        <Text
          style={{
            color: "gray",
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
