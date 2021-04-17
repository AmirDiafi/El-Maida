import React from 'react'
import MainCard from '../Components/MainCard'
import {View, FlatList} from 'react-native'
import Header from '../Components/Header'
import data from '../apis/data.json'

class Filtred extends React.Component {
  render() {
    const {navigation, route} = this.props
    return (
      <View style={{flex: 1}}>
        <Header title={this.props.route.params} navigation={navigation} />
        <FlatList
          data={data
            .sort((a, b) => b.id - a.id)
            .filter((item) => item.type === route.params)}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({item}) => (
            <MainCard navigation={navigation} data={item} />
          )}
        />
      </View>
    )
  }
}

export default Filtred
