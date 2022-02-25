import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

//component = function
//create a variable which reference to a function
import {sum2Number, subtract2Number, PI} from '../utilities/Calculation'
import {icons, images, colors, fontSize} from '../constants'
import {UIButton} from '../components'
import Icon from 'react-native-vector-icons/FontAwesome5'
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
} from '../firebase/firebase'
//read object, variable, function from other modules
function Welcome(props) {
    //state => when a state is changed => UI is reload
    const [accountTypes, setAccountTypes] = useState([
        {
            name: 'Influencer',
            isSelected: true,
        },
        {
            name: 'Business',
            isSelected: false,
        },
        {
            name: 'Individual',
            isSelected: false,
        },
    ])
    //navigation
    const {navigation, route} = props
    //function of navigate to/back
    const {navigate, goBack} = navigation
    useEffect(() => {
        onAuthStateChanged(auth, (responseUser) => {
            if(responseUser){
                //sign in
                //save data to Firebase
                let user = {
                    userId : responseUser.uid,
                    email: responseUser.email,
                    emailVerified: responseUser.emailVerified,
                    accessToken: responseUser.accessToken
                }
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `users/${responseUser.uid}`
                ), user)
                //save user to local storage
                AsyncStorage.setItem("user", JSON.stringify(user))
                navigate('UITab')
            }
        })
    })
    return <View style={{
        backgroundColor: 'white',
        flex: 100,
    }}>
        <ImageBackground
        source={
            images.background
            }
        resizeMode='cover'
        style={{
            flex: 100,
        }}
        >
        <View style={{
            flex: 20,
        }}>
            <View style={{
                flexDirection: 'row',
                height: 50,
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}>
                <Image
                source={
                    icons.fire
                }
                style={{
                    width: 30,
                    height: 30,
                    marginStart: 10,
                    marginEnd: 5,
                }}
                />
                <Text style={{
                    color: 'white'
                }}>TRINHDOAN.CO</Text>
                <View style={{
                    flex: 1,
                }}></View>
                <Icon name={'question-circle'}
                color={'white'}
                size={20}
                 style={{
                    marginRight: 20,
                }}
                
                ></Icon>
                {/* <Image
                source={
                    icons.question
                }
                style={{
                    width: 20,
                    height: 20,
                    tintColor: 'white',
                    marginRight: 10,
                }}
                /> */}
            </View>
        </View>
        <View style={{
            flex: 20,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Text style={{
                color: 'white',
                marginBottom: 7,
                fontSize: fontSize.h6,
            }}>Welcome to</Text>
            <Text style={{
                color: 'white',
                marginBottom: 7,
                fontWeight: 'bold',
                fontSize: fontSize.h4,
            }}>TRINHDOAN.CO !</Text>
            <Text style={{
                color: 'white',
                marginBottom: 7,
                fontSize: fontSize.h6,
            }}>Please select your account type</Text>
        </View>
        <View style={{
            flex: 40,
        }}>
            {accountTypes.map(accountType =>
                <UIButton 
                key = {accountType.name}
                onPress={() => {
                    setAccountTypes(accountTypes.map(eachAccountType => {
                        return {
                            ...eachAccountType,
                            isSelected: eachAccountType.name == accountType.name
                        }
                    }));
            }}
            title={accountType.name}
            isSelected={accountType.isSelected}
            ></UIButton>)}
        </View>
        <View style={{
            flex: 20,
        }}>
        <UIButton 
        onPress={() => {
            navigate('Login')
        }}
        title={'Login'.toUpperCase()
        }></UIButton>
        <Text style={{
                color: 'white',
                fontSize: fontSize.h6,
                alignSelf: 'center',
            }}>Want to register new Account?</Text>
        <TouchableOpacity
        onPress={() => {
            // alert('Press Register')
            navigate('Register')
        }}
        style={{
            padding: 5,
        }}>
            <Text style={{
                    color: colors.primary,
                    fontSize: fontSize.h6,
                    alignSelf: 'center',
                    textDecorationLine: 'underline',
                }}>Register</Text>
        </TouchableOpacity>
        </View>
        </ImageBackground>
    </View>
}

export default Welcome;
// const Welcome = (props) => {
//     const {x, y} = props
//     const {person} = props
//     //const => let => var
//     //destructuring person object
//     const {name, age, email} = person
//     const {products} = props
//     //JSX
//     return <View style={{
//         backgroundColor: 'yellow',
//     }}>
//                 <Text>x = {x}, y = {y}</Text>
//                 <Text>Name = {name}, age = {age}, email = {email}</Text>
//                 {products.map(eachProduct => 
//                 <Text>{eachProduct.productName}, {eachProduct.year}</Text>)}
//                 <Text>sum 2 and 3 = {sum2Number(2, 3)}</Text>
//                 <Text>10 - 8 = {subtract2Number(10, 8)}</Text>
//                 <Text>PI = {PI}</Text>
//             </View>
// }
