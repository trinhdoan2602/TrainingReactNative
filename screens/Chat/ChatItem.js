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
import {images, colors, icons, fontSize} from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

function ChatItem(props) {
    let {
            name, 
            url, 
            message, 
            numberOfUnreadMessages,
            userId,
        } = props.user //dung destructuring an object
   
    const {onPress} = props
    return( <TouchableOpacity
    onPress={onPress}
    style={{
        height: 80,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
    }}>
        <View>
            <Image
            style={{
                width: 50,
                height: 50,
                resizeMode: 'cover',
                borderRadius: 25,
                marginRight: 15,
                marginStart: 10,
            }}
            source={{
                uri : url
            }}>
            </Image>
            {numberOfUnreadMessages > 0 && <Text style={{
                backgroundColor: 'red',
                position: 'absolute',
                right: 8,
                fontSize: fontSize.h6,
                borderRadius: 8,
                paddingHorizontal: numberOfUnreadMessages > 9 ? 2 : 4,
                color: 'white',
            }}>
                {numberOfUnreadMessages}
            </Text>}
        </View>
       <View style={{
           flexDirection: 'column',
       }}>
       <Text style={{
            color: 'black',
            fontSize: fontSize.h6,
            fontWeight: 'bold',
        }}>{name}</Text>

       <Text style={{
            color: 'black',
            fontSize: fontSize.h6,
        }}>{message}</Text>
       </View>
       
       <View style={{
           flexDirection: 'column',
           flex: 1,
           justifyContent: 'center',
           alignItems: 'flex-end',
       }}>
       <Text style={{
            color: 'black',
            fontSize: fontSize.h6 * 0.8,
            marginRight: 13,
        }}>4 minutes ago</Text>
       </View>
       
    </TouchableOpacity>
    
    )
}

export default ChatItem;