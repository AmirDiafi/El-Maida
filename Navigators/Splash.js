import React from 'react'
import SplashScreen from '../Components/SplashScreen'

class Splash extends React.Component {
  render() {
    return <SplashScreen navigation={this.props.navigation} />
  }
}

export default Splash
