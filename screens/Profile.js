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
import {images, colors, icons, fontSize} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import {isValidEmail, isValidPassword} from '../utilities/Validations'
import {
    user as UserRepository,
    population as PopulationRepository,
} from '../repositories'
import { SafeAreaView } from 'react-native-safe-area-context';


function Profile(props) {
    const [user, setUser] = useState({})
    // const [pageNumber, setPageNumber] = useState(0)
    //call when component loaded => componentDidMount
    useEffect(() => {
        UserRepository.getUserDetail()
            .then(responseUser => setUser(responseUser))
    }, [])
    // UserRepository.getUserDetail()
    const {email, dateOfBirth, gender, 
        userId, address, username, url, 
        phone, registerDate} = user
    return <SafeAreaView style={{
        flex: 1,
        paddingTop: 50,
        paddingStart: 20,

    }}>
        <Text>Mail</Text>
    </SafeAreaView>
}

export default Profile;