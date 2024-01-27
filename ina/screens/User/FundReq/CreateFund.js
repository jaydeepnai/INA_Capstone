import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Button as RNButton,
} from "react-native";
import {
  TextInput as PaperTextInput,
  Snackbar,
  Button,
} from "react-native-paper";
import { Formik } from "formik";
import * as ImagePicker from "expo-image-picker";
import { SelectList } from "react-native-dropdown-select-list";
import DateTimePicker from '@react-native-community/datetimepicker';


const MyForm = () => {
    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      setShow(Platform.OS === 'ios');
      if (selectedDate) {
        setDate(selectedDate);
      }
    };
  
  const data = [
    { key: "1", value: "Mobiles", disabled: true },
    { key: "2", value: "Appliances" },
    { key: "3", value: "Cameras" },
    { key: "4", value: "Computers", disabled: true },
    { key: "5", value: "Vegetables" },
    { key: "6", value: "Diary Products" },
    { key: "7", value: "Drinks" },
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [snackbarVisible, setSnackbarVisible] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
        <Button onPress={() => setShow(true)} title="Show Date Picker" />
      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="spinner"
          onChange={onChange}
        />
      )}
      <Formik
        initialValues={{ title: "", desc: "", fundType: "Donation" }}
        onSubmit={(values, actions) => {
          // Handle form submission here
          console.log(values);
          console.log("Image URI:", selectedImage);
          setSnackbarVisible(true);
          actions.resetForm();
        }}
      >
        {(formikProps) => (
          <>
            <PaperTextInput
              label="Title"
              value={formikProps.values.title}
              onChangeText={formikProps.handleChange("title")}
              style={styles.input}
            />
            <PaperTextInput
              label="Description"
              value={formikProps.values.desc}
              onChangeText={formikProps.handleChange("desc")}
              multiline
              numberOfLines={4}
              style={styles.input}
            />
            <View style={styles.input}>
              <Text style={styles.label}>Fund Type</Text>
              {/* <Picker
                selectedValue={formikProps.values.fundType}
                style={{ height: 50, width: '100%' }}
                onValueChange={itemValue =>
                  formikProps.setFieldValue('fundType', itemValue)
                }
              >
                <Picker.Item label="Donation" value="Donation" />
                <Picker.Item label="Sponsorship" value="Sponsorship" />
                <Picker.Item label="Grant" value="Grant" />
              </Picker> */}
              <SelectList
                setSelected={(val) => setSelected(val)}
                data={data}
                save="value"
              />
            </View>
            <Button
              mode="contained"
              onPress={pickImage}
              style={styles.imagePickerButton}
            >
              Add Picture
            </Button>
            {selectedImage && (
              <View style={styles.imageContainer}>
                <Text style={styles.label}>Selected Image:</Text>
                <RNButton
                  title="Remove"
                  onPress={() => setSelectedImage(null)}
                />
                <Image source={{ uri: selectedImage }} style={styles.image} />
              </View>
            )}
            <View style={styles.input}>
              <Text style={styles.label}>Start Date</Text>
              {/* <Button
                mode="outlined"
                onPress={() => setShowStartDatePicker(true)}
              >
                {startDate.toDateString()}
              </Button> */}
          
            </View>
            <View style={styles.input}>
              <Text style={styles.label}>End Date</Text>
              {/* <Button
                mode="outlined"
                onPress={() => setShowEndDatePicker(true)}
              >
                {endDate.toDateString()}
              </Button> */}
            </View>
            <Button
              mode="contained"
              onPress={formikProps.handleSubmit}
              style={styles.submitButton}
            >
              Submit
            </Button>
          </>
        )}
      </Formik>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: "OK",
          onPress: () => {},
        }}
      >
        Form submitted successfully!
      </Snackbar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  input: {
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  imagePickerButton: {
    marginVertical: 10,
  },
  imageContainer: {
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 10,
  },
  submitButton: {
    marginVertical: 20,
  },
});

export default MyForm;
