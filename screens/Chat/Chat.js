import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
} from 'react-native';

//component = function
import Icon from 'react-native-vector-icons/FontAwesome5'
import {images, colors, icons, fontSize} from '../../constants'
import { UIHeader } from '../../components';
import ChatItem from './ChatItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    firebaseDatabaseRef,
    firebaseDatabase,
    onValue,
} from '../../firebase/firebase'
// import { get } from 'react-native/Libraries/Utilities/PixelRatio';
function Chat(props) {
    const [users, setUsers] = useState([
        // {
        //     url: 'https://www.randomaddressgenerator.com/media/face/male83.jpg',
        //     name: 'Alex AKM',
        //     message: 'Hi, em an com chua?',
        //     numberOfUnreadMessages: 3,
        // },
        
    ])
    const {navigation, route} = props;
    const {navigate, goBack} = navigation;
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'users'), async (snapshot) => {
            if(snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                setUsers( Object.keys(snapshotObject).
                    filter(item => item != myUserId).map(eachKey => {
                    let eachObject = snapshotObject[eachKey]
                    return {
                        //default frofile url
                        url: 'https://www.w3schools.com/howto/img_avatar.png',
                        name: eachObject.email,
                        email: eachObject.email,
                        accessToken: eachObject.accessToken,
                        numberOfUnreadMessages: 0,
                        userId: eachKey,
                    }
                }))
            } else {
                console.log('No data available')
            }
        })
    }, [])
    return <View style={{
        flexDirection: 'column',
    }}>
    <UIHeader 
        title={"Notifications"}
        leftIconName={"arrow-left"}
        rightIconName={"search"}
        onPressLeftIcon={() => {
            // alert('press left icon')
            goBack()
        }}
        onPressRightIcon={() => {
            alert('press right icon')
        }}
    
     />
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginStart: 10,
        }}>
            <Text style={{
                color: 'black'
            }}>6 unread messages</Text>
            <Icon
                onPress={() => {
                    alert('press delete')
                }}
                name={'search'}
                size={14} 
                color={'black'}
                style={{
                    padding: 10,
                }}
            ></Icon>
        </View>
        <FlatList 
            style={{
            }}
            data={users}
            renderItem={({item}) => <ChatItem
                onPress={()=> {
                    // alert(`name: ${item.name}`)
                    navigate('Messenger', {user: item})
                }}
                user = {item} key ={item.url} />}
        />
    </View>
}

export default Chat;