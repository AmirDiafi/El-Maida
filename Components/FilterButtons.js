import React from 'react'
import {View, Text} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import Styles from './StyleSheets/FilterStyles'
import Ionicons from 'react-native-vector-icons/Ionicons'

class FilterButtons extends React.Component {
  render() {
    const {navigation} = this.props
    return (
      <View style={Styles.container}>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate('FilterdScreen', 'Food')}>
            <Ionicons name="restaurant-outline" size={30} color="#ffa62b" />
            <Text style={Styles.text}>Food</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate('FilterdScreen', 'Dessert')}>
            <Ionicons name="ice-cream-outline" size={30} color="#ffa62b" />
            <Text style={Styles.text}>Dessert</Text>
          </TouchableOpacity>
        </View>
        <View style={Styles.buttonContainer}>
          <TouchableOpacity
            style={Styles.button}
            onPress={() => navigation.navigate('FilterdScreen', 'Drink')}>
            <Ionicons name="ios-beer-outline" size={30} color="#ffa62b" />
            <Text style={Styles.text}>Drink</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default FilterButtons
