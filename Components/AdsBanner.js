import React from 'react'
import {SafeAreaView} from 'react-native'
import {AdMobBanner} from 'react-native-admob'

const App = () => {
  const onFailToRecieveAd = (error) => console.log(error)

  return (
    <>
      <SafeAreaView>
        <AdMobBanner
          adSize="largeBanner"
          adUnitID="ca-app-pub-8967420236427435/3327000132"
          testDevices={[AdMobBanner.simulatorId]}
          didFailToReceiveAdWithError={onFailToRecieveAd}
        />
      </SafeAreaView>
    </>
  )
}

export default App
