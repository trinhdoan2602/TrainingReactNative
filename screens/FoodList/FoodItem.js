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

function FoodItem(props) {
    let {name, price, socialNetwork, status, url, website} = props.food //dung destructuring an object
    function _getColorFromStatus(status) {
        // if(status.toLowerCase().trim() == 'opening now') {
        //     return colors.success
        // } else if(status.toLowerCase().trim() == 'closing soon') {
        //     return colors.alert
        // } else if(status.toLowerCase().trim() == 'comming soon') {
        //     return colors.warning
        // } 
        // return colors.success
        return status.toLowerCase().trim() == 'opening soon' ? colors.success :
                (status.toLowerCase().trim() == 'closing soon' ? colors.alert :
                (status.toLowerCase().trim() == 'cooming soon' ? colors.warning : colors.success))

    }
    const {onPress} = props
    return( <TouchableOpacity
    onPress={onPress}
    style={{
        height: 150,
        paddingTop: 20,
        paddingStart: 10,
        flexDirection: 'row',
    }}>
        <Image
        style={{
            width: 100,
            height: 100,
            resizeMode: 'cover',
            borderRadius: 10,
            marginRight: 15,
        }}
        source={{
            uri : url
        }}></Image>
        <View style={{
            flex: 1,
            marginRight: 10,
        }}>
        <Text style={{
            color: 'black',
            fontSize: fontSize.h5,
            fontWeight: 'bold',
        }}>{name}</Text>
        <View style={{
            height: 1,
            backgroundColor: 'black',
        }}></View>
        <View style={{
            flexDirection: 'row',
        }}>
            <Text style={{
                color: colors.inactive,
                fontSize: fontSize.h5,

            }}>Status: </Text>
            <Text style={{
                color: _getColorFromStatus(status),
                fontSize: fontSize.h5,
            }}>{status.toUpperCase()}</Text>
        </View>
        <Text style={{
                color: colors.inactive,
                fontSize: fontSize.h5,
            }}>Price: {price} $</Text>
        <Text style={{
                color: colors.inactive,
                fontSize: fontSize.h5,
            }}>FoodType: CocaCola</Text>
        <Text style={{
                color: colors.inactive,
                fontSize: fontSize.h5,
            }}>Website: {website}</Text>
            <View style={{
                flexDirection: 'row',
            }}>
                {socialNetwork['facebook'] != undefined && <Icon
                    style={{
                        paddingEnd: 7
                    }}
                    name='facebook'
                    size={23}
                    color={colors.inactive}
                ></Icon> }
                 {socialNetwork['twitter'] != undefined && <Icon
                    style={{
                        paddingEnd: 7
                    }}
                    name='twitter'
                    size={23}
                    color={colors.inactive}
                ></Icon> }
                 { socialNetwork['instagram'] != undefined && <Icon
                    name='instagram'
                    size={23} 
                    color={colors.inactive}
                ></Icon> }
            </View>
        </View>
    </TouchableOpacity>
    )
}

export default FoodItem;