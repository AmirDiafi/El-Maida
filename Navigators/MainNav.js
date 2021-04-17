import React from 'react'
import AboutScreen from '../Screens/AboutScreen'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeSubNav from './SubNavigators/HomeSubNav'
import FavScreen from '../Screens/FavScreen'

const Tab = createMaterialBottomTabNavigator()

class MainNav extends React.Component {
  render() {
    return (
      <Tab.Navigator shifting={true}>
        <Tab.Screen
          options={{
            tabBarLabel: 'Home',
            tabBarColor: '#db6400',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-home-outline" color={color} size={26} />
            ),
          }}
          name="Home"
          component={HomeSubNav}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'favorites',
            tabBarColor: '#16697a',
            tabBarIcon: ({color}) => (
              <Ionicons name="ios-heart" color={color} size={26} />
            ),
          }}
          name="Favs"
          component={FavScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: 'About',
            tabBarColor: '#ffa62b',
            tabBarIcon: ({color}) => (
              <Ionicons
                name="ios-information-circle-outline"
                color={color}
                size={26}
              />
            ),
          }}
          name="About"
          component={AboutScreen}
        />
      </Tab.Navigator>
    )
  }
}

export default MainNav
