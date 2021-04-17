import React from 'react'
import MainCard from '../Components/MainCard'
import {View, FlatList} from 'react-native'
import Data from '../apis/data.json'
import FilterButtons from '../Components/FilterButtons'
import {Divider} from 'react-native-paper'
import {AdMobBanner} from 'react-native-admob'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Divider />
        <View
          style={{
            borderWidth: 5,
            borderColor: '#ffa62b',
            overflow: 'hidden',
          }}>
          <AdMobBanner
            adSize="fullBanner"
            adUnitID="ca-app-pub-8967420236427435/3327000132"
            testDevices={[AdMobBanner.simulatorId]}
            onAdFailedToLoad={(error) => console.error(error)}
          />
        </View>
        <Divider />
        <FilterButtons navigation={this.props.navigation} />
        <FlatList
          data={Data.sort((a, b) => b.id - a.id)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <MainCard navigation={this.props.navigation} data={item} />
          )}
        />
      </View>
    )
  }
}

export default HomeScreen
