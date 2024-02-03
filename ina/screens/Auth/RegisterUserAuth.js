import React from 'react';
import { View, StyleSheet, Text, ToastAndroid, Image, ScrollView } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { UserRegisterValidation } from '../../lib/Validation/validation';
import { Formik } from 'formik';
import { RegisterUser } from '../../lib/Validation/initForm';
import { useRegisterUserAccount } from '../../lib/React Query/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Base_Color } from '../../lib/React Query/variables';
import { getFontSize, height, responsiveMargin } from '../../lib/Validation/RelativeValues';

const RegisterUserAuth = ({ navigation }) => {
  const { mutateAsync: RegisterAccount, isLoading } = useRegisterUserAccount();

  const handleRegister = async (user, { resetForm }) => {
    const RegisterResposnse = await RegisterAccount(user);
    console.log(RegisterResposnse)
    if (RegisterResposnse.status == 201) {
      await AsyncStorage.setItem('user', JSON.stringify(RegisterResposnse));
      ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
      resetForm()
      navigation.navigate("LoginAuth");
      return
    } else {
      ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
      resetForm()
      return
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{
        justifyContent:"center",
        alignItems:"center"
      }}>
        <Image resizeMode='center' source={require("../../assets/register.png")} 
          style={{
            width:"55%",
            height:height*0.35,
            marginTop:responsiveMargin(-5),
            marginBottom:responsiveMargin(-20)
          }}
        ></Image>
      </View>
      <View style={{
        marginBottom:responsiveMargin(5),
      }}>
      <Text style={{
        fontSize: getFontSize(25),
        fontWeight: "bold"
      }}>Register</Text>
      <Text style={{
        fontSize: getFontSize(15),
      }}>Please Register To Login</Text>
      </View>
      <Formik
        initialValues={RegisterUser}
        validationSchema={UserRegisterValidation}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
            />
            {touched.firstName && errors.firstName ? <Text style={styles.errorText}>{errors.firstName}</Text> : <Text style={styles.errorText}></Text>}

            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
            />
            {touched.lastName && errors.lastName ? <Text style={styles.errorText}>{errors.lastName}</Text> : <Text style={styles.errorText}></Text>}

            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            />
            {touched.username && errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : <Text style={styles.errorText}></Text>}
            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : <Text style={styles.errorText}></Text>}

            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="Password"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : <Text style={styles.errorText}></Text>}

            <TextInput
              mode="outlined"
              outlineColor={Base_Color}
              activeOutlineColor={Base_Color}
              label="Confirm Password"
              value={values.confirmPassword}
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
            />
            {touched.confirmPassword && errors.confirmPassword ? (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            ) : <Text style={styles.errorText}></Text>}

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Register
            </Button>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "white"
  },
  errorText: {
    color: 'red',
    marginBottom: 0,
  },
  button: {
    marginTop: 20,
    marginBottom:responsiveMargin(10),
    backgroundColor: Base_Color
  },
});

export default RegisterUserAuth;
