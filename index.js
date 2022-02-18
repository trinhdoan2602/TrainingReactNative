/**
javascript
 */

import React from 'react';
import {AppRegistry, Text} from 'react-native';
import {name as appName} from './app.json';
import {Welcome, Login, Register, FoodList} from './screens';

let fakedProducts = [
    {
        productName: 'iphone 3',
        year: 2013
    },
    {
        productName: 'iphone 4',
        year: 2014
    },
    {
        productName: 'iphone 5',
        year: 2015
    },
    {
        productName: 'iphone 6',
        year: 2016
    },
]

// AppRegistry.registerComponent(appName,
//     () => () => <Welcome
//                  x={1} y={2}
//                  person = {{
//                      name: 'Doan Cong Trinh',
//                      age: 21,
//                      email: 'doancongtrinh@'
//                  }}
//                  products = {fakedProducts}
//                  />);
AppRegistry.registerComponent(appName, () => () => <FoodList />);
