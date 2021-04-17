import React from 'react'
import {View} from 'react-native'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {Title} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Styles from './StyleSheets/HeaderStyle'

class Header extends React.Component {
  render() {
    const {navigation, title} = this.props
    return (
      <View style={Styles.headerContaner}>
        <View style={Styles.icon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons size={26} color="#f8f1f1" name="arrow-back" />
          </TouchableOpacity>
        </View>
        <Title style={Styles.title}> {title} </Title>
      </View>
    )
  }
}

export default Header
