import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import DetailsScreen from '../../Screens/DetailsScreen'
import HomeScreen from '../../Screens/HomeScreen'
import FilterdScreen from '../../Screens/FilterdScreen'

const Stack = createStackNavigator()

class HomeSubNav extends React.Component {
  render() {
    return (
      <Stack.Navigator headerMode={false}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="FilterdScreen" component={FilterdScreen} />
      </Stack.Navigator>
    )
  }
}

export default HomeSubNav
