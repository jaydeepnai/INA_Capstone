import React, { useCallback, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, ToastAndroid } from 'react-native';
import { TextInput, Button, Avatar, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import * as DocumentPicker from 'expo-document-picker';
import { RegisterNgo } from '../../lib/Validation/initForm';
import { NGORegistervalidation } from '../../lib/Validation/validation';
import { useRegisterNGOAccount } from '../../lib/React Query/queries';
import AsyncStorage from '@react-native-async-storage/async-storage';


const RegistrationForm = ({navigation}) => {
  const { mutateAsync: RegisterAccount, isLoading } = useRegisterNGOAccount();
  const [logo, setLogo] = useState();
  const [registrationDocument, setRegistrationDocument] = useState();
  const [documentPickerCancelled, setDocumentPickerCancelled] = useState(false);
  const [ImagePickerCancelled, setImagePickerCancelled] = useState(false);


  const handleFormSubmit = useCallback(async (values,{ resetForm }) => {
    const formData = new FormData();
    
    const DocfileName = values.registrationDocument.split("/").pop();
    const DocfileType = DocfileName.split(".").pop();
    formData.append("registrationDocument", {
      name: DocfileName,
      uri:values.registrationDocument,
      type: `image/${DocfileType}`,
    });

    const ImagefileName = values.logo.split("/").pop();
    const ImagefileType = ImagefileName.split(".").pop();
    formData.append("NGOlogo", {
      name: ImagefileName,
      uri:values.logo,
      type: `image/${ImagefileType}`,
    });

    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("phone", values.phone);
    formData.append("username", values.username);

    const RegisterResposnse = await RegisterAccount(formData);
    
    if (RegisterResposnse.status == 201) {
      await AsyncStorage.setItem('NGO', JSON.stringify(RegisterResposnse));
      resetForm()
      navigation.navigate("LoginAuth");
      return
    }else{
      resetForm()
      return
    }
  },[]);

  const pickImage = useCallback(async ({ setValues, values, setTouched, setErrors, errors, touched }) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (result.canceled) {
      setImagePickerCancelled(true)
      setTouched({ ...touched, logo: true });
      setErrors({ ...errors, logo: 'Please select logo' });
    } else {
      setImagePickerCancelled(true)
      setTouched({ ...touched, logo: true });
      delete errors.logo
      setErrors({ ...errors });
      setValues({ ...values, logo: result.assets[0].uri })
      setLogo(result.assets[0].uri);
    }
  }, []);

  const pickDocument = useCallback(async ({ setValues, values, setTouched, setErrors, errors, touched }) => {
    try {
      const docRes = await DocumentPicker.getDocumentAsync();

      if (docRes.canceled) {
        setDocumentPickerCancelled(true);
        setTouched({ ...touched, registrationDocument: true });
        setErrors({ ...errors, registrationDocument: 'Please select Document' });
        return;
      }
      setTouched({ ...touched, registrationDocument: true });
      setRegistrationDocument(docRes.assets[0].uri);
      delete errors.registrationDocument
      setErrors({ ...errors });
      setDocumentPickerCancelled(false)
      setValues({ ...values, registrationDocument: docRes.assets[0].uri })
    } catch (error) {
      console.log("Error while selecting file: ", error);
    }
  }, []);

  return (
    <ScrollView>
      <Formik
        initialValues={RegisterNgo}
        validationSchema={NGORegistervalidation}
        onSubmit={handleFormSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, setValues, values, errors, touched, setErrors, setTouched }) => (
          <View style={styles.container}>
              <Avatar.Image
                source={logo ? { uri: logo} : null}
                size={80}
                style={{ marginBottom: 10 }}
              />
               {(ImagePickerCancelled) && errors.logo && (
              <HelperText type="error">{errors.logo}</HelperText>
            )}
            {/* {console.log(errors)} */}
            <Button onPress={() => pickImage({ setErrors, values, setValues, setTouched, errors, touched })}>Select Logo</Button>

            <TextInput
              label="NGO Name"
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            {touched.name && errors.name ? <Text style={styles.errorText}>{errors.name}</Text> : <Text></Text>}

            <TextInput
              label="Email"
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            {touched.email && errors.email ? <Text style={styles.errorText}>{errors.email}</Text> : <Text></Text>}

            <TextInput
              label="Phone"
              onChangeText={handleChange('phone')}
              onBlur={handleBlur('phone')}
              value={values.phone}
            />
            {touched.phone && errors.phone ? <Text style={styles.errorText}>{errors.phone}</Text> : <Text></Text>}

            <TextInput
              label="Username"
              onChangeText={handleChange('username')}
              onBlur={handleBlur('username')}
              value={values.username}
            />
            {touched.username && errors.username ? <Text style={styles.errorText}>{errors.username}</Text> : <Text></Text>}
            <TextInput
              label="Password"
              secureTextEntry
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            {touched.password && errors.password ? <Text style={styles.errorText}>{errors.password}</Text> : <Text></Text>}
            <TextInput
              label="Confirm Password"
              secureTextEntry
              onChangeText={handleChange('confirmPassword')}
              onBlur={handleBlur('confirmPassword')}
              value={values.confirmPassword}
            />
            {touched.confirmPassword && errors.confirmPassword ? <Text style={styles.errorText}>{errors.confirmPassword}</Text> : <Text></Text>}
            <Button onPress={() => pickDocument({ setErrors, setValues, values, setTouched, errors, touched })} style={{ marginTop: 10 }}>
              Select Registration Document
            </Button>
            {(documentPickerCancelled) && errors.registrationDocument && (
              <HelperText type="error">{errors.registrationDocument}</HelperText>
            )}
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
    padding: 20,
    marginTop: 40
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default RegistrationForm;
