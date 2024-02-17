import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { TextInput, Button, Title, DatePicker } from 'react-native-paper';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';


const validationSchema = yup.object().shape({
    ngoName: yup.string().required('NGO Name is required'),
    serviceName: yup.string().required('Service Name is required'),
    aboutService: yup.string().max(500, 'About the Service must be at most 500 characters').required('About the Service is required'),
    serviceType: yup.string().required('Service Type is required'),
    serviceStartDate: yup.date().required('Service Start Date is required'),
    serviceEndDate: yup.date().required('Service End Date is required'),
    budget: yup.number().required('Budget for Service is required'),
    schedule: yup.number().required('Schedule of Service is required'),
    serviceStatus: yup.string().required('Service Status is required'),
    contactPersonName: yup.string().required("Contact Person's Name is required"),
    phoneNumber: yup.string().required('Phone Number is required'),
});


const FormCheck = () => {

    const handleFormSubmit = (values) => {
        // Handle form submission logic
        console.log('Form values:', values);
    };
    const [date, setDate] = useState(new Date());


    const [selected, setSelected] = React.useState("");
    const data = [
        { key: "1", value: "Mobiles" },
        { key: "2", value: "Appliances" },
        { key: "3", value: "Cameras" },
        { key: "4", value: "Computers", },
        { key: "5", value: "Vegetables" },
        { key: "6", value: "Diary Products" },
        { key: "7", value: "Drinks" },
    ];

    return (
        <ScrollView style={styles.container}>

            <View style={{ marginTop: 20 }}></View>

            <Title>Service Form</Title>

            <Formik
                initialValues={{
                    ngoName: '',
                    serviceName: '',
                    aboutService: '',
                    serviceType: '',
                    serviceStartDate: '',
                    serviceEndDate: '',
                    budget: '',
                    schedule: '',
                    serviceStatus: '',
                    contactPersonName: '',
                    phoneNumber: '',
                }}
                validationSchema={validationSchema}
                onSubmit={handleFormSubmit}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
                    <View>
                        <TextInput
                            label="NGO Name"
                            value={values.ngoName}
                            onChangeText={handleChange('ngoName')}
                            onBlur={handleBlur('ngoName')}
                        />
                        {touched.ngoName && errors.ngoName && <Text style={styles.errorText}>{errors.ngoName}</Text>}

                        <TextInput
                            label="Service Name"
                            value={values.serviceName}
                            onChangeText={handleChange('serviceName')}
                            onBlur={handleBlur('serviceName')}
                        />
                        {touched.serviceName && errors.serviceName && <Text style={styles.errorText}>{errors.serviceName}</Text>}

                        <TextInput
                            label="About the Service"
                            value={values.aboutService}
                            onChangeText={handleChange('aboutService')}
                            onBlur={handleBlur('aboutService')}
                            multiline
                            numberOfLines={4}
                        />
                        {touched.aboutService && errors.aboutService && <Text style={styles.errorText}>{errors.aboutService}</Text>}

                        <SelectList
                            style={{}}
                            setSelected={(val) => setSelected(val)}
                            data={data}
                            save="value"
                        />

                        {touched.serviceType && errors.serviceType && <Text style={styles.errorText}>{errors.serviceType}</Text>}

                        

                        <TextInput
                            label="Service Start Date"
                            value={values.serviceStartDate}
                            onChangeText={handleChange('serviceStartDate')}
                            onBlur={handleBlur('serviceStartDate')}
                        />
                        {touched.serviceStartDate && errors.serviceStartDate && <Text style={styles.errorText}>{errors.serviceStartDate}</Text>}


                        <TextInput
                            label="Service End Date"
                            value={values.serviceEndDate}
                            onChangeText={handleChange('serviceEndDate')}
                            onBlur={handleBlur('serviceEndDate')}
                        />
                        {touched.serviceEndDate && errors.serviceEndDate && <Text style={styles.errorText}>{errors.serviceEndDate}</Text>}

                        <TextInput
                            label="Budget for Service"
                            value={values.budget}
                            onChangeText={handleChange('budget')}
                            onBlur={handleBlur('budget')}
                        />
                        {touched.budget && errors.budget && <Text style={styles.errorText}>{errors.budget}</Text>}

                        <TextInput
                            label="Schedule of Service"
                            value={values.schedule}
                            onChangeText={handleChange('schedule')}
                            onBlur={handleBlur('schedule')}
                        />
                        {touched.schedule && errors.schedule && <Text style={styles.errorText}>{errors.schedule}</Text>}

                        <TextInput
                            label="Service Status"
                            value={values.serviceStatus}
                            onChangeText={handleChange('serviceStatus')}
                            onBlur={handleBlur('serviceStatus')}
                        />
                        {touched.serviceStatus && errors.serviceStatus && <Text style={styles.errorText}>{errors.serviceStatus}</Text>}

                        <TextInput
                            label="Contact Person's Name"
                            value={values.contactPersonName}
                            onChangeText={handleChange('contactPersonName')}
                            onBlur={handleBlur('contactPersonName')}
                        />
                        {touched.contactPersonName && errors.contactPersonName && <Text style={styles.errorText}>{errors.contactPersonName}</Text>}

                        <TextInput
                            label="Phone Number"
                            value={values.phoneNumber}
                            onChangeText={handleChange('phoneNumber')}
                            onBlur={handleBlur('phoneNumber')}
                        />
                        {touched.phoneNumber && errors.phoneNumber && <Text style={styles.errorText}>{errors.phoneNumber}</Text>}

                        <Button mode="contained" onPress={handleSubmit} style={styles.button}>
                            Submit
                        </Button>
                        <View style={{ marginBottom: 20 }}></View>
                    </View>
                )}
            </Formik>
        </ScrollView>
    );
};


export default FormCheck

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
})