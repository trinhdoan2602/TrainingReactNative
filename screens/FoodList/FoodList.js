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
import FoodItem from './FoodItem';

/*
- ListView from a map of objects
- FlatList dung thu vien san co
*/

function FoodList(props){
    // list foods . doan code duoc chay lai khi load
    const [foods, setFoods] = useState([
        {
            name: 'Cafe Muoi',
            url: 'https://www.eatthis.com/wp-content/uploads/sites/4/2019/09/spaghetti-meatballs.jpg',
            status: 'Opening soon',
            price: 1234.55,
            website: 'http://google.com',
            socialNetwork: {
                twitter: 'http://google.com',
                facebook: 'http://google.com',
            }
        },
        {
            name: 'Bac Xiu',
            url: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/04/24/09/pizza-istock.jpg',
            status: 'Opening Now',
            price: 6.55,
            website: 'http://google.com',
            socialNetwork: {
                    facebook: 'http://google.com',
                }
            
        },
        {
            name: 'Cafe Sai Gon',
            url: 'https://image.shutterstock.com/z/stock-vector-italian-traditional-food-set-italian-cuisine-food-collection-vector-illustration-391219561.jpg',
            status: 'Closing soon',
            price: 55.55,
            website: 'http://google.com',
            socialNetwork: {
                instagram: 'http://google.com',
            }
        },
        {
            name: 'Cafe ten dai ten dai ten dai Cafe ten dai ten dai ten dai Cafe ten dai ten dai ten dai',
            url: 'https://scitechdaily.com/images/Delicious-Cheeseburger-Close-Up-777x518.jpg',
            status: 'Comming soon',
            price: 96.59,
            website: 'http://google.com',
            socialNetwork: {
                facebook: 'http://google.com',
                instagram: 'http://google.com',
            }
        },
        {
            name: 'Mot nua vang trang',
            url: 'https://cdn5.vectorstock.com/i/1000x1000/15/44/delicious-tasty-fast-food-and-drink-item-vector-14191544.jpg',
            status: 'Closing soon',
            price: 96.55,
            website: 'http://google.com',
            socialNetwork: {
                twitter: 'http://google.com',
            }
        },
        {
            name: 'Cuop ngan hang',
            url: 'https://image.shutterstock.com/z/stock-vector-italian-traditional-food-set-italian-cuisine-food-collection-vector-illustration-391219561.jpg',
            status: 'Closing soon',
            price: 999.55,
            website: 'http://google.com',
            socialNetwork: {
                instagram: 'http://google.com',
            }
        },
    ])
    const [categories, setCategories] = useState([
        {
            name: 'BBQ',
            url: 'https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2020/08/bbq-la-gi.jpg',
        },
        {
            name: 'Breakfast',
            url: 'https://product.hstatic.net/1000365253/product/the_coffee_club_vietnam_big_breakfast_a26b0ed14bb943f38ef60bfa9bf1b0af_1024x1024.png',
        },
        {
            name: 'Coffee',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
        },
        {
            name: 'BBQ',
            url: 'https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2020/08/bbq-la-gi.jpg',
        },
        {
            name: 'Breakfast',
            url: 'https://product.hstatic.net/1000365253/product/the_coffee_club_vietnam_big_breakfast_a26b0ed14bb943f38ef60bfa9bf1b0af_1024x1024.png',
        },
        {
            name: 'Coffee',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
        },
        {
            name: 'BBQ',
            url: 'https://cdn.quantrinhahang.edu.vn/wp-content/uploads/2020/08/bbq-la-gi.jpg',
        },
        {
            name: 'Breakfast',
            url: 'https://product.hstatic.net/1000365253/product/the_coffee_club_vietnam_big_breakfast_a26b0ed14bb943f38ef60bfa9bf1b0af_1024x1024.png',
        },
        {
            name: 'Coffee',
            url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/275px-A_small_cup_of_coffee.JPG',
        },
    ])
    const [searchText, setSearchText] = useState('')
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
        }}>
        <View>
        <View style={{
            marginHorizontal: 10,
            marginVertical: 8,
            flexDirection: 'row',
            alignItems: 'center',
            }}>
                <Icon
                    name="search" 
                    size={20} 
                    color={'black'}
                    style={{
                        position: 'absolute',
                        top: 8,
                        left: 8,
                    }}
                ></Icon>
                <TextInput
                autoCorrect = {false}
                onChangeText={(text) => {
                    setSearchText(text)
                }}
                style={{
                    backgroundColor: colors.inactive,
                    height: 35,
                    flex: 1,
                    marginEnd: 7,
                    borderRadius: 6,
                    opacity: 0.5,
                    paddingStart: 30,
                }}></TextInput>
                 <Icon name="bars" size={30} color={'black'}></Icon>
            </View>
            <View style={{
                height: 100,
            }}>
            <View style={{
                height: 1, 
                backgroundColor: colors.inactive,
                }}></View>
            <FlatList
            horizontal = {true}
                data={categories}
                keyExtractor={item => item.name}
                renderItem={({item}) => {
                    return <TouchableOpacity
                    onPress={() => {
                        alert(`Press name: ${item.name}`)
                    }}
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                         <Image
                            style={{
                                width: 50,
                                height: 50,
                                resizeMode: 'cover',
                                borderRadius: 25,
                                margin: 10,
                            }}
                            source={{
                                uri : item.url,
                            }}></Image>
                            <Text style={{
                                color: 'black',
                                fontSize: fontSize.h6 * 0.9
                            }}>{item.name}</Text>
                    </TouchableOpacity>
                }}
                style={{
                    flex: 1,
                }}></FlatList>
            <View style={{height: 1, backgroundColor: colors.inactive}}></View>
            </View>
            {/* <ScrollView>
                {foods.map(eachFood => <FoodItem
                onPress={() => {
                    alert(`You press item's name: ${item.name}`)
                }}
                food = {eachFood} key={eachFood.name} />
                    )}
            </ScrollView> */}
         {  <FlatList
           data={foods.filter(eachFood => eachFood.name.toLowerCase()
           .includes(searchText.toLowerCase()))}
           renderItem={({item}) => <FoodItem
                onPress={()=> {
                    alert(`name: ${item.name}`)
                }}
                food = {item} key ={item.name}
            keyExtractor={eachFood => eachFood.name}
           ></FoodItem>}
           >
           </FlatList>}
        </View>
    </View>
}

export default FoodList;