// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   ScrollView,
//   Button as RNButton,
//   Image, 
// } from "react-native";
// import {
//   TextInput as PaperTextInput,
//   Snackbar,
//   Button,
// } from "react-native-paper";
// import { Formik } from "formik";
// import * as ImagePicker from "expo-image-picker";
// import { SelectList } from "react-native-dropdown-select-list";
// import DateTimePicker from '@react-native-community/datetimepicker';
// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   title: yup.string().required('Title is required'),
//   desc: yup.string().required('Description is required'),
//   startDate: yup.date().required('Start Date is required'),
//   endDate: yup.date().min(yup.ref('startDate'), 'End Date must be after Start Date').required('End Date is required'),
// });

// const MyForm = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     const [endDate, setEndDate] = useState(new Date());
//     const [showStartDatePicker, setShowStartDatePicker] = useState(false);
//     const [showEndDatePicker, setShowEndDatePicker] = useState(false);
//     const [show, setShow] = useState(false);

//     const onStartDateChange = (event, selectedDate) => {
//       setShowStartDatePicker(Platform.OS === 'ios');
//       if (selectedDate) {
//         setStartDate(selectedDate);
//       }
//     };

//     const onEndDateChange = (event, selectedDate) => {
//       setShowEndDatePicker(Platform.OS === 'ios');
//       if (selectedDate) {
//         setEndDate(selectedDate);
//       }
//     };

//   const data = [
//     { key: "1", value: "Education Support"},
//     { key: "2", value: "Women Empowerment" },
//     { key: "3", value: "Healthcare Initiatives" },
//     { key: "4", value: "Disaster Relief" },
//     { key: "5", value: "Child Welfare" },
//     { key: "6", value: "Elderly Care" },
//     { key: "7", value: "Tribal Development" },
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selected, setSelected] = useState(null);
//   const [snackbarVisible, setSnackbarVisible] = useState(false);

//   const pickImage = async () => {
//     const result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.Images,
//       allowsEditing: true,
//       aspect: [4, 3],
//       quality: 1,
//     });

//     if (!result.cancelled) {
//       setSelectedImage(result.uri);
//     }
//   };

//   return (
//     <ScrollView style={styles.container}>
//         <Button onPress={() => setShow(true)} title="Show Date Picker" />
//       {show && (
//         <DateTimePicker
//           value={startDate}
//           mode="date"
//           display="spinner"
//           onChange={onStartDateChange}
//         />
//       )}
//       <Formik
//         initialValues={{ title: "", desc: "", fundType: "Donation", startDate: startDate, endDate: endDate }}
//         onSubmit={(values, actions) => {
//           // Handle form submission here
//           console.log(values);
//           console.log("Image URI:", selectedImage);
//           setSnackbarVisible(true);
//           actions.resetForm();
//         }}
//         validationSchema={validationSchema}
//       >
//         {(formikProps) => (
//           <>
//             <PaperTextInput
//               label="Title"
//               value={formikProps.values.title}
//               onChangeText={formikProps.handleChange("title")}
//               onBlur={formikProps.handleBlur('title')}
//               style={styles.input}
//             />
//             {formikProps.touched.title && formikProps.errors.title &&
//               <Text style={styles.error}>{formikProps.errors.title}</Text>
//             }
//             <PaperTextInput
//               label="Description"
//               value={formikProps.values.desc}
//               onChangeText={formikProps.handleChange("desc")}
//               onBlur={formikProps.handleBlur('desc')}
//               multiline
//               numberOfLines={4}
//               style={styles.input}
//             />
//             {formikProps.touched.desc && formikProps.errors.desc &&
//               <Text style={styles.error}>{formikProps.errors.desc}</Text>
//             }
//             <View style={styles.input}>
//               <Text style={styles.label}>Fund Type</Text>
//               <SelectList
//                 setSelected={(val) => setSelected(val)}
//                 data={data}
//                 save="value"
//               />
//             </View>
//             <Button
//               mode="contained"
//               onPress={pickImage}
//               style={styles.imagePickerButton}
//             >
//               Add Picture
//             </Button>
//             {selectedImage && (
//               <View style={styles.imageContainer}>
//                 <Text style={styles.label}>Selected Image:</Text>
//                 <RNButton
//                   title="Remove"
//                   onPress={() => setSelectedImage(null)}
//                 />
//                 <Image source={{ uri: selectedImage }} style={styles.image} />
//               </View>
//             )}
//             <View style={styles.input}>
//               <Text style={styles.label}>Start Date</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => setShowStartDatePicker(true)}
//               >
//                 {startDate.toDateString()}
//               </Button>
//               {showStartDatePicker && (
//                 <DateTimePicker
//                   value={startDate}
//                   mode="date"
//                   display="spinner"
//                   onChange={onStartDateChange}
//                 />
//               )}
//             </View>
//             <View style={styles.input}>
//               <Text style={styles.label}>End Date</Text>
//               <Button
//                 mode="outlined"
//                 onPress={() => setShowEndDatePicker(true)}
//               >
//                 {endDate.toDateString()}
//               </Button>
//               {showEndDatePicker && (
//                 <DateTimePicker
//                   value={endDate}
//                   mode="date"
//                   display="spinner"
//                   onChange={onEndDateChange}
//                 />
//               )}
//             </View>
//             <Button
//               mode="contained"
//               onPress={formikProps.handleSubmit}
//               style={styles.submitButton}
//             >
//               Submit
//             </Button>
//           </>
//         )}
//       </Formik>
//       <Snackbar
//         visible={snackbarVisible}
//         onDismiss={() => setSnackbarVisible(false)}
//         action={{
//           label: "OK",
//           onPress: () => {},
//         }}
//       >
//         Form submitted successfully!
//       </Snackbar>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 16,
//     backgroundColor: "#fff",
//   },
//   input: {
//     marginVertical: 10,
//   },
//   label: {
//     fontSize: 16,
//     marginBottom: 5,
//   },
//   error: {
//     fontSize: 12,
//     color: 'red',
//   },
//   imagePickerButton: {
//     marginVertical: 10,
//   },
//   imageContainer: {
//     marginVertical: 10,
//   },
//   image: {
//     width: 200,
//     height: 200,
//     marginTop: 10,
//   },
//   submitButton: {
//     marginVertical: 20,
//   },
// });



// export default MyForm;










import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import { TextInput, Button, Avatar, Snackbar } from 'react-native-paper';
import { Formik } from 'formik';
import { Base_Color } from '../../../lib/React Query/variables';
import { responsiveMargin } from '../../../lib/Validation/RelativeValues';
import DateTimePicker from '@react-native-community/datetimepicker';


const MyForm = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);
  const [show, setShow] = useState(false);

  const onStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  const [snackbarVisible, setSnackbarVisible] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <Formik
        initialValues={{ title: '', description: '', startDate: '', endDate: '' }}
        onSubmit={(values, actions) => {
          console.log(values);
          // Handle form submission here
          setSnackbarVisible(true);
          actions.resetForm();
        }}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <View style={styles.container}>
            <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
              <View style={{ marginHorizontal: 10, marginTop: 5 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: responsiveMargin(2) }}>
                  Create Fund Request
                </Text>
                <Text style={{ flex: 1, marginBottom: responsiveMargin(5) }}>
                  Add Following Details To Create Fund Request
                </Text>
              </View>
            </View>
            <TextInput
              label="Title"
              onChangeText={handleChange('title')}
              onBlur={handleBlur('title')}
              value={values.title}
              style={styles.input}
              placeholderTextColor="black" // Set placeholder text color to black
            />
            <TextInput
              label="Description"
              onChangeText={handleChange('description')}
              onBlur={handleBlur('description')}
              value={values.description}
              style={styles.input}
              placeholderTextColor="black" // Set placeholder text color to black
            />


            {/* Add ImagePicker here */}


            <View style={{ marginHorizontal: responsiveMargin(2) }}>


              <View style={{ marginTop: responsiveMargin(5) }}>
                <Text>Start Date</Text>
                <Button
                  mode="outlined"
                  onPress={() => setShowStartDatePicker(true)}
                  style={{ borderColor: Base_Color }} // Set outline color to Base_Color
                >
                  {startDate.toDateString()}
                </Button>
                {showStartDatePicker && (
                  <DateTimePicker
                    value={startDate}
                    mode="date"
                    display="spinner"
                    onChange={onStartDateChange}
                  />
                )}
              </View>



              <View style={{ marginTop: responsiveMargin(5) }}>
                <Text>End Date</Text>
                <Button
                  mode="outlined"
                  onPress={() => setShowEndDatePicker(true)}
                  style={{ borderColor: Base_Color }} 
                >
                  {endDate.toDateString()}
                </Button>
                {showEndDatePicker && (
                  <DateTimePicker
                    value={endDate}
                    mode="date"
                    display="spinner"
                    onChange={onEndDateChange}
                  />
                )}
              </View>

            </View>






            <Button mode="contained" onPress={handleSubmit} style={styles.button}>
              Add Request
            </Button>
          </View>
        )}
      </Formik>
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        action={{
          label: 'OK',
          onPress: () => { },
        }}
      >
        Form submitted successfully!
      </Snackbar>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'white',
  },
  container: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 40,
  },
  input: {
    marginBottom: 5,
    backgroundColor: 'transparent',
    borderColor: Base_Color,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    color: 'black'
  },
  button: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: Base_Color,
  },
});

export default MyForm;
