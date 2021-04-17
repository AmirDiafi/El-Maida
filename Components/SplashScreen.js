import React from 'react'
import {Image, StatusBar, Text, View} from 'react-native'
import Styles from './StyleSheets/SplashStyle'
import Ionicons from 'react-native-vector-icons/Ionicons'
import {TouchableOpacity} from 'react-native-gesture-handler'
import {AdMobBanner} from 'react-native-admob'
import {Subheading} from 'react-native-paper'

class SpashScreen extends React.Component {
  render() {
    return (
      <View style={Styles.container}>
        <StatusBar hidden={true} />
        <View style={Styles.logo}>
          <Image
            style={Styles.image}
            source={require('../assets/images/logo.png')}
          />
        </View>
        <Text style={Styles.title}>ElMaida</Text>
        <Subheading style={Styles.desc}>
          تمتع الآن باشهى الآطباق و الحلويات والمشروبات
        </Subheading>
        <TouchableOpacity
          style={Styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Main')}>
          <Text style={Styles.buttonText}> تصفح المآكولات</Text>
          <Ionicons name="arrow-forward-circle-outline" size={29} />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
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
      </View>
    )
  }
}

export default SpashScreen
