import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Signup = ({ navigation }) => {
    const [value, setValue] = useState(false)
    const devicesWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    const emailRegExp =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    const dateRegex =   "^(0[1-9]|1[012])[-/.](0[1-9]|[12][0-9]|3[01])[-/.](19|20)\\d\\d$" 



    const SignupSchema = Yup.object().shape({
        name: Yup.string()
            .required("Name is required")
            // .matches(phoneRegExp, 'Phone number is not valid')
            .min(3, "to short")
            .max(50),
            // .max(10, "Not Valid Number"),
            email: Yup.string()
            .required("Email is required")
            .matches(emailRegExp, 'Email is not valid'),
            dob: Yup.string()
            .required("DOB is required")
            .matches(dateRegex, 'DOB is not valid'),




    });
   
    return (
        <SafeAreaView style={{ height: deviceHeight, width: devicesWidth, flex: 1, backgroundColor: '#fff' }}>
            <Formik
                initialValues={{
                    name: ''

                }}
                validationSchema={SignupSchema}
            onSubmit={values => Alert.alert("Hello") }

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    setFieldTouched,
                    isValid,
                    handleSubmit,
                }) => (
                    <>
                        <StatusBar style={{ backgroundColor: '#fff' }} />
                        <View style={{ flex: 1, height: deviceHeight, width: devicesWidth }}>
                            <Image source={require('../../assets/back.jpg')}
                                style={{ resizeMode: 'stretch', width: devicesWidth, height: deviceHeight / 2 }} />
                        </View>
                        <View style={{ width: devicesWidth, height: deviceHeight / 2 }}>
                            <View style={{
                                flex: 1, backgroundColor: '#fff', paddingHorizontal: 44
                            }}>
                                <Text style={styles.login}>
                                    Fill your details
                                </Text>
                                <Text style={styles.text}>
                                    Enter your details to update your
                                    profile                                </Text>
                                
                                <View style={styles.textInput}>
                                    <TextInput
                                        placeholder='Enter full name*'
                                        placeholderTextColor={'#777777'}
                                        keyboardType='name'
                                        style={styles.input}
                                        onChangeText={handleChange('name')}
                                        value={values.name}
                                        onBlur={() => setFieldTouched('name')}

                                    />
                                    {touched.name && errors.name && (
                                        <Text style={styles.error}>
                                            {errors.name}
                                        </Text>
                                    )}

                                </View>
                                <View style={styles.textInput}>
                                    <TextInput
                                        placeholder='Email*'
                                        placeholderTextColor={'#777777'}
                                        // keyboardType='numeric'
                                        // maxLength={10}
                                        style={styles.input}
                                        keyboardType='email-address'
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        onBlur={() => setFieldTouched('email')}

                                    />
                                    {touched.email && errors.email && (
                                        <Text style={styles.error}>
                                            {errors.email}
                                        </Text>
                                    )}

                                </View>
                                <View style={styles.textInput}>
                                    <TextInput
                                        placeholder='DOB*'
                                        placeholderTextColor={'#777777'}
                                        // keyboardType='numeric'
                                        // maxLength={10}
                                        style={styles.input}
                                        onChangeText={handleChange('dob')}
                                        value={values.dob}
                                        onBlur={() => setFieldTouched('dob')}

                                    />
                                    {touched.dob && errors.dob && (
                                        <Text style={styles.error}>
                                            {errors.dob}
                                        </Text>
                                    )}

                                </View>
                            </View>


                            <View style={{ width: devicesWidth, justifyContent: 'center', alignItems: 'center', paddingBottom: 40 }}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: '#777777' }]}
                                    onPress={() => handleSubmit()
                                    }
                                // value={values.phone_number}

                                >
                                    <Text style={styles.buttonText}>
                                     Confirm
                                    </Text>
                                </TouchableOpacity>
                            </View>






                        </View>
                    </>
                )}
            </Formik>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    login: {
        fontSize: 25,
        fontWeight: '700',
        color: "#222222",
        paddingTop: 20
    },
    text: {
        fontSize: 18,
        color: '#555555',
        paddingVertical: 15,
    },

    input: {

        borderBottomWidth: 1,
        borderBottomColor: '#777777',
        color:'#777777'
    },
    textInput: {
        // paddingVertical: 25
    },
    error: {
        color: 'red'
    },
    button: {
        // backgroundColor: ,
        height: 50,
        width: 150,
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 50
    },
    buttonText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600'
    },
})
export default Signup; 