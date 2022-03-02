import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Keyboard,
    KeyboardAvoidingView,
} from 'react-native';
import {
    auth,
    signInWithEmailAndPassword,
} from '../firebase/firebase'
import {images, colors, icons, fontSize} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {isValidEmail, isValidPassword} from '../utilities/Validations'


function Login(props) {
    const [keyboardIsShow, setKeyboardIsShow] = useState(false)
    //states for validating
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    //states to store email/password
    const [email, setEmail] = useState('trinh@gmail.com')
    const [password, setPassword] = useState('123456Abc')
    const isValidationOK = () => email.length > 0
    && password.length > 0
    && isValidEmail(email) == true
    && isValidPassword(password) == true

    useEffect(() => {
        //componentDidMount
        Keyboard.addListener('keyboardDidShow',() => {
            // alert('keyboardDidShow')
            setKeyboardIsShow(true)
        })
        Keyboard.addListener('keyboardDidHide',() => {
            // alert('keyboardDidHide')
            setKeyboardIsShow(false)
        })
    })
    //navigation
    const {navigation, route} = props
    //function of navigate to/back
    const {navigate, goBack} = navigation
    return <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? "padding" : "height" }
    style={{
        flex: 100,
        backgroundColor: 'white',
    }}>
        <View style={{
            flex: 30,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
        }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h2,
                fontWeight: 'bold',
                width: '50%',
            }}>Already have an Account?</Text>
            <Image
                tintColor={colors.primary}
                source={images.computer}
                style={{
                    width: 100,
                    height: 100,
                    alignSelf: 'center',
                }}
            ></Image>
        </View>
        <View style={{
            flex: 30,
        }}>
            <View style={{
                marginHorizontal: 20,
            }}>
                <Text style={{
                    color: colors.primary,
                    fontSize: fontSize.h5,
                }}>Email:</Text>
                <TextInput
                onChangeText={(text) => {
                    // if(isValidEmail(text) == false) {
                    //     setErrorEmail('Email not in correct format')
                    // } else {
                    //     setErrorEmail('')
                    // }
                    setErrorEmail(isValidEmail(text) == true ? '' : 'Email not in correct format')
                    setEmail(text);
                }}
                style={{
                    color: 'black',
                }}
                keyboardType='email'
                placeholder='example@gmail.com'
                value = {email}
                placeholderTextColor={colors.placeholder}
                ></TextInput>
                <Text style={{
                    color: 'red',
                    fontSize: fontSize.h6,
                    fontWeight: 'bold',
                    marginBottom: 15,
                }}>{errorEmail}</Text>
            </View>
            <View style={{
                marginHorizontal: 15,
            }}>
                <Text style={{
                        color: colors.primary,
                        fontSize: fontSize.h5,
                    }}>Password:</Text>
                    <TextInput
                    onChangeText={(text) => {
                        setErrorPassword(isValidPassword(text) == true ? '' : 'Password must be at least 3 characters')
                        setPassword(text);
                    }}
                    style={{
                        color: 'black',
                    }}
                    secureTextEntry = {true}
                    placeholder='Enter your password'
                    value={password}
                    placeholderTextColor={colors.placeholder}
                    ></TextInput>
                    <Text style={{
                    color: 'red',
                    fontSize: fontSize.h6,
                    fontWeight: 'bold',
                    marginBottom: 15,
                }}>{errorPassword}</Text>
            </View>
        </View>
      {keyboardIsShow == false && <View style={{
            flex: 15,
        }}>
            <TouchableOpacity
            disabled = {isValidationOK() == false}
            onPress={() => {
            // alert(`Email = ${email}, password = ${password}`)
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user
                    navigate('UITab')
                }).catch((error) => {
                    alert(`Cannot signin, error: ${error.message}`)
                })
            }}
            style={{
                backgroundColor: isValidationOK() == true 
                ? colors.primary : colors.inactive,
                justifyContent: 'center',
                alignItems: 'center',
                width: '50%',
                alignSelf: 'center',
                borderRadius: 15,
            }}>
                <Text style={{
                    padding: 10,
                    fontSize: fontSize.h5,
                    color: 'white',
                }}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => {
                // alert('Press register')
                navigate('Register')
            }}
            style={{
                padding: 5,
            }}>
                <Text style={{
                        padding: 10,
                        fontSize: fontSize.h6,
                        color: colors.primary,
                        alignSelf: 'center',
                    }}>New user? Register now</Text>
            </TouchableOpacity>
        </View>}
        {keyboardIsShow == false && <View style={{
            flex: 25,
        }}>
            <View style={{
                height: 40,
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 18,
            }}>
            <View style={{
                height: 1,
                flex: 1,
                backgroundColor: 'black',
            }}></View>
            <Text style={{
                        padding: 10,
                        fontSize: fontSize.h6,
                        color: 'black',
                        alignSelf: 'center',
                        marginHorizontal: 6,
                    }}>User other methods?</Text>
            <View style={{
                height: 1,
                flex: 1,
                backgroundColor: 'black',
            }}></View>

            </View>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
            }}>
                <Icon name="facebook" size={36} color={colors.facebook}></Icon>
                <View style={{width: 18}}></View>
                <Icon name="google" size={36} color={colors.google}></Icon>
            </View>
        </View>}
    
    </KeyboardAvoidingView>
}

export default Login;