/*
yarn add react-navigation
yarn add react-native-safe-area-context
yarn add @react-navigation/bottom-tabs
yarn add @react-navigation/native
yarn add @react-navigation/native-stack
*/

import * as React from "react"
import {Settings, ProductGridView, FoodList, Profile, Chat} from '../screens'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {fontSize, colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'

const Tab = createBottomTabNavigator()
const ScreenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,

    tabBarIcon: ({focused, color, size}) => {
        let screenName = route.name
        const iconName = screenName == "ProductGridView" ? "align-center" :
            (screenName == "FoodList" ? "accusoft" :
                (screenName == "Settings" ? "cogs" :
                (screenName == "Chat" ? "facebook-messenger" : "")))

        return <Icon 
            name={iconName} 
            size={20} 
            color={focused ? 'white' : colors.inactive}
        ></Icon>
    }
})
function UITab(props){
    return <Tab.Navigator screenOptions={ScreenOptions}>
        <Tab.Screen 
            name={"ProductGridView"}
            component={ProductGridView}
            options={{
                tabBarLabel: 'Products'
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name={"FoodList"}
            component={FoodList}
            options={{
                tabBarLabel: 'Foods'
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name={"Settings"}
            component={Settings}
            options={{
                tabBarLabel: 'Settings'
            }}
        ></Tab.Screen>
        <Tab.Screen 
            name={"Chat"}
            component={Chat}
            options={{
                tabBarLabel: 'Chat'
            }}
        ></Tab.Screen>
    </Tab.Navigator>
}

export default UITab;