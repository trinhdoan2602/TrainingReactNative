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
    Dimensions,
} from 'react-native';
import {images, colors, icons, fontSize} from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { screenWidth } from '../../utilities/Device';


function MessengerItem(props) {
    
    const {onPress} = props
    const {url, isSenders, messenger, timestamp, showUrl} = props.item
    return(isSenders == false ? <TouchableOpacity
    onPress={onPress}
    style={{
        marginTop: 7,
        flexDirection: 'row',
        alignItems: 'center',
    }}>
       {showUrl == true ? <Image
            style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,
                marginStart: 10,
            }}
            source={{
                uri : url
            }}>
        </Image> : <View style={{
            width: 40,
            height: 40,
            marginRight: 15,
            marginStart: 10,
        }} />}
      <View style={{
          width: screenWidth * 0.6,
          flexDirection: 'row',
      }}>
        <View>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                paddingVertical: 10,
                paddingHorizontal: 7,
                borderRadius: 12,
                backgroundColor: colors.messenger
            }}>{messenger}</Text>
        </View>
      </View>
      <View style={{width: 20}}></View>
    </TouchableOpacity> :
    //isSender = true
    <TouchableOpacity
    onPress={onPress}
    style={{
        marginTop: 7,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    }}>
        
      <View style={{
          width: screenWidth * 0.6,
          flexDirection: 'row',
        justifyContent: 'flex-end',
      }}>
      <View style={{width: 50}}></View>
        <View>
            <Text style={{
                color: 'black',
                fontSize: fontSize.h6,
                paddingVertical: 10,
                paddingHorizontal: 7,
                borderRadius: 12,
                backgroundColor: colors.messenger
            }}>{messenger}</Text>
        </View>
      </View>
      {showUrl == true ? <Image
            style={{
                width: 40,
                height: 40,
                resizeMode: 'cover',
                borderRadius: 20,
                marginRight: 15,
                marginStart: 10,
            }}
            source={{
                uri : url
            }}>
        </Image> : <View style={{
            width: 40,
            height: 40,
            marginRight: 15,
            marginStart: 10,
        }} />}
    </TouchableOpacity>
    
    )
}

export default MessengerItem;