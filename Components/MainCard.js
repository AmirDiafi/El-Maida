import React from 'react'
import {View, Image, TouchableOpacity} from 'react-native'
import {Title, Divider, Subheading} from 'react-native-paper'
import Styles from './StyleSheets/MainCard'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MainCard extends React.Component {
  render() {
    const {data, navigation} = this.props
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={Styles.cardContainer}
        onPress={() => navigation.navigate('DetailsScreen', data)}>
        <Image
          style={Styles.image}
          source={{
            uri: data.image,
          }}
        />
        <View style={Styles.textContainer}>
          <Title style={Styles.title}>{data.title}</Title>
          <Divider />
          <View style={Styles.detailsContainer}>
            <View style={Styles.details}>
              <Subheading style={Styles.text}> {data.time} </Subheading>
              <Ionicons color="#db6400" size={24} name="ios-timer-outline" />
            </View>
            <View style={Styles.details}>
              <Subheading style={Styles.text}> {data.level} </Subheading>
              <Ionicons color="#db6400" size={24} name="ios-barbell-outline" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default MainCard
