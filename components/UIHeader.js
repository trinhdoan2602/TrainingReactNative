import React, { Component } from "react"
import {
    TouchableOpacity,
    Text,
    View,
    FlatList,
} from "react-native"
import Icon from 'react-native-vector-icons/FontAwesome5'
import {colors, fontSize} from '../constants'

function UIHeader(props) {
    const {title, 
        leftIconName, 
        rightIconName, 
        onPressLeftIcon, onPressRightIcon} = props
    return <View style={{
        height: 55,
        backgroundColor: colors.primary,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    }}>
    {leftIconName != undefined ? <Icon
        onPress={onPressLeftIcon}
        name={leftIconName}
        size={20} 
        color={'white'}
        style={{
            padding: 10,
        }}
    ></Icon> : <View style={{
        width: 50,
        height: 50,
    }} />}
    <Text style = {{
        fontSize: fontSize.h5,
        alignSelf: 'center',
        lineHeight: 45,
        color: 'white',
    }}>{title}</Text>
    {rightIconName != undefined ? <Icon
        onPress={onPressRightIcon}
        name={rightIconName}
        size={20} 
        color={'white'}
        style={{
            padding: 10,
        }}
    ></Icon> : <View style={{
        width: 50,
        height: 50,
    }} />}
    </View>
}

export default UIHeader;