import React from 'react'
import {View, Image} from 'react-native'

class MainHeader extends React.Component {
  render() {
    return (
      <View style={{marginBottom: 30, height: 120}}>
        <Image
          resizeMode="cover"
          style={{height: '100%', padding: 10}}
          source={{
            uri:
              'https://drive.google.com/uc?export=view&id=1HpvHrV_-rs2tMbTIajY_2ljr93tgSRCz',
          }}
        />
      </View>
    )
  }
}

export default MainHeader
