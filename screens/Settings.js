import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Switch,
} from 'react-native';
import {images, colors, icons, fontSize} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { UIHeader } from '../components';
import {auth, firebaseDatabase, firebaseDatabaseRef} from '../firebase/firebase'
import {StackActions} from '@react-navigation/native'

function Settings(props) {
    const [isEnabledLockApp, setEnabledLockApp] = useState(true)
    const [isUseFingerprint, setUseFingerprint] = useState(false)
    const [isEnabledChangePassword, setEnabledChangePassword] = useState(true)
   //navigation
   const {navigation, route} = props
   //function of navigate to/back
   const {navigate, goBack} = navigation

    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <UIHeader title="Settings"></UIHeader>
        <ScrollView>
            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
                }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Common</Text>
            </View>
            <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Icon 
                        name="globe" 
                        size={15} 
                        color={'black'}
                        style={{
                            marginStart: 10,
                        }}
                    ></Icon>
                     <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Languages</Text>
                <View style={{flex: 1}}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>English</Text>
                <Icon 
                    name="chevron-right" 
                    size={10} 
                    color={'black'}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    ></Icon>
                </View>

            <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Icon 
                        name="cloud" 
                        size={15} 
                        color={'black'}
                        style={{
                            marginStart: 10,
                        }}
                    ></Icon>
                     <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Enviroment</Text>
                <View style={{flex: 1}}></View>
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingEnd: 10,
                    opacity: 0.5,
                }}>Production</Text>
                <Icon 
                    name="chevron-right" 
                    size={10} 
                    color={'black'}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    ></Icon>
                </View>

            <View style={{
            height: 40,
            backgroundColor: 'rgba(0,0,0,0.2)',
            justifyContent: 'center',
            }}>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'red',
                paddingStart: 10,
            }}>Account</Text>
            </View>

            <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Icon 
                        name="phone" 
                        size={15} 
                        color={'black'}
                        style={{
                            marginStart: 10,
                        }}
                    ></Icon>
                     <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Phone number</Text>
                <View style={{flex: 1}}></View>
                <Icon 
                    name="chevron-right" 
                    size={10} 
                    color={'black'}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    ></Icon>
                </View>
                
            <View style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Icon 
                        name="envelope" 
                        size={15} 
                        color={'black'}
                        style={{
                            marginStart: 10,
                        }}
                    ></Icon>
                     <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Email</Text>
                <View style={{flex: 1}}></View>
                <Icon 
                    name="chevron-right" 
                    size={10} 
                    color={'black'}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    ></Icon>
                </View>

            <TouchableOpacity 
                onPress={() => {
                    auth.signOut()
                    navigation.dispatch(StackActions.popToTop())
                }}
                style={{
                    flexDirection: 'row',
                    paddingVertical: 10,
                    alignItems: 'center',
                }}>
                    <Icon 
                        name="sign-out-alt" 
                        size={15} 
                        color={'black'}
                        style={{
                            marginStart: 10,
                        }}
                    ></Icon>
                     <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'black',
                    paddingStart: 10,
                }}>Sign out</Text>
                <View style={{flex: 1}}></View>
                <Icon 
                    name="chevron-right" 
                    size={10} 
                    color={'black'}
                    style={{
                        paddingEnd: 10,
                        opacity: 0.5,
                    }}
                    ></Icon>
                </TouchableOpacity>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
                }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Security</Text>
                </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon 
                    name="lock" 
                    size={15} 
                    color={'black'}
                    style={{
                        marginStart: 10,
                    }}
                ></Icon>
                    <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'black',
                paddingStart: 10,
            }}>Lock app in background</Text>
            <View style={{flex: 1}}></View>
            <Switch
                trackColor={{ false: colors.inactive, true: colors.primary }}
                thumbColor={isEnabledLockApp ? colors.primary : colors.inactive}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                    setEnabledLockApp(!isEnabledLockApp)
                }}
                value={isEnabledLockApp}
                style={{
                    marginEnd: 10,
                }}
            />
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon 
                    name="fingerprint" 
                    size={15} 
                    color={'black'}
                    style={{
                        marginStart: 10,
                    }}
                ></Icon>
                    <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'black',
                paddingStart: 10,
            }}>Use fingerprint</Text>
            <View style={{flex: 1}}></View>
            <Switch
                trackColor={{ false: colors.inactive, true: colors.primary }}
                thumbColor={isUseFingerprint ? colors.primary : colors.inactive}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                    setUseFingerprint(!isUseFingerprint)
                }}
                value={isUseFingerprint}
                style={{
                    marginEnd: 10,
                }}
            />
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon 
                    name="lock" 
                    size={15} 
                    color={'black'}
                    style={{
                        marginStart: 10,
                    }}
                ></Icon>
                    <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'black',
                paddingStart: 10,
            }}>Change password</Text>
            <View style={{flex: 1}}></View>
            <Switch
                trackColor={{ false: colors.inactive, true: colors.primary }}
                thumbColor={isEnabledChangePassword ? colors.primary : colors.inactive}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                    setEnabledChangePassword(!isEnabledChangePassword)
                }}
                value={isEnabledChangePassword}
                style={{
                    marginEnd: 10,
                }}
            />
            </View>

            <View style={{
                height: 40,
                backgroundColor: 'rgba(0,0,0,0.2)',
                justifyContent: 'center',
                }}>
                <Text style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    color: 'red',
                    paddingStart: 10,
                }}>Misc</Text>
                </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon 
                    name="file-alt" 
                    size={15} 
                    color={'black'}
                    style={{
                        marginStart: 10,
                    }}
                ></Icon>
                    <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'black',
                paddingStart: 10,
            }}>Term of Service</Text>
            <View style={{flex: 1}}></View>
            <Icon 
                name="chevron-right" 
                size={10} 
                color={'black'}
                style={{
                    paddingEnd: 10,
                    opacity: 0.5,
                }}
                ></Icon>
            </View>

            <View style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
            }}>
                <Icon 
                    name="passport" 
                    size={15} 
                    color={'black'}
                    style={{
                        marginStart: 10,
                    }}
                ></Icon>
                    <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                color: 'black',
                paddingStart: 10,
            }}>Open source licenses</Text>
            <View style={{flex: 1}}></View>
            <Icon 
                name="chevron-right" 
                size={10} 
                color={'black'}
                style={{
                    paddingEnd: 10,
                    opacity: 0.5,
                }}
                ></Icon>
            </View>

        </ScrollView>
    </View>
}

export default Settings;