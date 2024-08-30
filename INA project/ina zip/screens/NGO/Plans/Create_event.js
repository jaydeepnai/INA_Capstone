import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button, HelperText } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  NGOName: yup.string().required('NGO Name is required'),
  eventName: yup.string().required('Event Name is required'),
  aboutEvent: yup.string().required('About Event is required'),
  eventType: yup.string().required('Event Type is required'),
  eventStartDate: yup.date().required('Event Start Date is required'),
  eventEndDate: yup.date().required('Event End Date is required'),
  eventBudget: yup.number().required('Event Budget is required'),
  eventStatus: yup.string().required('Event Status is required'),
  contactPerson: yup.string().required('Contact Person is required'),
  phoneNo: yup.string().required('Phone Number is required'),
});

const Create_event = () => {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (values) => {
    setSubmitting(true);
    // Handle form submission here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          NGOName: '',
          eventName: '',
          aboutEvent: '',
          eventType: '',
          eventStartDate: '',
          eventEndDate: '',
          eventBudget: '',
          eventStatus: '',
          contactPerson: '',
          phoneNo: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
          <>
            <TextInput
              label="NGO Name"
              value={values.NGOName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Event Name"
              value={values.eventName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="About Name"
              value={values.aboutEvent}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Eevent Type"
              value={values.eventType}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Event StartDate"
              value={values.eventStartDate}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Event EndDate"
              value={values.eventEndDate}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Event Budget"
              value={values.NGOName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Event Status"
              value={values.NGOName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Contect Person For Event"
              value={values.NGOName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <TextInput
              label="Contect Number"
              value={values.NGOName}
              onChangeText={handleChange('NGOName')}
              onBlur={handleBlur('NGOName')}
            />
            <HelperText type="error" visible={touched.NGOName && errors.NGOName}>
              {errors.NGOName}
            </HelperText>

            {/* Repeat the same pattern for other fields */}
            
            <Button mode="contained" onPress={handleSubmit} disabled={submitting}>
              Submit
            </Button>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Create_event;
