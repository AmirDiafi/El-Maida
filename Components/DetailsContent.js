import React from 'react'
import {Image, View} from 'react-native'
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler'
import {Divider, Title, Subheading} from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Styles from './StyleSheets/MainCard'
import Header from './Header'

class DetailsContent extends React.Component {
  state = {isLiked: false}

  componentDidMount() {
    AsyncStorage.getItem(`${this.props.data.id.toString()}`).then((item) => {
      this.setState({isLiked: item})
    })
  }

  handleLike = () => {
    if (!this.state.isLiked) {
      AsyncStorage.setItem(
        `${this.props.data.id.toString()}`,
        `${this.props.data.id.toString()}`,
      ).then(() => this.setState({isLiked: !this.state.isLiked}))
    } else {
      this.setState({isLiked: !this.state.isLiked})
      AsyncStorage.removeItem(`${this.props.data.id.toString()}`)
    }
  }

  render() {
    const {data, navigation} = this.props
    return (
      <View style={{flex: 1}}>
        <Header title="Details" navigation={navigation} />
        <ScrollView>
          <View style={{marginBottom: 25}}>
            <Image
              style={{
                width: '100%',
                height: 200,
                borderBottomLeftRadius: 30,
                borderBottomRightRadius: 30,
              }}
              source={{uri: data.image}}
            />
            <View
              style={{
                backgroundColor: 'rgba(0,0,0,.5)',
                borderRadius: 20,
                padding: 5,
                position: 'absolute',
                bottom: 10,
                right: 10,
                shadowColor: '#000',
                shadowOffset: {width: 2, height: 2},
                shadowOpacity: 0.8,
                shadowRadius: 20,
              }}>
              <TouchableOpacity activeOpacity={0.5} onPress={this.handleLike}>
                {this.state.isLiked ? (
                  <Ionicons name="ios-heart" size={40} color="#db6400" />
                ) : (
                  <Ionicons
                    name="ios-heart-outline"
                    size={40}
                    color="#db6400"
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
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
                <Ionicons
                  color="#db6400"
                  size={24}
                  name="ios-barbell-outline"
                />
              </View>
            </View>
            <View style={Styles.detailsContainer2}>
              <View style={Styles.details}>
                <Subheading style={Styles.text}> {data.stocks} </Subheading>
                <Ionicons color="#db6400" size={24} name="ios-people-outline" />
              </View>
            </View>
          </View>
          <Divider />
          <View>
            {data.mikdar.map((item, index) => (
              <View key={index}>
                <Title
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Cairo-Regular',
                    marginTop: 15,
                  }}>
                  {item.title}
                </Title>
                <View style={{padding: 20}}>
                  {item.actions.map((action, i) => (
                    <Subheading
                      key={i}
                      style={{
                        textAlign: 'auto',
                        fontFamily: 'Cairo-Regular',
                        marginVertical: 5,
                      }}>
                      {action}
                    </Subheading>
                  ))}
                </View>
              </View>
            ))}
          </View>
          <View>
            {data.tahdir.map((item, index) => (
              <View key={index}>
                <Title
                  style={{
                    textAlign: 'center',
                    fontFamily: 'Cairo-Regular',
                    marginTop: 15,
                  }}>
                  {item.title}
                </Title>
                <View style={{padding: 20}}>
                  {item.actions.map((action, i) => (
                    <Subheading
                      key={i}
                      style={{
                        textAlign: 'auto',
                        fontFamily: 'Cairo-Regular',
                        marginVertical: 5,
                      }}>
                      {action}
                    </Subheading>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    )
  }
}

export default DetailsContent
