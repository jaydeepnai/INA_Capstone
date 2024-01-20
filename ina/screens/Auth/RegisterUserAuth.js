import React from 'react';
import { View, StyleSheet, Text, ToastAndroid } from 'react-native';
import { TextInput, Button, Title } from 'react-native-paper';
import { UserRegisterValidation } from '../../lib/Validation/validation';
import { Formik } from 'formik';
import { RegisterUser } from '../../lib/Validation/initForm';
import {  useRegisterUserAccount } from '../../lib/React Query/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RegisterUserAuth = ({navigation}) => {
  const { mutateAsync: RegisterAccount, isLoading } = useRegisterUserAccount();
  
  const handleRegister = async (user,{ resetForm }) => {
    const RegisterResposnse = await RegisterAccount(user);
    console.log(RegisterResposnse)
    if (RegisterResposnse.status == 201) {
      await AsyncStorage.setItem('user', JSON.stringify(RegisterResposnse));
      ToastAndroid.show('Request sent successfully!', ToastAndroid.SHORT);
      resetForm()
      navigation.navigate("LoginAuth");
      return
    }else{
      ToastAndroid.show('Registration Failed!', ToastAndroid.SHORT);
      resetForm()
      return
    }
  };

  return (
    <View style={styles.container}>
      <Title>Register</Title>
      <Formik
        initialValues={RegisterUser}
        validationSchema={UserRegisterValidation}
        onSubmit={handleRegister}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View>
            <TextInput
              label="First Name"
              value={values.firstName}
              onChangeText={handleChange('firstName')}
              onBlur={handleBlur('firstName')}
            />
            {touched.firstName && errors.firstName && <Text style={styles.errorText}>{errors.firstName}</Text>}

            <TextInput
              label="Last Name"
              value={values.lastName}
              onChangeText={handleChange('lastName')}
              onBlur={handleBlur('lastName')}
            />
            {touched.lastName && errors.lastName && <Text style={styles.errorText}>{errors.lastName}</Text>}

            <TextInput
              label="Username"
              value={values.username}
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
            />
            {touched.username && errors.username && <Text style={styles.errorText}>{errors.username}</Text>}
            <TextInput
              label="email"
              value={values.email}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
            />
            {touched.email && errors.email && <Text style={styles.errorText}>{errors.email}</Text>}

            <TextInput
              label="Password"
              value={values.password}
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
            />
            {touched.password && errors.password && <Text style={styles.errorText}>{errors.password}</Text>}

            <TextInput
              label="Confirm Password"
              value={values.confirmPassword}
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text style={styles.errorText}>{errors.confirmPassword}</Text>
            )}

            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Register
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
    padding: 16,
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default RegisterUserAuth;
