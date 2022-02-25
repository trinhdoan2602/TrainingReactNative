import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
} from 'react-native';

//component = function
import Icon from 'react-native-vector-icons/FontAwesome5'
import { colors } from '../../constants';

function FiveStars(props) {

    const {numberOfStars} = props;
    return <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
        {[0, 1, 2, 3, 4].map(item => <Icon 
        key ={`${item}`}
        name="star" 
        size={8} 
        color={item <= numberOfStars - 1 ? colors.warning : colors.inactive}
        style={{
            marginEnd: 2,
        }}
        
    ></Icon>)}
    </View>
}

export default FiveStars;