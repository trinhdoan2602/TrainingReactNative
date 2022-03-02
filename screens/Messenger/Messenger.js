import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    FlatList,
    TextInput,
    Keyboard,
} from 'react-native';

//component = function
import Icon from 'react-native-vector-icons/FontAwesome5'
import {images, colors, icons, fontSize} from '../../constants'
import { UIHeader } from '../../components';
import MessengerItem from './MessengerItem';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    auth,
    onAuthStateChanged,
    firebaseDatabaseRef,
    firebaseSet,
    firebaseDatabase,
    onValue,
} from '../../firebase/firebase'

function Messenger(props) {
    const [typedText, setTypedText] = useState('')
    const [chatHistory, setChatHistory] = useState([
        {
            url: 'https://www.randomaddressgenerator.com/media/face/male90.jpg',
            showUrl: true,
            isSenders: true,
            messenger: "hello",
            timestamp: 1641654238000,
        },
        
    ])
    useEffect(() => {
        onValue(firebaseDatabaseRef(firebaseDatabase, 'chats'), async (snapshot) => {
            if(snapshot.exists()) {
                let snapshotObject = snapshot.val()
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                let updatedChatHistory = Object.keys(snapshotObject)
                .filter(item => item.includes(myUserId))
                .map(eachKey => {
                    let eachObject = snapshotObject[eachKey]
                    return {
                        ...eachObject,
                        isSender: eachKey.split('-')[0] == myUserId,
                        url: 'https://www.randomaddressgenerator.com/media/face/male90.jpg'
                    }
                })
                .sort((item1, item2) => item1.timestamp - item2.timestamp)
                for(let i = 0; i < updatedChatHistory.length; i++) {
                    let item = updatedChatHistory[i]
                    // if(i == 0) {
                    //     item.showUrl == true
                    // } else {
                    //     if(isSender != updatedChatHistory[i].isSender) {
                    //         item.showUrl = false
                    //     }
                    // }
                    item.showUrl = (i == 0) ? true : item.isSender != updatedChatHistory[i].isSender
                }
                setChatHistory(updatedChatHistory)
                
            } else {
                console.log('No data available')
            }
        })
    }, [])
    const {url, name, userId} = props.route.params.user
    const {navigate, goBack} = props.navigation
    return <View style={{
        flexDirection: 'column',
        flex: 1,
    }}>
    <UIHeader 
        title={name}
        leftIconName={"arrow-left"}
        rightIconName={"ellipsis-v"}
        onPressLeftIcon={() => {
            goBack()
        }}
        onPressRightIcon={() => {
            alert('press 3dot icon')
        }}
    
     />
       
        <FlatList 
            style={{
                flex: 1,
            }}
            data={chatHistory}
            renderItem={({item}) => <MessengerItem
                onPress={()=> {
                    alert(`name: ${item.timestamp}`)
                }}
                item = {item} key ={`${item.timestamp}`} />}
        />
        <View style={{
            height: 50,
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            flexDirection: 'row',
            paddingStart: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
        }}>
            <TextInput
                onChangeText={(typedText) => {
                    setTypedText(typedText);
                }}
                style={{
                    color: 'black',
                }}
                placeholder='Enter your message here'
                value = {typedText}
                placeholderTextColor={colors.placeholder}
            ></TextInput>
           <TouchableOpacity onPress={async () =>{
               if(typedText.trim().length == 0) {
                   return
               }
               
                let stringUser = await AsyncStorage.getItem("user")
                let myUserId = JSON.parse(stringUser).userId
                let myFriendUserId = props.route.params.user.userId
                let newMessengerObject = {
                   //fake
                    url: 'https://www.randomaddressgenerator.com/media/face/male90.jpg',
                    showUrl: false,
                    messenger: typedText,
                    timestamp: (new Date()).getTime(),
                }
                Keyboard.dismiss()
                //Save to firebase DB
                firebaseSet(firebaseDatabaseRef(
                    firebaseDatabase,
                    `chats/${myUserId}-${myFriendUserId}`
                ), newMessengerObject).then(() => {
                    setTypedText('')
                })
           }}>
                <Icon 
                    style={{
                        padding: 10,
                    }}
                    name="paper-plane" 
                    size={20} 
                    color={colors.primary}></Icon>
           </TouchableOpacity>
        </View>
    </View>
}

export default Messenger;