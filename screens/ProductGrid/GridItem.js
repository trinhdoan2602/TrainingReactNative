import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    FlatList,
} from 'react-native';
import {images, colors, icons, fontSize} from '../../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import FiveStars from './FiveStars';

function GridItem(props) {
    const {item, index, onPress} = props;
    return <View style={{
        flex: 0.5,
        marginLeft: index % 2 ==0 ? 10 : 0,
        marginTop: 5,
        marginRight: 10,
        marginBottom: 5,
        borderRadius: 16,
        borderWidth: 1,
        borderColor: colors.inactive,
    }}>
        <View style={{
            flexDirection: 'row',
            marginTop: 10,
        }}>
            <Image
            style={{
                width: 70,
                height: 90,
                resizeMode: 'cover',
                borderRadius: 16,
                marginRight: 15,
            }}
            source={{
                uri : item.url
            }}></Image>
             <Text style={{
            color: 'black',
            fontSize: fontSize.h2,
            }}>$ {item.price}</Text>
        </View>
        <Text style={{
            color: colors.primary,
            fontWeight: 'bold', 
            fontSize: fontSize.h5,
            marginHorizontal: 10,
            marginTop: 5,
            }}>
            $ {item.productName}
            </Text>
            {
                item.specification.map(specification => 
                <Text 
                key = {specification}
                style={{
                    color: 'black',
                    fontSize: fontSize.h6,
                    paddingHorizontal: 10,
                    paddingBottom: 10,
                }}>* {specification}</Text>)
            }
            <View style={{
                flexDirection: 'row',
                padding: 10,
            }}>
                 <TouchableOpacity
                 onPress={onPress}
                 style={{
                     flexDirection: 'row',
                 }}>
                    <Icon 
                    name="heart" 
                    size={21} 
                    color={item.isSaved == undefined || item.isSaved == false ?
                    colors.inactive : 'red'
                    }
                    style={{
                        marginEnd: 5,
                    }}
                    
                    ></Icon>
                    <Text style={{
                        color: item.isSaved == undefined || item.isSaved == false ?
                            colors.inactive : 'red',
                        width: 50,
                        fontSize: fontSize.h6*0.8}}>Saved for later</Text>
                 </TouchableOpacity>
                     <View style={{
                         flex: 1,
                     }}>
                       <FiveStars numberOfStars={item.stars}></FiveStars>
                       <Text
                       style={{
                           color: colors.success,
                           fontSize: fontSize.h6*0.8,
                           textAlign: 'right',
                           paddingTop: 5,
                       }}>{item.reviews} reviews</Text>
                     </View>
            </View>
    </View>
}

export default GridItem;