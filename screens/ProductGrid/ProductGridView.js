import React, {useState, useEffect} from 'react';
import {
    Text,
    View,
    FlatList,
} from 'react-native';
import GridItem from './GridItem';

function ProductGridView(props) {
    const [products, setProduct] = useState([
        {
            productName: 'Karcher International Kt',
            url: 'https://s1.kaercher-media.com/products/14286200/main/1/d0.jpg',
            price: 71,
            specification: [
                'Dry Clean',
                'Cyclone Filter',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            productName: 'Vacuum cleaner VC 2, Kärcher',
            url: 'https://media.stokker.com/prod/l/013/140676013.jpg',
            price: 86,
            specification: [
                'Dry Clean',
                'Stands upright',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 4,
        },
        {
            productName: ' Hoover WindTunnel Max Bagged Upright Vacuum Cleaner',
            url: 'https://m.media-amazon.com/images/I/61++l4wpFcL._AC_SX425_.jpg',
            price: 106,
            specification: [
                'Slim design',
                'Cyclone Filter',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            productName: 'Karcher International Ne',
            url: 'https://s1.kaercher-media.com/products/14286200/main/1/d0.jpg',
            price: 73,
            specification: [
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 1,
        },
        {
            productName: 'Vacum cleaner VC 2, Kärcher',
            url: 'https://media.stokker.com/prod/l/013/140676013.jpg',
            price: 86,
            specification: [
                'Dry Clean',
                'Stands upright',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 2,
        },
        {
            productName: '',
            url: 'https://m.media-amazon.com/images/I/61++l4wpFcL._AC_SX425_.jpg',
            price: 106,
            specification: [
                'Slim design',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            productName: 'Katche International',
            url: 'https://s1.kaercher-media.com/products/14286200/main/1/d0.jpg',
            price: 146,
            specification: [
                'Dry Clean',
                'Cyclone Filter',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 5,
        },
        {
            productName: 'Vacuum cleaner VC 2, Kärcher',
            url: 'https://media.stokker.com/prod/l/013/140676013.jpg',
            price: 86,
            specification: [
                'Dry Clean',
                'Stands upright',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 4,
        },
        {
            productName: ' Hover WindTunnel Max Bagged Upright Vacuum Cleaner',
            url: 'https://m.media-amazon.com/images/I/61++l4wpFcL._AC_SX425_.jpg',
            price: 96,
            specification: [
                'Slim design',
                'Cyclone Filter',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 3,
        },
        {
            productName: 'Karcher International',
            url: 'https://s1.kaercher-media.com/products/14286200/main/1/d0.jpg',
            price: 76,
            specification: [
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 1,
        },
        {
            productName: 'Vacuum cleaner VC 2, Kaake',
            url: 'https://media.stokker.com/prod/l/013/140676013.jpg',
            price: 16,
            specification: [
                'Dry Clean',
                'Stands upright',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 2,
        },
        {
            productName: 'No name',
            url: 'https://m.media-amazon.com/images/I/61++l4wpFcL._AC_SX425_.jpg',
            price: 176,
            specification: [
                'Slim design',
                'Convenience Cord',
            ],
            reviews: 19,
            stars: 3,
        },
    ])
    return <View style={{
        flex: 1,
        backgroundColor: 'white',
    }}>
        <FlatList
        style={{
            marginTop: 5
        }}
        data={products}
        numColumns = {2}
        keyExtractor={item => item.productName}
        renderItem={({item, index}) => <GridItem 
            item={item} 
            index={index}
            onPress={() => {
                let clonedProduct = products.map(eachProduct => {
                        if(item.productName === eachProduct.productName){
                            // return {...eachProduct, isSaved: true}
                            return {...eachProduct, 
                            isSaved: eachProduct.isSaved == false || eachProduct.isSaved == undefined ? true : false}
                        }
                        return eachProduct
                    })
                    setProduct(clonedProduct)
            }}
        ></GridItem>}
        ></FlatList>
    </View>
}

export default ProductGridView;