import AsyncStorage from '@react-native-async-storage/async-storage'
import React from 'react'
import {View, FlatList, ActivityIndicator, Text} from 'react-native'
import {Divider, Subheading, Title} from 'react-native-paper'
import Data from '../apis/data.json'
import MainCard from '../Components/MainCard'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TouchableOpacity} from 'react-native-gesture-handler'

class Favs extends React.Component {
  state = {
    data: undefined,
  }

  componentWillUnmount() {
    this.setState({
      data: undefined,
    })
  }
  render() {
    AsyncStorage.getAllKeys().then((data) => {
      this.setState({
        data: Data.filter((item) => data.includes(item.id.toString())),
      })
    })

    const {navigation} = this.props
    return this.state.data ? (
      this.state.data.length <= 0 ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title
              style={{
                fontFamily: 'Cairo-Regular',
                textShadowRadius: 1,
                marginRight: 5,
                textShadowOffset: {width: 1, height: 1},
              }}>
              ليس لديك آية وصفات مفضلة بعد
            </Title>
            <Ionicons color="#ffa62b" size={26} name="ios-heart" />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Subheading
              style={{
                fontSize: 17,
                fontFamily: 'Cairo-Regular',
              }}>
              حدد وصفاتك المفضلة الآن
            </Subheading>
            <TouchableOpacity
              onPress={() => navigation.navigate('Home')}
              style={{
                backgroundColor: '#ffa62b',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 100,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  color: '#080101',
                  fontSize: 20,
                  marginRight: 10,
                  fontFamily: 'Cairo-Regular',
                }}>
                تصفح المآكولات
              </Text>
              <Ionicons
                color="#080101"
                name="arrow-forward-circle-outline"
                size={29}
              />
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={{flex: 1}}>
          <View
            style={{
              padding: 10,
              backgroundColor: '#16697a',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Title
              style={{
                color: '#f8f1f1',
                fontSize: 23,
                marginRight: 10,
                fontFamily: 'Cairo-Regular',
              }}>
              Favorites
            </Title>
          </View>
          <View
            style={{
              marginVertical: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
                padding: 7,
                borderRadius: 10,
                backgroundColor: '#16697a',
              }}>
              <Title
                style={{
                  fontFamily: 'Cairo-Regular',
                  textAlign: 'center',
                  paddingRight: 5,
                  fontSize: 20,
                  color: '#f8f1f1',
                }}>
                {this.state.data.length}
              </Title>
              <Ionicons color="#ffa62b" name="ios-heart" size={29} />
            </View>
          </View>
          <Divider />
          <FlatList
            style={{flex: 1}}
            data={this.state.data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <MainCard navigation={this.props.navigation} data={item} />
            )}
          />
        </View>
      )
    ) : (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <View>
          <ActivityIndicator size={56} color="#16697a" />
        </View>
        <Subheading>Loading...</Subheading>
      </View>
    )
  }
}

export default Favs
