import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Dimensions, SafeAreaView, StatusBar, Image, StyleSheet, TextInput, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Verification from './Singup';

const Login = ({ navigation }) => {
    const [value, setValue] = useState(false)
    const devicesWidth = Dimensions.get('window').width;
    const deviceHeight = Dimensions.get('window').height;
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

    const SignupSchema = Yup.object().shape({
        phone_number: Yup.string()
            .required("Phone number is required")
            .matches(phoneRegExp, 'Phone number is not valid')
            .min(10, "Not Valid Number")
            .max(10, "Not Valid Number"),
        password: Yup.string()
            .required("Password is required")
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required'),


    });



    return (
        <SafeAreaView style={{ height: deviceHeight, width: devicesWidth, flex: 1, backgroundColor: '#fff' }}>
            <Formik
                initialValues={{
                    phone_number: ''

                }}
                validationSchema={SignupSchema}
                onSubmit={values => navigation.navigate('BottomTabNavigator') }

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
                                    Login
                                </Text>
                                <Text style={styles.text}>
                                    Please enter your phone number to verify
                                </Text>
                                <View style={styles.textInput}>
                                    <TextInput
                                        placeholder='Enter Phone Number*'
                                        placeholderTextColor={'#777777'}
                                        keyboardType='numeric'
                                        maxLength={10}
                                        style={styles.input}
                                        onChangeText={handleChange('phone_number')}
                                        value={values.phone_number}
                                        onBlur={() => setFieldTouched('phone_number')}

                                    />
                                    {touched.phone_number && errors.phone_number && (
                                        <Text style={styles.error}>
                                            {errors.phone_number}
                                        </Text>
                                    )}

                                </View>
                                <View style={styles.textInput}>
                                    <TextInput
                                        placeholder='Enter your password*'
                                        placeholderTextColor={'#777777'}
                                        // keyboardType='numeric'
                                        // maxLength={10}
                                        style={styles.input}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        onBlur={() => setFieldTouched('password')}

                                    />
                                    {touched.password && errors.password && (
                                        <Text style={styles.error}>
                                            {errors.password}
                                        </Text>
                                    )}

                                </View>
                                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:5}}>
                                <Text style={{color:"#777777",fontSize:18,fontWeight:"400"}}>
                                    Don't have an account? 
                                </Text>
                                <TouchableOpacity style={{paddingLeft:5}}
                                onPress={() => navigation.navigate('Signup')}>
                                    <Text style={{color:"#E55402",fontSize:18,fontWeight:"600"}}>
                                        SignUP
                                    </Text>
                                </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{justifyContent:"center",alignItems:"center"}}>
                                
                                    <Text style={{color:"#E55402",fontSize:18,fontWeight:"600"}}>
                                        Forgot password
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ width: devicesWidth, justifyContent: 'center', alignItems: 'center', paddingBottom: 30 }}>
                                <TouchableOpacity
                                    style={[styles.button, { backgroundColor: '#777777' }]}
                                    onPress={() => handleSubmit()
                                    }
                                // value={values.phone_number}

                                >
                                    <Text style={styles.buttonText}>
                                        Continue
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
        marginTop: 15,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#777777',
        color: "#777777"
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
        fontWeight: '600',
    },
})
export default Login; 